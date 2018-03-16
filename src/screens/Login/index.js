// @flow
import React, { Component } from "react";
import { Image, Platform, StatusBar } from "react-native";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  Icon,
  View,
  Left,
  Right,
  Toast,
  Spinner
} from "native-base";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { authUser } from './state/actions';

import styles from "./styles";
// import commonColor from "../../theme/variables/commonColor";

const bg = require("../../../assets/bg.png");
const logo = require("../../../assets/logo.png");

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

declare type Any = any;
class LoginForm extends Component {
  textInput: Any;

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon
            active
            name={input.name === "email" ? "mail" : "unlock"}
            style={{ color: "#fff" }}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder={input.name === "email" ? "Email" : "Password"}
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
          : <Text style={styles.formErrorText2}>error here</Text>}
      </View>
    );
  }

  fastLogin() {
    this.props.authUser({email: "naib.baghirov@gmail.com", password: "naibferide8"});
  }

  login() {
    if (this.props.valid && this.props.values) {
      this.props.authUser(this.props.values);
    } else {
      Toast.show({
        text: "Enter Valid Username & password!",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    const { authUser } = this.props;
    const navigation = this.props.navigation;

    const { data, notVerified, isFetching, error, errorMessage } = this.props.authReducer;

    let errorText = "";
    if(error) {
      const { errors } = errorMessage;
      if(errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Image source={bg} style={styles.background}>
          <Content contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
              <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.container}>
              <View style={styles.form}>
                <Field
                  name="email"
                  component={this.renderInput}
                  type="email"
                  validate={[email, required]}
                />
                <Field
                  name="password"
                  component={this.renderInput}
                  type="password"
                  validate={[alphaNumeric, minLength8, maxLength15, required]}
                />

                {error && <Text style={styles.formErrorText3}>{errorText}</Text>}

                <Button
                  rounded
                  primary
                  block
                  large
                  style={styles.loginBtn}
                  onPress={() => this.login()}
                >
                  {
                    isFetching
                     ? <Spinner color="white"/>
                     : <Text
                         style={
                           Platform.OS === "android"
                             ? { fontSize: 16, textAlign: "center", top: -5 }
                             : { fontSize: 16, fontWeight: "900" }
                         }
                       >
                         Get Started
                       </Text>
                  }
                </Button>

                <View style={styles.otherLinksContainer}>
                  <Left>
                    <Button
                      small
                      transparent
                      style={{ alignSelf: "flex-start" }}
                      onPress={() => navigation.navigate("SignUp")}
                    >
                      <Text style={styles.helpBtns}>Create Account</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button
                      small
                      transparent
                      style={{ alignSelf: "flex-end" }}
                      onPress={() => navigation.navigate("ForgotPassword")}
                    >
                      <Text style={styles.helpBtns}>Forgot Password</Text>
                    </Button>
                  </Right>
                </View>
                <View style={{ flex: 1, alignSelf: "flex-end" }}>
                  <Button
                    light
                    small
                    transparent
                    style={styles.skipBtn}
                    onPress={() => this.fastLogin()}
                  >
                    <Text
                      style={
                        (
                          [styles.helpBtns],
                          { top: Platform.OS === "ios" ? null : 0 }
                        )
                      }
                    >
                      Skip
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
          </Content>
        </Image>
      </Container>
    );
  }
}

function mapStateToProps (state) {
  return {
    values: state.form && state.form.login && state.form.login.values ? state.form.login.values : undefined,
    authReducer: state.authReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    authUser: (payload={}) => dispatch(authUser(payload))
  }
}

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const Login = reduxForm({
  form: "login"
})(LoginForm);
export default Login;
