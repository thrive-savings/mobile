import React, { Component } from "react";
import { WebView, KeyboardAvoidingView } from "react-native";
import { Spinner } from "native-base";
import { connect } from "react-redux";

import amplitude from "../../../../globals/amplitude";

import Dots from "../../../../components/Dots";

import { FlinksURL } from "../../../../../config";

import { fetchAccounts } from "../../state/actions";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

class AuthenticateBank extends Component {
  constructor(props) {
    super(props);

    this.onMessage = this.onMessage.bind(this);
  }

  componentDidMount() {
    amplitude.track(amplitude.events.AUTH_BANK_VIEW);
  }

  onMessage(event) {
    const { requestId, loginId, institution } = JSON.parse(
      event.nativeEvent.data
    );
    if (requestId && loginId && institution) {
      this.props.fetchAccounts({ loginID: loginId });
      this.props.next(loginId, institution);
    }
  }

  render() {
    const { relinkRequired, bank, companyID } = this.props;

    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={[styles.container, globalStyles.shadow]}
      >
        <Dots step={2} count={3} />

        <WebView
          source={{
            uri: `${FlinksURL}${relinkRequired && bank
              ? `/Credential/${bank}/?backEnable=false&`
              : `/${companyID > 0
                  ? "?"
                  : "?demo=true&"}`}theme=light&waitSummary=true&withMFAQuestions=true&stringify=true&scheduleRefresh=true&backgroundColor=ffffff&foregroundColor1=0089CB&foregroundColor2=414042&redirectUrl=https://google.com`
          }}
          onMessage={this.onMessage}
          style={styles.webViewContainer}
          startInLoadingState={true}
          renderLoading={() => <Spinner color={colors.blue} />}
        />
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state) {
  return {
    companyID: state.signUpReducer.companyID
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAccounts: (payload = {}) => dispatch(fetchAccounts(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateBank);
