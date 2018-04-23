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
        <SpecialButton state={1} text={"SUBMIT"} onClick={this.submit}/>
      </View>
    );
  }
}

const ChangePhone = reduxForm({
  form: "changePhone"
})(ChangePhoneForm);
export default ChangePhone;
