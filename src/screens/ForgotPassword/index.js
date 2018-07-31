// @flow
import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  TextInput,
  StatusBar
 } from "react-native";
import { connect } from "react-redux";
import { Content, Icon, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";

import Header from "../../components/Header";
import SpecialButton from "../../components/SpecialButton";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

import { clearStorage, passwordRequest, passwordReset } from "./state/actions";

import { required, email, numeric, minLength8 } from "../../globals/validators";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      done: 0
    };

    this.goToLogin = this.goToLogin.bind(this);
    this.request = this.request.bind(this);
    this.reset = this.reset.bind(this);
    this.submit = this.submit.bind(this);
  }

  textInput;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <View style={styles.inputGrp}>
          <TextInput
            ref={c => (this.textInput = c)}
            placeholderTextColor={colors.darkerGrey}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder={
              input.name === "email"
                ? "Email"
                : input.name === "code"
                  ? "Code"
                  : input.name === "password"
                    ? "New Password"
                    : "Confirm Password"
            }
            keyboardType={input.name === "email" ? "email-address" : "default"}
            secureTextEntry={input.name === "password" || input.name === "confirmPassword" ? true : false}
            {...input}
          />
          {touched && error
            ? <Icon
                active
                style={globalStyles.formErrorIcon}
                onPress={() => this.textInput._root.clear()}
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

  request() {
    if (this.props.valid  && this.props.values) {
      this.props.passwordRequest(this.props.values);
    } else {
      Toast.show({
        text: "Enter Valid Email",
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
    }
  }

  reset() {
    if (this.props.valid  && this.props.values) {
      const { code, password, confirmPassword } = this.props.values;
      if (password === confirmPassword) {
        this.props.passwordReset({ code, password });
      } else {
        Toast.show({
          text: "Passwords don't match",
          duration: 2500,
          position: "top",
          type: "danger",
          textStyle: { textAlign: "center" }
        });
      }
    } else {
      Toast.show({
        text: "Fields are not valid",
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
    }
  }

  submit() {
    const { step, done } = this.state;
    if (done) {
      this.goToLogin();
    } else {
      switch (step) {
        case 1:
          this.reset();
          break;
        default:
          this.request();
          break;
      }
    }
  }

  goToLogin() {
    this.props.clearStorage();
    this.props.navigation.goBack();
  }

  renderRequestForm() {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.secondaryText}>Enter your email address and we’ll send you a link to reset your password.</Text>
        <Field
          name="email"
          component={this.renderInput}
          type="email"
          validate={[email, required]}
        />
      </View>
    );
  }

  renderResetForm() {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.secondaryText}>We have sent a verification code to your email, please type it below along with your new password.</Text>
        <Field
          name="code"
          component={this.renderInput}
          type="code"
          validate={numeric}
        />
        <Field
          name="password"
          component={this.renderInput}
          type="password"
          validate={minLength8, required}
        />
        <Field
          name="confirmPassword"
          component={this.renderInput}
          type="confirmPassword"
          validate={minLength8, required}
        />
      </View>
    );
  }

  renderDone() {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.secondaryText}>You have successfully changed your password. Please go back to login screen to proceed.</Text>
      </View>
    );
  }

  componentWillReceiveProps(nextProps) {
    const { requestSucceeded, resetSucceeded } = nextProps.forgotPasswordReducer;
    if (!this.state.step && requestSucceeded) {
      this.setState({step : 1});
    }  else if (this.state.step && resetSucceeded) {
      this.setState({step: 0, done: 1});
    }
  }

  render() {
    const { isLoading, error, errorMessage } = this.props.forgotPasswordReducer;

    let errorText = "";
    if (error) {
      const { errors } = errorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    const { done, step } = this.state;

    return (
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={globalStyles.background}>
          <Header navigation={this.props.navigation} button="back" onButtonPress={this.goToLogin} />
          <Content showsVerticalScrollIndicator={false} style={styles.contentContainer}>
            <View style={styles.contentView}>
              <Text style={styles.labelText}>RESET PASSWORD</Text>
              {
                done
                  ? this.renderDone()
                  : step
                    ? this.renderResetForm()
                    : this.renderRequestForm()
              }
              {error && <Text style={globalStyles.formErrorText3}>{errorText}</Text>}
              <SpecialButton loading={isLoading} text={done ? "GO TO LOGIN" : "SUBMIT"} onClick={this.submit}/>
              {
                !done &&
                <TouchableOpacity activeOpacity={0.6} onPress={this.request} style={styles.resendButton} disabled={isLoading} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                  <Text style={styles.resendButtonText}>
                    Resend
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
    values: state.form && state.form.forgotPassword && state.form.forgotPassword.values ? state.form.forgotPassword.values : undefined,
    forgotPasswordReducer: state.forgotPasswordReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    clearStorage: () => dispatch(clearStorage()),
    passwordRequest: (payload = {}) => dispatch(passwordRequest(payload)),
    passwordReset: (payload = {}) => dispatch(passwordReset(payload))
  };
}

ForgotPasswordForm = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);

const ForgotPassword = reduxForm({
  form: "forgotPassword"
})(ForgotPasswordForm);
export default ForgotPassword;
