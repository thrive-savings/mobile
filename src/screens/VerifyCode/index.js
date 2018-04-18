import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Item,
  Input,
  View,
  Toast,
  Left,
  Right,
  Footer,
  Spinner
} from "native-base";
import { Field, reduxForm } from "redux-form";

import { verifyCode, resendCode } from "./state/actions";

import styles from "./styles";

const required = value => (value ? undefined : "Required");

class VerifyCodeForm extends Component {
  textInput: any;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon
            active
            name={
              input.name === "code" ? "unlock" : "person"
            }
            style={{ color: "#fff" }}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder={
              input.name === "code"
                ? "Code"
                : "Placeholder"
            }
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

  resendCode() {
    this.props.resendCode({email: this.props.signUpValues.email, phone: this.props.signUpValues.phone });
  }

  verifyCode() {
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

  render() {
    const { data, isVerifying, isResending, error, errorMessage } = this.props.verifyCodeReducer;

    let errorText = "";
    if(error) {
      const { errors } = errorMessage;
      if(errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Image
          source={require("../../../assets/bg-signup.png")}
          style={styles.background}
        >
          <Content padder>
            <Text style={styles.verifyCodeHeader}>Verify Code</Text>
            <Text style={styles.verifyCodeDescription}>
              We have sent a code to your phone number, please type the code on the box below to verify your identity.
            </Text>

            <Field
              name="code"
              component={this.renderInput}
              type="text"
              validate={[required]}
            />

            {error && <Text style={styles.formErrorText3}>{errorText}</Text>}

            <Button
              rounded
              bordered
              block
              onPress={() => this.verifyCode()}
              style={styles.verifyBtn}
            >
              {
                isVerifying
                 ? <Spinner />
                 : <Text style={{ color: "#FFF" }}>Verify</Text>
              }
            </Button>
          </Content>
          <Footer
            style={{
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <Right style={{ flex: 1 }}>
              <Button
                small
                transparent
                onPress={() => this.resendCode()}
              >
                {
                  isResending
                   ? <Spinner color="white" />
                   : <Text style={styles.resendBtn}>Resend</Text>
                }
              </Button>
            </Right>
          </Footer>
        </Image>
      </Container>
    );
  }
}

function mapStateToProps (state) {
  return {
    values: state.form && state.form.verifyCode && state.form.verifyCode.values ? state.form.verifyCode.values : undefined,
    signUpValues: state.form && state.form.signup && state.form.signup.values ? state.form.signup.values : undefined,
    verifyCodeReducer: state.verifyCodeReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    verifyCode: (payload={}) => dispatch(verifyCode(payload)),
    resendCode: (payload={}) => dispatch(resendCode(payload))
  }
}

VerifyCodeForm = connect(mapStateToProps, mapDispatchToProps)(VerifyCodeForm);

const VerifyCode = reduxForm({
  form: "verifyCode"
})(VerifyCodeForm);
export default VerifyCode;
