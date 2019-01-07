import React, { Component } from "react";
import { View, Image, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import { Content, Toast } from "native-base";
import CheckBox from "react-native-check-box";

import { Field, reduxForm } from "redux-form";

import amplitude from "../../../../globals/amplitude";
import SpecialButton from "../../../../components/SpecialButton";

import { companyLogoUrl } from "../../../../globals/logoUrls";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

import { required, minLength8, email } from "../../../../globals/validators";
import globalErrorMessage from "../../../../globals/errorMessage";

import { signUpUser } from "../../state/actions";

import INPUT_FIELDS from "./constants";

const tick = require("../../../../../assets/Icons/Checkbox/tick.png");

class PersonalDetails extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);

    this.state = {
      didAgree: false
    };
  }

  componentDidMount() {
    amplitude.track(amplitude.events.PERSONAL_DETAILS_VIEW);
  }

  submit() {
    if (this.props.valid) {
      const {
        email: userEmail,
        password,
        firstName,
        lastName
      } = this.props.values;
      this.props.signUpUser({
        email: userEmail,
        firstName,
        lastName,
        password,
        companyID: this.props.signUpReducer.companyID
      });
      return;
    }

    Toast.show({
      text: "All the fields are compulsory!",
      duration: 2500,
      position: "top",
      type: "danger",
      textStyle: { textAlign: "center" }
    });
  }

  firstNameTextInput;
  lastNameTextInput;
  emailTextInput;
  passwordTextInput;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <View style={[styles.inputGrp, INPUT_FIELDS[input.name].extraStyle]}>
          <TextInput
            ref={c => {
              switch (input.name) {
                case "firstName":
                  this.firstNameTextInput = c;
                  break;
                case "lastName":
                  this.lastNameTextInput = c;
                  break;
                case "email":
                  this.emailTextInput = c;
                  break;
                case "password":
                  this.passwordTextInput = c;
                  break;
              }
            }}
            placeholderTextColor={colors.darkerGrey}
            style={styles.input}
            placeholder={INPUT_FIELDS[input.name].placeholder}
            secureTextEntry={INPUT_FIELDS[input.name].secureEntry}
            keyboardType={input.name === "email" ? "email-address" : "default"}
            returnKeyType={input.name === "password" ? "done" : "next"}
            onSubmitEditing={() => {
              switch (input.name) {
                case "firstName":
                  this.lastNameTextInput.focus();
                  break;
                case "lastName":
                  this.emailTextInput.focus();
                  break;
                case "email":
                  this.passwordTextInput.focus();
                  break;
              }
            }}
            blurOnSubmit={input.name === "password"}
            underlineColorAndroid="transparent"
            {...input}
          />
        </View>
        {touched && error
          ? <Text style={globalStyles.formErrorText1}>
              {error}
            </Text>
          : <Text style={globalStyles.formErrorText2}> error here</Text>}
      </View>
    );
  }

  render() {
    const navigation = this.props.navigation;
    const {
      companyLogoUrl: companyLogoName,
      isLoading,
      error,
      errorMessage
    } = this.props.signUpReducer;

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
      <Content
        showsVerticalScrollIndicator={false}
        style={[styles.formContainer, globalStyles.shadow]}
      >
        <View style={styles.formContent}>
          {companyLogoName &&
            <Image
              source={{ uri: companyLogoUrl(companyLogoName) }}
              style={styles.brandLogo}
            />}
          <Text style={styles.formLabelText}>
            Please use your legal name as it appears on your bank statements, so
            that we can verify your account.
          </Text>
          <View style={styles.inputRow}>
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

          <Field
            name="email"
            component={this.renderInput}
            type="email"
            validate={[required, email]}
          />
          <Field
            name="password"
            component={this.renderInput}
            type="password"
            validate={[required, minLength8]}
          />

          <View style={styles.checkboxRow}>
            <CheckBox
              onClick={() => this.setState({ didAgree: !this.state.didAgree })}
              isChecked={this.state.didAgree}
              unCheckedImage={
                <View
                  style={styles.checkbox}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                />
              }
              checkedImage={
                <View
                  style={styles.checkbox}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                  <Image source={tick} style={styles.checkboxTick} />
                </View>
              }
            />
            <Text style={styles.checkboxText}>
              By creating an account you are agreeing to our
              <Text
                style={styles.linkTexts}
                onPress={() => navigation.navigate("TOS")}
                suppressHighlighting
              >
                {" "}Terms of Service
              </Text>{" "}
              and
              <Text
                style={styles.linkTexts}
                onPress={() => navigation.navigate("PP")}
                suppressHighlighting
              >
                {" "}Privacy Policy.
              </Text>
            </Text>
          </View>

          {error &&
            <Text style={globalStyles.formErrorText3}>
              {errorText}
            </Text>}

          <SpecialButton
            loading={isLoading}
            enabled={this.state.didAgree}
            text={"CREATE MY ACCOUNT"}
            onClick={this.submit}
          />
        </View>
      </Content>
    );
  }
}

function mapStateToProps(state) {
  return {
    values:
      state.form && state.form.signup && state.form.signup.values
        ? state.form.signup.values
        : undefined,
    signUpReducer: state.signUpReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signUpUser: (payload = {}) => dispatch(signUpUser(payload))
  };
}

export default reduxForm({
  form: "signup"
})(connect(mapStateToProps, mapDispatchToProps)(PersonalDetails));
