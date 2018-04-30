import React, { Component } from "react";
import {
  WebView,
  View
} from "react-native";
import { Spinner } from "native-base";
import { connect } from "react-redux";

import Dots from "../../../../components/Dots";

import { FlinksURL } from "../../../../../config";

import { fetchAccounts } from "../../state/actions";

import styles from "./styles";
import colors from "../../../../theme/colors";

class AuthenticateBank extends Component {
  constructor(props) {
    super(props);

    this.onMessage = this.onMessage.bind(this);
  }

  onMessage(event) {
    const { requestId, loginId, institution } = JSON.parse(event.nativeEvent.data);
    if (requestId && loginId && institution) {
      this.props.fetchAccounts({ loginID: loginId });
      this.props.next(loginId, institution);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Dots step={2} count={3} />

        <WebView
          source={{
            uri: `${FlinksURL}/?demo=true&waitSummary=true&stringify=true&backgroundColor=ffffff&foregroundColor1=0089CB&foregroundColor2=414042&redirectUrl=https://example.com`
          }}
          onMessage={this.onMessage}
          style={styles.webViewContainer}
          startInLoadingState={true}
          renderLoading={() => <Spinner color={colors.blue} />}
        />
      </View>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchAccounts: (payload = {}) => dispatch(fetchAccounts(payload))
  };
}

export default connect(null, mapDispatchToProps)(AuthenticateBank);
