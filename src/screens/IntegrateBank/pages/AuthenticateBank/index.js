import React, { Component } from "react";
import { WebView, KeyboardAvoidingView } from "react-native";
import { Spinner } from "native-base";
import { connect } from "react-redux";

import amplitude from "../../../../globals/amplitude";

import Dots from "../../../../components/Dots";

import { FlinksURL } from "../../../../../config";

import { fetchAccounts, getUiToken } from "../../state/actions";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

import quovoHtmlWrapper from "./quovoHtmlWrapper.html";

class AuthenticateBank extends Component {
  constructor(props) {
    super(props);

    this.handleDataReceived = this.handleDataReceived.bind(this);
    this.onWebViewMessage = this.onWebViewMessage.bind(this);
  }

  componentDidMount() {
    amplitude.track(amplitude.events.AUTH_BANK_VIEW);
    this.props.getUiToken();
  }

  handleUiTokenRequest(msgData) {
    console.log("Replying with UI TOken");
    const quovoUiToken = this.props.integrateBankReducer.quovoUiToken;
    console.log(quovoUiToken);
    msgData.isSuccessfull = true;
    msgData.args = [quovoUiToken];
    this.myWebView.postMessage(JSON.stringify(msgData));
  }

  handleDataReceived(msgData) {
    msgData.isSuccessfull = true;
    msgData.args = [msgData.data % 2 ? "green" : "red"];
    console.log("Message sent from webview");
    console.log(msgData);
    this.myWebView.postMessage(JSON.stringify(msgData));
  }

  myWebView;
  onWebViewMessage(event) {
    console.log("Message received from webview");

    let msgData;
    try {
      msgData = JSON.parse(event.nativeEvent.data);
    } catch (err) {
      console.warn(err);
      return;
    }

    console.log(msgData);

    switch (msgData.targetFunc) {
      case "handleDataReceived":
        this[msgData.targetFunc].apply(this, [msgData]);
        break;
      case "handleUiTokenRequest":
        this[msgData.targetFunc].apply(this, [msgData]);
        break;
    }
  }

  render() {
    const { isGetting } = this.props.integrateBankReducer;

    const companyID = this.props.companyID;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={[styles.container, globalStyles.shadow]}
      >
        <Dots step={2} count={3} />

        {isGetting
          ? <Spinner color={colors.blue} />
          : <WebView
              source={quovoHtmlWrapper}
              ref={webview => {
                this.myWebView = webview;
              }}
              onMessage={this.onWebViewMessage}
              style={styles.webViewContainer}
              startInLoadingState={true}
              renderLoading={() => <Spinner color={colors.blue} />}
            />}
      </KeyboardAvoidingView>
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
    getUiToken: () => dispatch(getUiToken())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateBank);
