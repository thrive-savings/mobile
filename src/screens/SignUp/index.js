// @flow
import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Toast,
} from "native-base";
import { reduxForm } from "redux-form";

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";

import ReferralCode from "./pages/ReferralCode";
import PersonalDetails from "./pages/PersonalDetails";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");


class SignUp extends Component {
  fastSignUp() {
    const values = {
      "email": "naib@thrivesavings.com",
      "firstName": "Naib",
      "lastName": "MobileTester",
      "password": "naibferide8",
      //"phone": "9991239876"
      "phone": "6476763323"
    };
    this.props.signUpUser(values);
  }

  signUp() {
    if (this.props.valid) {
      this.props.signUpUser(this.props.values);
    } else {
      Toast.show({
        text: "All the fields are compulsory!",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    const { step } = this.props.signUpReducer;

    let body;
    switch (step) {
      case 0:
        body = <ReferralCode navigation={this.props.navigation} />;
        break;
      case 1:
        body = <PersonalDetails navigation={this.props.navigation} />;
        break;
      default:
        body = <ReferralCode />;
        break;
    }

    return (
      <Container>
        <StatusBar
          backgroundColor={commonColor.customColors.statusbar}
          barStyle="light-content"
        />
        <Image
          source={bg}
          style={styles.background}
        >
          {body}
        </Image>
      </Container>
    );
  }
}

function mapStateToProps (state) {
  return {
    signUpReducer: state.signUpReducer
  };
}

export default reduxForm({
  form: "signup"
})(connect(mapStateToProps)(SignUp));
