import React, { Component } from "react";
import {
  WebView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import Dots from "../../../../components/Dots";

import { URL, FlinksURL } from "../../../../../config";
import { fetchAccounts, setDefault } from "../../state/actions";

import styles from "./styles";

class AuthenticateBank extends Component {
  constructor(props) {
    super(props);

    this.state = {savedInfo: false,  text: "value"};

    this.onMessage = this.onMessage.bind(this);
  }

  onMessage(event) {
    console.log("Received Message");
    const data = event.nativeEvent;
    console.log(data);

    const { requestId, loginId, institution } = data;
    if (requestId && loginId && institution) {
      this.setState({})
    }
  }

  fetchBankAccounts() {
    console.log("Fetching Bank Accounts");
    this.props.fetchAccounts({loginID: this.state.loginId});
  }

  render_old() {
    console.log(`Rendering IntegrateBank component with following state: `);
    console.log(this.state);

    const { loginId, institution } = this.state;

    if (loginId && institution) {
      this.fetchBankAccounts();
      return <Text>Fetching Bank Accounts</Text>;
    } else {
      return (
        <WebView
          source={{uri: `${FlinksURL}/?demo=true&jsRedirect=true&stringify=true&waitSummary=true&backgroundColor=58cd83&redirectUrl=${URL}/integration`}}
          onMessage={this.onMessage}
        />
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Dots step={2} />

        <Text style={styles.titleText}>LINK YOUR BANK ACCOUNT</Text>

        <WebView
          source={{uri: `${FlinksURL}/?demo=true&jsRedirect=true&stringify=true&waitSummary=true&backgroundColor=58cd83&redirectUrl=${URL}/integration`}}
          onMessage={this.onMessage}
          style={styles.webViewContainer}
        />
      </View>
    );
  }
}


function mapStateToProps (state) {
  return {
    authReducer: state.authReducer,
    integrateBankReducer: state.integrateBankReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchAccounts: (payload = {}) => dispatch(fetchAccounts(payload)),
    setDefault: (payload = {}) => dispatch(setDefault(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateBank);
