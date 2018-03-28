// @flow
import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Item,
  Input,
  View,
  Toast,
  Left,
  Right,
  Footer,
  Spinner
} from "native-base";
import { Field, reduxForm } from "redux-form";

import { signUpUser } from "./state/actions";

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";

import ReferralCode from "./pages/ReferralCode";
import PersonalDetails from "./pages/PersonalDetails";

const bg = require("../../../assets/Backgrounds/bg.png");


class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { step: 0 };
  }

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

  componentDidUpdate() {
    const { data, contactedApi, error } = this.props.signUpReducer;
    if (contactedApi && !error) {
      if (Object.keys(data).length === 0) {
        this.props.navigation.navigate("VerifyCode");
      } else {
        //TODO: Check if bank linked
      }
    }
  }

  render() {
    let body;
    switch (this.state.step) {
      case 0:
        body = <ReferralCode navigation={this.props.navigation} />;
        break;
      case 1:
        body = <PersonalDetails />;
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
    values: state.form && state.form.signup && state.form.signup.values ? state.form.signup.values : undefined,
    signUpReducer: state.signUpReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    signUpUser: (payload={}) => dispatch(signUpUser(payload))
  }
}

SignUpForm = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

const SignUp = reduxForm({
  form: "signup"
})(SignUpForm);
export default SignUp;
