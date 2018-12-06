import React, { Component } from "react";
import { View, WebView, KeyboardAvoidingView } from "react-native";
import { Spinner } from "native-base";
import { connect } from "react-redux";

import { API } from "../../../../../config";
import amplitude from "../../../../globals/amplitude";

import Dots from "../../../../components/Dots";

import { fetchAccounts, getUiToken, changeBankStep } from "../../state/actions";
import { LOADING_STATES } from "../../state/constants";

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
      // Call server with data
      const {
        connection: {
          id: connectionID,
          institutionId: institutionID,
          userId: userID
        }
      } = data;
      this.props.fetchAccounts({ userID, connectionID, institutionID });
    }
  };

  render() {
    const { loadingState, quovoUiToken } = this.props.integrateBankReducer;

    return (
      <View style={[styles.container, globalStyles.shadow]}>
        <Dots step={2} count={3} />

        {loadingState !== LOADING_STATES.NONE
          ? <Spinner color={colors.blue} />
          : <WebView
              source={{
                uri: `${API}/link.html?token=${quovoUiToken}&test=true`
              }}
              onMessage={this.onWebViewMessage}
              style={styles.webViewContainer}
              startInLoadingState={true}
              renderLoading={() => <Spinner color={colors.blue} />}
            />}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    companyID: state.signUpReducer.companyID,
    integrateBankReducer: state.integrateBankReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAccounts: (payload = {}) => dispatch(fetchAccounts(payload)),
    getUiToken: () => dispatch(getUiToken()),
    changeBankStep: (payload = { step: 0 }) => dispatch(changeBankStep(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateBank);
