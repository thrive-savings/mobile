import React, { Component } from "react";
import { ScrollView, View, Text, TextInput } from "react-native";
import { Toast } from "native-base";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import SpecialButton from "../../../../components/SpecialButton";

import amplitude from "../../../../globals/amplitude";
import globalErrorMessage from "../../../../globals/errorMessage";

import { verifyReferralCode } from "../../state/actions";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

import { required } from "../../../../globals/validators";

class ReferralCodeForm extends Component {
  componentDidMount() {
    amplitude.track(amplitude.events.EMPLOYER_CODE_VIEW);
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

  textInput;
  renderInput({ input, meta: { touched, error } }) {
    return (
      <View>
        <View style={styles.inputGrp}>
          <TextInput
            ref={c => (this.textInput = c)}
            placeholderTextColor={colors.darkerGrey}
            style={styles.input}
            placeholder={input.name === "code" ? "ENTER CODE" : "Placeholder"}
            underlineColorAndroid="transparent"
            {...input}
          />
        </View>
        {touched && error
          ? <Text style={styles.formErrorText1}>
              {error}
            </Text>
          : <Text style={globalStyles.formErrorText2}>error here</Text>}
      </View>
    );
  }

  render() {
    const { isLoading, error, errorMessage } = this.props.signUpReducer;

    let errorText = "";
    if (error) {
      const { errors } = errorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = globalErrorMessage;
      }
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.container, globalStyles.shadow]}>
        <Text style={styles.formLabelText}>
          Please enter the referral code you received from your employer.
        </Text>
        <Field
          name="code"
          component={this.renderInput}
          type="code"
          validate={[required]}
        />
        {error &&
          <Text style={globalStyles.formErrorText3}>
            {errorText}
          </Text>}
        <SpecialButton loading={isLoading} text={"JOIN THRIVE @ WORK"} onClick={this.verify.bind(this)} />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    values:
      state.form && state.form.referralCode && state.form.referralCode.values
        ? state.form.referralCode.values
        : undefined,
    signUpReducer: state.signUpReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    verifyReferralCode: (payload = {}) => dispatch(verifyReferralCode(payload))
  };
}

ReferralCodeForm = connect(mapStateToProps, mapDispatchToProps)(
  ReferralCodeForm
);

const ReferralCode = reduxForm({
  form: "referralCode"
})(ReferralCodeForm);
export default ReferralCode;
