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
import {
  LOADING_STATES,
  ACTION_TYPES
} from "../../state/constants";

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

  render() {
    const {
      integrateBankReducer: { loadingState: loadingStateFromReducer, quovoUiToken },
      actionType,
      connection: connectionToFix,
      userData: { userType }
    } = this.props;

    const loadingState = loadingStateFromReducer === LOADING_STATES.UNLINKING_CONNECTION ? LOADING_STATES.NONE : loadingStateFromReducer;

    return (
      <React.Fragment>
        {loadingState !== LOADING_STATES.NONE
          ? <View style={styles.container}>
              <Spinner color={colors.blue} />
            </View>
          : <WebView
              source={{
                uri: `${API}/link.html?token=${quovoUiToken}${userType ===
                "tester"
                  ? "&test=true"
                  : ""}${actionType === ACTION_TYPES.RELINK
                  ? `&connectionId=${connectionToFix.quovoConnectionID}`
                  : ""}`
              }}
              onMessage={this.onWebViewMessage}
              style={styles.webViewContainer}
              startInLoadingState
              renderLoading={() =>
                <View style={[styles.container, styles.webViewPadder]}>
                  <Spinner color={colors.blue} />
                </View>}
            />}
      </React.Fragment>
    );
  }
}

AuthenticateBank.propTypes = {
  onQuovoClose: PropTypes.func.isRequired,
  actionType: PropTypes.oneOf(Object.values(ACTION_TYPES))
};
AuthenticateBank.defaultProps = {
  actionType: ACTION_TYPES.INITAL
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
