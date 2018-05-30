import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  StatusBar,
  TextInput,
  Text
} from "react-native";
import { connect } from "react-redux";
import {
  Content,
  Card,
  Icon,
  Toast
} from "native-base";
import { Field, reduxForm } from "redux-form";

import Header from "../../components/Header";
import SpecialButton from "../../components/SpecialButton";

import VerifyCodeModal from "./modals/VerifyCodeModal";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

import { savePhone } from "./state/actions";

import { required, numeric } from "../../globals/validators";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const sms = require("../../../assets/Icons/Sms/sms.png");


class VerifyCodeForm extends Component {
  textInput;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <View style={styles.inputGrp}>
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
                style={globalStyles.formErrorIcon}
                onPress={() => this.textInput._root.clear()}
                name="close"
              />
            : <Text />}
        </View>
        {touched && error
          ? <Text style={globalStyles.formErrorText1}>
              {error}
            </Text>
          : <Text style={globalStyles.formErrorText2}> error here</Text>}
      </View>
    );
  }

  submit() {
    console.log("Calling Submit");
    console.log(this.props.verifyCodeReducer);
    if (!this.props.verifyCodeReducer.isSetting && this.props.valid) {
      this.props.savePhone(this.props.values);
    } else {
      Toast.show({
        text: "All the fields are compulsory!",
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    const { isSetting, setError, setErrorMessage } = this.props.verifyCodeReducer;

    let errorText = "";
    if (setError) {
      const { errors } = setErrorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    return (
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={globalStyles.background}>
          <Header button="none" />
          <Content showsVerticalScrollIndicator={false} style={styles.contentContainer}>
            <Card style={styles.cardContainer}>
              <Text style={styles.labelText}>VERIFY YOUR ACCOUNT</Text>
              <Image source={sms} style={styles.smsIcon} />
              <Text style={styles.secondaryText}>Enter your phone number and we’ll send you a 4-digit verification code.</Text>
              <Field
                name="phone"
                component={this.renderInput}
                type="phone"
                validate={[numeric, required]}
              />
              {setError && <Text style={globalStyles.formErrorText3}>{errorText}</Text>}
              <SpecialButton loading={isSetting} text={"SUBMIT"} onClick={this.submit.bind(this)}/>
              <VerifyCodeModal />
            </Card>
          </Content>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    values: state.form && state.form.setPhone && state.form.setPhone.values ? state.form.setPhone.values : undefined,
    verifyCodeReducer: state.verifyCodeReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    savePhone: (payload = {}) => dispatch(savePhone(payload))
  };
}

VerifyCodeForm = connect(mapStateToProps, mapDispatchToProps)(VerifyCodeForm);

const VerifyCode = reduxForm({
  form: "setPhone"
})(VerifyCodeForm);
export default VerifyCode;
