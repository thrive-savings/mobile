import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, WebView } from "react-native";
import { Spinner } from "native-base";
import { connect } from "react-redux";

import { API } from "../../../../../config";
import amplitude from "../../../../globals/amplitude";

import Dots from "../../../../components/Dots";

import {
  fetchConnection,
  getUiToken,
  changeBankStep
} from "../../state/actions";
import { LOADING_STATES, ACTION_TYPES } from "../../state/constants";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

class AuthenticateBank extends Component {
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

    console.log(msgData);

    const { event, data, error } = msgData;

    if (event === "onClose") {
      this.props.changeBankStep();
    } else if (event === "onSync" && !error && data.sync.authenticated) {
      const { connection: { id: connectionID } } = data;
      this.props.fetchConnection({ connectionID });
    }
  };

  render_old() {
    const {
      integrateBankReducer: { loadingState, quovoUiToken },
      actionType,
      connection: connectionToFix,
      userData: { userType }
    } = this.props;

    return (
      <View style={[styles.container, globalStyles.shadow]}>
        <Dots step={2} count={3} />

        {loadingState !== LOADING_STATES.NONE
          ? <Spinner color={colors.blue} />
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
              startInLoadingState={true}
              renderLoading={() => <Spinner color={colors.blue} />}
            />}
      </View>
    );
  }

  render() {
    const {
      integrateBankReducer: { loadingState, quovoUiToken },
      actionType,
      connection: connectionToFix,
      userData: { userType }
    } = this.props;

    return (
      <WebView
        source={{
          uri: `${API}/link.html?token=${quovoUiToken}${userType === "tester"
            ? "&test=true"
            : ""}${actionType === ACTION_TYPES.RELINK
            ? `&connectionId=${connectionToFix.quovoConnectionID}`
            : ""}`
        }}
        onMessage={this.onWebViewMessage}
        style={styles.webViewContainer}
        startInLoadingState={true}
        renderLoading={() => <Spinner color={colors.blue} />}
      />
    );
  }
}

AuthenticateBank.propTypes = {
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
    getUiToken: () => dispatch(getUiToken()),
    changeBankStep: (payload = {}) => dispatch(changeBankStep(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateBank);
