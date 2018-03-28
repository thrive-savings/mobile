import React, { Component } from "react";
import { Image } from "react-native"
import {
  Content,
  View,
  Item,
  Input,
  Icon,
  Text,
  Button,
  Spinner
} from "native-base";

import { Field, reduxForm } from "redux-form";

import styles from "./styles";
import { required, maxLength15, minLength8, alphaNumeric, email } from "../../../../globals/validators";


const logo = require("../../../../../assets/Logo/white.png");

class PersonalDetails extends Component {
  textInput: any;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
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

  render() {
    return (
      <Content contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formContent}>
            <Text style={styles.formLabelText}>
              Please use your legal name as it appears on your bank statements, so that we can verify your account.
            </Text>
            <View style={styles.rowView}>
              <Field
                name="firstName"
                component={this.renderInput}
                type="firstName"
                validate={[required]}
              />
              <Field
                name="lastName"
                component={this.renderInput}
                type="lastName"
                validate={[required]}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text
            style={styles.bottomLabelText}
          >
            Already have an account?
          </Text>
          <Button
            small
            transparent
            style={styles.bottomBtn}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text uppercase={false} style={styles.bottomBtnText}>
              Log In.
            </Text>
          </Button>
        </View>
      </Content>
    );
  }
}

export default PersonalDetails;
