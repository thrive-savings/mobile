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

//import { required, maxLength15, minLength8, alphaNumeric, email } from "../../globals/validators";

import ReferralCode from "./pages/ReferralCode";

const bg = require("../../../assets/Backgrounds/bg.png");
const logo = require("../../../assets/Logo/white-large.png");


class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { step: 0 };
  }

  textInput: any;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon
            active
            name={
              input.name === "firstName" || input.name === "lastName"
                ? "person"
                : input.name === "phone"
                  ? "md-phone-portrait"
                  : input.name === "email" ? "mail" : "unlock"
            }
            style={{ color: "#fff" }}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder={
              input.name === "firstName"
                ? "First Name"
                : input.name === "lastName"
                  ? "Last Name"
                  : input.name === "email"
                    ? "Email"
                    : input.name === "phone" ? "Phone" : "Password"
            }
            secureTextEntry={input.name === "password" ? true : false}
            {...input}
          />
          {touched && error
            ? <Icon
                active
                style={styles.formErrorIcon}
                onPress={() => this.textInput._root.clear()}
                name="close"
              />
            : <Text />}
        </Item>
        {touched && error
          ? <Text style={styles.formErrorText1}>
              {error}
            </Text>
          : <Text style={styles.formErrorText2}> error here</Text>}
      </View>
    );
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
      console.log("Calling SignUpUser");
      console.log(this.props.values);
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
    const { data, isSaving, error, errorMessage } = this.props.signUpReducer;

    let errorText = "";
    if (error) {
      const { errors } = errorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    let body;
    switch (this.state.step) {
      case 0:
        body = <ReferralCode navigation={this.props.navigation} />;
        break;
      case 1:
        body = <ReferralCode />;
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
