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

import { required, numeric } from "../../../../globals/validators";

class ChangePhoneForm extends Component {
  textInput: any;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Text style={styles.inputLabel}>+1</Text>
          <TextInput
            ref={c => (this.textInput = c)}
            style={styles.input}
            underlineColorAndroid="transparent"
            {...input}
          />
          {touched && error
            ? <Icon
                active
                style={styles.formErrorIcon}
                onPress={() => this.textInput.clear()}
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
        text: "Enter Valid Phone Number!",
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
        <Text style={styles.text}>Enter your new mobile phone number.</Text>
        <Field
          name="phone"
          component={this.renderInput}
          type="phone"
          validate={[required, numeric]}
        />
        <SpecialButton state={1} text={"SUBMIT"} onClick={this.submit.bind(this)}/>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    values: state.form && state.form.changePhone && state.form.changePhone.values ? state.form.changePhone.values : undefined,
  };
}

ChangePhoneForm = connect(mapStateToProps)(ChangePhoneForm);

const ChangePhone = reduxForm({
  form: "changePhone"
})(ChangePhoneForm);
export default ChangePhone;
