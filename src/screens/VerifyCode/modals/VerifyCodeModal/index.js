import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";
import {
  View,
  Text,
  Item,
  Toast,
  Spinner
} from "native-base";
import { Field, reduxForm } from "redux-form";

import styles from "./styles";
const colors = require("../../../../theme/colors");

import { verifyCode, resendCode } from "../../state/actions";

import ModalTemplate from "../../../../components/ModalTemplate";

import { required, numeric, exactLength4 } from "../../../../globals/validators";

const tick = require("../../../../../assets/Icons/TickGradient/tickGradient.png");


class VerifyCodeModal extends Component {
  constructor(props) {
    super(props);

    this.renderInput = this.renderInput.bind(this);

    this.verify = this.verify.bind(this);
    this.resend = this.resend.bind(this);
  }

  verify() {
    if (this.props.valid) {
      this.props.verifyCode(this.props.values);
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

  resend() {
    this.props.resendCode({phone: this.props.verifyCodeReducer.savedPhone});
  }

  textInput: any;
  renderInput({ input, label, type, buttonLoading, meta: { touched, error, warning } }) {
    return (
      <View>
        <View style={styles.formContainer}>
          <Item error={error && touched} rounded style={styles.inputGrp}>
            <TextInput
              ref={c => (this.textInput = c)}
              style={styles.input}
              placeholder={"0000"}
              placeholderTextColor={colors.darkergrey}
              underlineColorAndroid="transparent"
              {...input}
            />
          </Item>
          <TouchableOpacity activeOpacity={0.6} onPress={this.verify} style={styles.enabledButton}>
            <LinearGradient
              colors={colors.blueGreenGradient.colors}
              style={styles.enabledButtonGradient}
            >
              {
                this.props.verifyCodeReducer.isVerifying
                  ? <Spinner color="white" />
                  : <Image source={tick} style={styles.enabledButtonIcon} />
              }
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {touched && error
          ? <Text style={styles.formErrorText1}>
              {error}
            </Text>
          : <Text style={styles.formErrorText2}> error here</Text>}
      </View>
    );
  }

  renderContent() {
    const { isVerifying, isResending, verifyError, verifyErrorMessage } = this.props.verifyCodeReducer;

    let errorText = "";
    if (verifyError) {
      const { errors } = verifyErrorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>Enter the 4-digit verification code.</Text>
        <Field
          name="code"
          component={this.renderInput}
          type="code"
          validate={[numeric, required, exactLength4]}
          buttonLoading={isVerifying}
        />

        {verifyError && <Text style={styles.formErrorText3}>{errorText}</Text>}
        {
          isResending
            ? <Text style={styles.resendText}>Resending...</Text>
            :
              <TouchableOpacity activeOpacity={0.6} onPress={this.resend}>
                <Text style={styles.resendText}>Resend</Text>
              </TouchableOpacity>
        }
      </View>
    );
  }

  render() {
    const { showModal } = this.props.verifyCodeReducer;

    return (
      <ModalTemplate
        show={showModal}
        buttonVisible={false}
        content={this.renderContent()}
      />
    );
  }
}

VerifyCodeModal.propTypes = {
  showModal: PropTypes.bool,
};
VerifyCodeModal.defaultProps = {
  showModal: false
};


function mapStateToProps (state) {
  return {
    values: state.form && state.form.verifyCode && state.form.verifyCode.values ? state.form.verifyCode.values : undefined,
    verifyCodeReducer: state.verifyCodeReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    verifyCode: (payload = {}) => dispatch(verifyCode(payload)),
    resendCode: (payload = {}) => dispatch(resendCode(payload))
  };
}

VerifyCodeModal = connect(mapStateToProps, mapDispatchToProps)(VerifyCodeModal);

export default reduxForm({
  form: "verifyCode"
})(VerifyCodeModal);