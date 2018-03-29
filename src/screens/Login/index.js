// @flow
import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Button,
  Icon,
  View,
  Right,
  Toast,
  Spinner
} from "native-base";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { authUser } from "./state/actions";

import styles from "./styles";
import commonColor from "../../theme/variables/commonColor";

import { required, maxLength15, minLength8, alphaNumeric, email } from "../../globals/validators";

const bg = require("../../../assets/Backgrounds/bg.png");
const logo = require("../../../assets/Logo/white-large.png");

declare type Any = any;
class LoginForm extends Component {
  textInput: Any;

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
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
    this.props.authUser({email: "naib.baghirov@gmail.com", password: "RandomPassword8"});
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
    const navigation = this.props.navigation;

    const { isFetching, error, errorMessage } = this.props.authReducer;

    let errorText = "";
    if (error) {
      const { errors } = errorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={commonColor.customColors.statusbar} />
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

                <View style={styles.forgotPasswordContainer}>
                  <Right>
                    <Button
                      small
                      transparent
                      style={{ alignSelf: "flex-end" }}
                      onPress={() => navigation.navigate("ForgotPassword")}
                    >
                      <Text uppercase={false} style={styles.forgotPasswordBtnText}>Forgot Password?</Text>
                    </Button>
                  </Right>
                </View>

                {error && <Text style={styles.formErrorText3}>{errorText}</Text>}

                <Button
                  block
                  style={styles.loginBtn}
                  onPress={() => this.fastLogin()}
                >
                  {
                    isFetching ?
                      <Spinner color={commonColor.customColors.blue} /> :
                      <Text style={styles.loginBtnText}>
                        Log In
                      </Text>
                  }
                </Button>

                <View style={styles.signUpContainer}>
                  <Text
                    style={styles.signUpLabelText}
                  >
                    Don't have an account?
                  </Text>
                  <Button
                    small
                    transparent
                    style={styles.signUpBtn}
                    onPress={() => navigation.navigate("SignUp")}
                  >
                    <Text uppercase={false} style={styles.signUpBtnText}>
                      Sign Up.
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
  };
}

function mapDispatchToProps (dispatch) {
  return {
    authUser: (payload = {}) => dispatch(authUser(payload))
  };
}

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const Login = reduxForm({
  form: "login"
})(LoginForm);
export default Login;
