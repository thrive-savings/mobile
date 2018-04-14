import React, { Component } from "react";
import { Image } from "react-native";
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

import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { verifyReferralCode } from "../../state/actions";

import styles from "./styles";
import { required } from "../../../../globals/validators";

const logo = require("../../../../../assets/Logo/white.png");

const commonColor = require("../../../../theme/variables/commonColor");

class ReferralCodeForm extends Component {
  textInput: Any;

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder={input.name === "code" ? "ENTER CODE" : "Placeholder"}
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

  verify() {
    this.props.verifyReferralCode(this.props.values);
  }

  render() {
    const { isLoading, error, errorMessage } = this.props.signUpReducer;

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
      <Content contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.text}>Please enter the referral code you received from your employer.</Text>
          <Field
            name="code"
            component={this.renderInput}
            type="code"
            validate={[required]}
          />
          <Text style={styles.text}>Contact your administrator if there are any issues</Text>
          {error && <Text style={styles.formErrorText3}>{errorText}</Text>}
          <Button
            block
            style={styles.createAccountBtn}
            onPress={() => this.verify()}
          >
            {
              isLoading ?
                <Spinner color={commonColor.customColors.blue} /> :
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
              onPress={() => this.props.navigation.navigate("Login")}
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

function mapStateToProps (state) {
  return {
    values: state.form && state.form.referralCode && state.form.referralCode.values ? state.form.referralCode.values : undefined,
    signUpReducer: state.signUpReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    verifyReferralCode: (payload = {}) => dispatch(verifyReferralCode(payload))
  };
}

ReferralCodeForm = connect(mapStateToProps, mapDispatchToProps)(ReferralCodeForm);

const ReferralCode = reduxForm({
  form: "referralCode"
})(ReferralCodeForm);
export default ReferralCode;
