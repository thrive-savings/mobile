import React, { Component } from "react";
import {
  View,
  Text,
  TextInput
} from "react-native";
import {
  Item,
  Icon,
  Toast
} from "native-base";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import SpecialButton from "../../../../components/SpecialButton";

import styles from "./styles";
import colors from "../../../../theme/colors";

import { required, minLength8 } from "../../../../globals/validators";

class ChangePasswordForm extends Component {
  textInput: any;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <TextInput
            ref={c => (this.textInput = c)}
            style={styles.input}
            placeholder={
              input.name === "password"
                ? "Current Password"
                : input.name === "newPassword"
                  ? "New Password"
                  : "Confirm Password"
            }
            placeholderTextColor={colors.darkergrey}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
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

  submit() {
    if (this.props.valid && this.props.values) {
      const { password, newPassword, confirmPassword } = this.props.values;
      if (newPassword === confirmPassword) {
        this.props.onSubmit({ password, newPassword });
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
        text: "Enter Valid Password",
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Field
          name="password"
          component={this.renderInput}
          type="password"
          validate={[required, minLength8]}
        />
        <Field
          name="newPassword"
          component={this.renderInput}
          type="newPassword"
          validate={[required, minLength8]}
        />
        <Field
          name="confirmPassword"
          component={this.renderInput}
          type="confirmPassword"
          validate={[required, minLength8]}
        />
        <SpecialButton state={1} text={"SUBMIT"} onClick={this.submit.bind(this)}/>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    values: state.form && state.form.changePassword && state.form.changePassword.values ? state.form.changePassword.values : undefined,
  };
}

ChangePasswordForm = connect(mapStateToProps)(ChangePasswordForm);

const ChangePassword = reduxForm({
  form: "changePassword"
})(ChangePasswordForm);
export default ChangePassword;