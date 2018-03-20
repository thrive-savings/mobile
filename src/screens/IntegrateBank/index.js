import React, { Component } from "react";
import { WebView, Image, StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  Text,
  Spinner
} from "native-base";

import { URL, FlinksURL } from "../../../config";
import { fetchAccounts, setDefault } from "./state/actions";

class IntegrateBank extends Component {
  constructor(props) {
    super(props);

    this.state = {savedInfo: false,  text: "value"};

    this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
  }

  onMessage(event) {
    console.log("onMessage got called");
    console.log(event.nativeEvent.data);
  }

  onNavigationStateChange(navState) {
    console.log("onNavigationStateChange got called");
    console.log(navState);
    console.log("after printing navState");
    if(this.state.savedInfo) return;
    if (navState.url.indexOf(`${URL}/integration`) === 0) {
      let regex = /[?&]([^=#]+)=([^&#]*)/g,
        params = {},
        match;
      while (match = regex.exec(navState.url)) {
        params[match[1]] = match[2];
      }
      const { loginId, institution } = params;
      if(loginId && institution) {
        console.log(`Setting the state with ${loginId}, ${institution}`);
        this.setState({loginId, institution, savedInfo: true});
      }
    }
  }

  fetchBankAccounts() {
    console.log("Fetching Bank Accounts");
    this.props.fetchAccounts({loginID: this.state.loginId});
  }

  render() {
    console.log(`Rendering IntegrateBank component with following state: `);
    console.log(this.state);

    const { loginId, institution } = this.state;

    if(loginId && institution) {
      this.fetchBankAccounts();
      return <Text>Fetching Bank Accounts</Text>;
    } else {
      return (
        <WebView
          source={{uri: `${FlinksURL}/?demo=true&waitSummary=true&backgroundColor=58cd83&redirectUrl=${URL}/integration`}}
          //onMessage={this.onMessage}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      );
    }
  }
}


function mapStateToProps (state) {
  return {
    authReducer: state.authReducer,
    integrateBankReducer: state.integrateBankReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchAccounts: (payload={}) => dispatch(fetchAccounts(payload)),
    setDefault: (payload={}) => dispatch(setDefault(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntegrateBank);
