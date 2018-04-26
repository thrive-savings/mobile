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

import { required, email } from "../../../../globals/validators";

class ChangeEmailForm extends Component {
  textInput: any;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <TextInput
            ref={c => (this.textInput = c)}
            style={styles.input}
            placeholder="New Email"
            placeholderTextColor= {colors.darkerGrey}
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
      this.props.onSubmit(this.props.values);
    } else {
      Toast.show({
        text: "Enter Valid Email!",
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
        <Text style={styles.text}>Enter the new email address you would like to associate with this account.</Text>
        <Field
          name="email"
          component={this.renderInput}
          type="email"
          validate={[required, email]}
        />
        <SpecialButton state={1} text={"SUBMIT"} onClick={this.submit.bind(this)}/>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    values: state.form && state.form.changeEmail && state.form.changeEmail.values ? state.form.changeEmail.values : undefined,
  };
}

ChangeEmailForm = connect(mapStateToProps)(ChangeEmailForm);

const ChangeEmail = reduxForm({
  form: "changeEmail"
})(ChangeEmailForm);
export default ChangeEmail;
