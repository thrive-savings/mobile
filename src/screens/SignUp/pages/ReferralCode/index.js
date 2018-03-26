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
import { required } from "../../../../globals/validators";

const logo = require("../../../../../assets/Logo/white-large.png");

class ReferralCode extends Component {
  textInput: Any;

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder={input.name === "referral" ? "ENTER CODE" : "Placeholder"}
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

  render() {
    const navigation = this.props.navigation;

    return (
      <Content contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.text}>Please enter the referral code you received from your employer.</Text>
          <Field
            name="referral"
            component={this.renderInput}
            type="referral"
            validate={[required]}
          />
          <Text style={styles.text}>Contact your administrator if there are any issues</Text>
          <Button
            block
            style={styles.createAccountBtn}
            onPress={() => console.log("Pressed")}
          >
            {
              false ?
                <Spinner color="white" /> :
                <Text style={styles.createAccountBtnText}>
                  Create My Account
                </Text>
            }
          </Button>
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
              onPress={() => navigation.navigate("LogIn")}
            >
              <Text uppercase={false} style={styles.bottomBtnText}>
                Log In.
              </Text>
            </Button>
          </View>
        </View>
      </Content>
    );
  }
}

export default ReferralCode;
