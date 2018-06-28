// @flow
import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  TextInput,
  StatusBar,
  Keyboard
} from "react-native";
import { Content, Icon, Toast, Spinner } from "native-base";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import Amplitude from "../../globals/amplitude";

import { authUser } from "./state/actions";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

import { required, maxLength15, minLength8, email } from "../../globals/validators";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const logo = require("../../../assets/Logo/white.png");

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFooter: true
    };
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", this._keyboardDidHide.bind(this));
    Amplitude.track(Amplitude.events.VIEW_LOGIN_SCREEN);
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

  emailTextInput; passwordTextInput;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <View style={styles.inputGrp}>
          <TextInput
            ref={c => {
              switch (input.name) {
                case "email":
                  this.emailTextInput = c; break;
                case "password":
                  this.passwordTextInput = c; break;
              }
            }}
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder={input.name === "email" ? "Email" : "Password"}
            keyboardType={input.name === "email" ? "email-address" : "default"}
            returnKeyType={input.name === "password" ? "done" : "next"}
            onSubmitEditing={() => {
              switch (input.name) {
                case "email":
                  this.passwordTextInput.focus(); break;
              }
            }}
            blurOnSubmit={input.name === "password"}
            secureTextEntry={input.name === "password"}
            underlineColorAndroid="transparent"
            {...input}
          />
          {touched && error
            ? <Icon
                active
                style={globalStyles.formErrorIcon}
                onPress={() => {
                  switch (input.name) {
                    case "email":
                      this.emailTextInput.clear(); break;
                    case "password":
                      this.passwordTextInput.clear(); break;
                  }
                }}
                name="close"
              />
            : <Text />}
        </View>
        {touched && error
          ? <Text style={globalStyles.formErrorText1}>
              {error}
            </Text>
          : <Text style={globalStyles.formErrorText2}>error here</Text>}
      </View>
    );
  }

  login() {
    if (this.props.valid && this.props.values) {
      this.props.authUser(this.props.values);
    } else {
      Toast.show({
        text: "Enter Valid Username & password!",
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    const navigation = this.props.navigation;

    const { isLoading, error, errorMessage } = this.props.authReducer;

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
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
        <ImageBackground source={bg} style={globalStyles.background}>
          <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
          </View>
          <Content showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
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
                validate={[minLength8, maxLength15, required]}
              />

              {error && <Text style={globalStyles.formErrorText3}>{errorText}</Text>}

              <TouchableOpacity activeOpacity={0.6} style={[styles.loginBtn, globalStyles.shadow]} onPress={this.login.bind(this)}>
                {
                  isLoading ?
                    <Spinner color={colors.blue} /> :
                    <Text uppercase style={styles.loginBtnText}>
                      LOG IN
                    </Text>
                }
              </TouchableOpacity>

              {
                this.state.showFooter &&
                <TouchableOpacity style={styles.forgotPasswordContainer} activeOpacity={0.6} onPress={() => navigation.navigate("ForgotPassword")} hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}>
                  <Text uppercase={false} style={styles.forgotPasswordBtnText}>Forgot Password?</Text>
                </TouchableOpacity>
              }

              {
                this.state.showFooter &&
                <TouchableOpacity activeOpacity={0.6} style={globalStyles.bottomContainer} onPress={() => navigation.navigate("SignUp")} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                  <Text style={globalStyles.bottomLabelText}>
                    Don't have an account?
                    <Text style={globalStyles.bottomBtnText}> Sign Up.</Text>
                  </Text>
                </TouchableOpacity>
              }
            </View>
          </Content>
        </ImageBackground>
      </View>
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
