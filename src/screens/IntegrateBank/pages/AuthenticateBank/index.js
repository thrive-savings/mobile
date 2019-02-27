import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, WebView } from "react-native";
import { Spinner } from "native-base";
import { connect } from "react-redux";

import { API } from "../../../../../config";
import amplitude from "../../../../globals/amplitude";

import {
  fetchConnection,
  setDefaultAuthAccount,
  unlinkConnection,
  getUiToken,
  changeBankStep
} from "../../state/actions";
import { LOADING_STATES } from "../../state/constants";

import styles from "./styles";
import colors from "../../../../theme/colors";

class AuthenticateBank extends Component {
  state = {
    connectionID: undefined,
    status: undefined
  };

  componentDidMount() {
    amplitude.track(amplitude.events.AUTH_BANK_VIEW);
    this.props.getUiToken();
  }

  onWebViewMessage = msg => {
    let msgData;
    try {
      msgData = JSON.parse(msg.nativeEvent.data);
    } catch (e) {
      return;
    }

    const {
      event,
      data: { connection: { id: connectionID } = {}, account: { id: accountID } = {} } = {},
      error
    } = msgData;

    amplitude.track(`QUOVO_CONNECT_${event}`, msgData.data);

    if (!error) {
      switch (event) {
        case "onAdd":
        case "onSync":
          this.props.fetchConnection({ connectionID });
          break;
        case "onAuthAccountSelected":
          this.props.setDefaultAuthAccount({ accountID });
          break;
        case "onDelete":
          this.props.unlinkConnection({ connectionID: connectionID.toString(), fromQuovo: false });
          break;
        case "onClose":
          this.props.onQuovoClose();
          break;
        default:
          break;
      }
    }
  };

  renderLoading() {
    return (
      <View style={styles.container}>
        <Spinner color={colors.blue} />
      </View>
    );
  }

  render() {
    const {
      integrateBankReducer: { loadingState: loadingStateFromReducer, quovoUiToken },
      connection: connectionToFix,
      userData: { userType }
    } = this.props;

    const loadingState = loadingStateFromReducer === LOADING_STATES.UNLINKING_CONNECTION ? LOADING_STATES.NONE : loadingStateFromReducer;

    return (
      <React.Fragment>
        {
          loadingState !== LOADING_STATES.NONE
            ? this.renderLoading()
            :
              <View style={styles.webViewContainer}>
                <WebView
                  source={{
                    uri: `${API}/link.html?token=${quovoUiToken}${userType ===
                    "tester"
                      ? "&test=true"
                      : ""}${connectionToFix && connectionToFix.quovoConnectionID
                      ? `&connectionId=${connectionToFix.quovoConnectionID}`
                      : ""}`
                  }}
                  onMessage={this.onWebViewMessage}
                  startInLoadingState
                  renderLoading={() => this.renderLoading()}
                />
              </View>
        }
      </React.Fragment>
    );
  }
}

AuthenticateBank.propTypes = {
  onQuovoClose: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    userData: state.authReducer.data.authorized,
    integrateBankReducer: state.integrateBankReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchConnection: (payload = {}) => dispatch(fetchConnection(payload)),
    setDefaultAuthAccount: (payload = {}) => dispatch(setDefaultAuthAccount(payload)),
    unlinkConnection: (payload = {}) => dispatch(unlinkConnection(payload)),
    getUiToken: () => dispatch(getUiToken()),
    changeBankStep: (payload = {}) => dispatch(changeBankStep(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateBank);
