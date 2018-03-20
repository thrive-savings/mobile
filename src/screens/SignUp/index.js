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

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength8 = minLength(8);
const minLength5 = minLength(5);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

class SignUpForm extends Component {
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
      //this.props.navigation.goBack();
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
    if(contactedApi && !error) {
      if(Object.keys(data).length === 0) {
        this.props.navigation.navigate("VerifyCode");
      } else {
        //TODO: Check if bank linked
      }
    }
  }

  render() {
    const { data, isSaving, error, errorMessage } = this.props.signUpReducer;

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
        <StatusBar
          backgroundColor={commonColor.statusBarColor}
          barStyle="light-content"
        />
        <Image
          source={require("../../../assets/bg-signup.png")}
          style={styles.background}
        >
          <Content padder>
            <Text style={styles.signupHeader}>CREATE ACCOUNT</Text>
            <View style={styles.signupContainer}>
              <Field
                name="firstName"
                component={this.renderInput}
                type="text"
                validate={[required, alphaNumeric]}
              />
              <Field
                name="lastName"
                component={this.renderInput}
                type="text"
                validate={[required, alphaNumeric]}
              />
              <Field
                name="email"
                component={this.renderInput}
                type="email"
                validate={[email, required]}
              />
              <Field
                name="phone"
                component={this.renderInput}
                type="text"
                validate={[required, alphaNumeric, minLength5]}
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
                bordered
                block
                onPress={() => this.fastSignUp()}
                style={styles.signupBtn}
              >
                {
                  isSaving
                   ? <Spinner />
                   : <Text style={{ color: "#FFF" }}>Continue</Text>
                }
              </Button>
            </View>
          </Content>
          <Footer
            style={{
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <Left style={{ flex: 2 }}>
              <Button small transparent>
                <Text style={styles.helpBtns}>Terms & Conditions</Text>
              </Button>
            </Left>
            <Right style={{ flex: 1 }}>
              <Button
                small
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Text style={styles.helpBtns}>SignIn</Text>
              </Button>
            </Right>
          </Footer>
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
