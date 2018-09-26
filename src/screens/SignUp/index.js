// @flow
import React, { Component } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  Keyboard,
  Platform
} from "react-native";
import { connect } from "react-redux";

import Header from "../../components/Header";
import addStatusBar from "../../components/StatusBar";

import globalStyles from "../../globals/globalStyles";

import ReferralCode from "./pages/ReferralCode";
import PersonalDetails from "./pages/PersonalDetails";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardClosed: true
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow",
      this._keyboardDidShow.bind(this)
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide",
      this._keyboardDidHide.bind(this)
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    this.setState({ keyboardClosed: false });
  }

  _keyboardDidHide() {
    this.setState({ keyboardClosed: true });
  }

  render() {
    const { step } = this.props.signUpReducer;

    let body, header;
    switch (step) {
      case 0:
        body = (
          <ReferralCode
            navigation={this.props.navigation}
            keyboardClosed={this.state.keyboardClosed}
          />
        );
        break;
      case 1:
        header = <Header button="none" />;
        body = <PersonalDetails navigation={this.props.navigation} />;
        break;
      default:
        break;
    }

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        {header}
        {body}
        {this.state.keyboardClosed &&
          <TouchableOpacity
            activeOpacity={0.6}
            style={globalStyles.bottomContainer}
            onPress={() => this.props.navigation.navigate("Login")}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={globalStyles.bottomLabelText}>
              Already have an account?
              <Text style={globalStyles.bottomBtnText}> Log In.</Text>
            </Text>
          </TouchableOpacity>}
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    signUpReducer: state.signUpReducer
  };
}

export default connect(mapStateToProps)(addStatusBar(SignUp));
