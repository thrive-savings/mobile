import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
  TextInput,
  Text
} from "react-native";
import { connect } from "react-redux";
import { Content, Card, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";

import Header from "../../components/Header";
import SpecialButton from "../../components/SpecialButton";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

import { savePhone, verifyCode, resendCode, changeStep } from "./state/actions";

import { required, numeric } from "../../globals/validators";

import STEP_DETAILS from "./constants";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const sms = require("../../../assets/Icons/Sms/sms.png");


class SetPhoneForm extends Component {
  constructor(props) {
    super(props);

    this.renderInput = this.renderInput.bind(this);
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    const step = this.props.setPhoneReducer.step;
    const { fieldStyles } = STEP_DETAILS[step];
    return (
      <View>
        <View style={fieldStyles.inputGrp}>
          {!step && <Text style={styles.inputLabel}>+1</Text>}
          <TextInput
            style={fieldStyles.input}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            {...input}
          />
        </View>
        {touched && error
          ? <Text style={step ? styles.formErrorText : globalStyles.formErrorText1}>
              {error}
            </Text>
          : <Text style={globalStyles.formErrorText2}> error here</Text>}
      </View>
    );
  }

  onBackPress() {
    if (this.props.setPhoneReducer.step) {
      this.props.changeStep({step: 0});
    } else {
      const navigation = this.props.navigation;
      const showBack = navigation.state && navigation.state.params ? navigation.state.params.showBack : false;
      if (showBack) {
        this.props.navigation.goBack();
      }
    }
  }

  submit() {
    if (this.props.valid) {
      if (this.props.setPhoneReducer.step) {
        this.props.verifyCode({ code: this.props.values.code });
      } else {
        this.props.savePhone({ phone: this.props.values.phone });
      }
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
    const navigation = this.props.navigation;
    const showBack = navigation.state && navigation.state.params ? navigation.state.params.showBack : false;

    const { phone } = this.props.userData;
    const { step, isLoading, isResending, error, errorMessage } = this.props.setPhoneReducer;

    let errorText = "";
    if (error) {
      const { errors } = errorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    const { header, description, buttonText, field } = STEP_DETAILS[step];

    return (
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={globalStyles.background}>
          <Header button={showBack || step ? "back" : "none"} onButtonPress={this.onBackPress.bind(this)} />
          <Content showsVerticalScrollIndicator={false} style={styles.contentContainer}>
            <Card style={styles.cardContainer}>
              <Text style={styles.labelText}>{header}</Text>
              <Image source={sms} style={styles.smsIcon} />
              <Text style={styles.secondaryText}>{description}</Text>
              <Field
                name={field}
                component={this.renderInput}
                type={field}
                validate={[numeric, required]}
              />
              {error && <Text style={globalStyles.formErrorText3}>{errorText}</Text>}
              <SpecialButton loading={isLoading} text={buttonText} onClick={this.submit.bind(this)} />
              {
                isResending
                  ? <Text style={styles.resendText}>Resending...</Text>
                  : step
                    ?
                    <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.resendCode({ phone })}>
                      <Text style={styles.resendText}>Resend</Text>
                    </TouchableOpacity>
                    : <View />
              }
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
    setPhoneReducer: state.setPhoneReducer,
    userData: state.authReducer.data.authorized
  };
}

function mapDispatchToProps (dispatch) {
  return {
    savePhone: (payload = {}) => dispatch(savePhone(payload)),
    verifyCode: (payload = {}) => dispatch(verifyCode(payload)),
    resendCode: (payload = {}) => dispatch(resendCode(payload)),
    changeStep: (payload = {}) => dispatch(changeStep(payload))
  };
}

SetPhoneForm = connect(mapStateToProps, mapDispatchToProps)(SetPhoneForm);

const SetPhone = reduxForm({
  form: "setPhone"
})(SetPhoneForm);
export default SetPhone;
