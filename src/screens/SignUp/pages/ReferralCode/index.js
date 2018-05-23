import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput
} from "react-native";
import { Icon, Spinner, Toast } from "native-base";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { verifyReferralCode } from "../../state/actions";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

import { required } from "../../../../globals/validators";

const logo = require("../../../../../assets/Logo/white.png");

class ReferralCodeForm extends Component {
  textInput;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <View style={styles.inputGrp}>
          <TextInput
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder={input.name === "code" ? "ENTER CODE" : "Placeholder"}
            underlineColorAndroid="transparent"
            {...input}
          />
          {touched && error
            ? <Icon
                active
                style={globalStyles.formErrorIcon}
                onPress={() => this.textInput.clear()}
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

  verify() {
    if (this.props.valid) {
      this.props.verifyReferralCode(this.props.values);
    } else {
      Toast.show({
        text: "Valid Code Required",
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
    }

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
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={[styles.text, styles.textAbove]}>Please enter the referral code you received from your employer.</Text>
        <Field
          name="code"
          component={this.renderInput}
          type="code"
          validate={[required]}
        />
        <Text style={[styles.text, styles.textBelow]}>Contact your administrator if there are any issues</Text>
        {error && <Text style={globalStyles.formErrorText3}>{errorText}</Text>}
        <TouchableOpacity activeOpacity={0.6} style={[styles.createAccountBtn, globalStyles.shadow]} onPress={this.verify.bind(this)}>
          {
            isLoading ?
              <Spinner color={colors.blue} /> :
              <Text uppercase style={styles.createAccountBtnText}>
                CREATE MY ACCOUNT
              </Text>
          }
        </TouchableOpacity>
      </View>
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
