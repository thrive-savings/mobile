// @flow
import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";
import { connect } from "react-redux";

import Header from "../../components/Header";

import globalStyles from "../../globals/globalStyles";
import colors from "../../theme/colors";

import ReferralCode from "./pages/ReferralCode";
import PersonalDetails from "./pages/PersonalDetails";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");


class SignUp extends Component {
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
          <View style={globalStyles.bottomContainer}>
            <Text style={globalStyles.bottomLabelText}>Already have an account?</Text>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={globalStyles.bottomBtnText}>Log In.</Text>
            </TouchableOpacity>
          </View>
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
