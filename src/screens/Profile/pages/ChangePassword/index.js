import React, { Component } from "react";
import {
  View,
  Text,
  TextInput
} from "react-native";
import {
  Item,
  Icon
} from "native-base";
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
        <SpecialButton state={1} text={"SUBMIT"} onClick={this.submit}/>
      </View>
    );
  }
}

const ChangePassword = reduxForm({
  form: "changePassword"
})(ChangePasswordForm);
export default ChangePassword;
