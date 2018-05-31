// @flow
import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  StatusBar,
  Keyboard
} from "react-native";
import { connect } from "react-redux";

import Header from "../../components/Header";

import globalStyles from "../../globals/globalStyles";
import colors from "../../theme/colors";

import ReferralCode from "./pages/ReferralCode";
import PersonalDetails from "./pages/PersonalDetails";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFooter: true
    };
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", this._keyboardDidHide.bind(this));
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    this.setState({showFooter: false});
  }

  _keyboardDidHide () {
    this.setState({showFooter: true});
  }

  render() {
    const { step } = this.props.signUpReducer;

    let body, header;
    switch (step) {
      case 0:
        body = <ReferralCode navigation={this.props.navigation} />;
        break;
      case 1:
        header = <Header button="none" />;
        body = <PersonalDetails navigation={this.props.navigation} />;
        break;
      default:
        break;
    }

    return (
      <View style={globalStyles.container}>
        <StatusBar backgroundColor={colors.statusbar} barStyle="light-content" />
        <ImageBackground source={bg} style={globalStyles.background}>
          {header}
          {body}
          {
            this.state.showFooter &&
            <TouchableOpacity activeOpacity={0.6} style={globalStyles.bottomContainer} onPress={() => this.props.navigation.navigate("Login")} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
              <Text style={globalStyles.bottomLabelText} onPress={() => this.props.navigation.navigate("Login")}>
                Already have an account?
                <Text style={globalStyles.bottomBtnText}> Log In.</Text>
              </Text>
            </TouchableOpacity>
          }
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    signUpReducer: state.signUpReducer
  };
}

export default connect(mapStateToProps)(SignUp);
