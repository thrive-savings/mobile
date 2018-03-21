// @flow
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
  Footer,
  Spinner
} from "native-base";
import { Field, reduxForm } from "redux-form";
import styles from "./styles";

import { passwordRequest } from "./state/actions";

const required = value => (value ? undefined : "Required");
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
type Props = {
  navigation: () => void
};
declare type Any = any;
class ForgotPasswordForm extends Component {
  textInput: Any;
  state: {
    offset: {
      x: 0,
      y: 0
    }
  };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0
      },
      name: ""
    };
  }

  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={styles.inputGrp}>
          <Icon active name="mail" style={{ color: "#fff" }} />
          <Input
            placeholderTextColor="#FFF"
            style={styles.input}
            placeholder="Email"
            {...input}
            ref={c => (this.textInput = c)}
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
          : <Text style={styles.formErrorText2}>error here</Text>}
      </View>
    );
  }

  forgotPassword() {
    if (this.props.valid) {
      this.props.passwordRequest(this.props.values);
      //this.props.navigation.goBack();
    } else {
      Toast.show({
        text: "Enter Valid Email",
        duration: 2500,
        position: "top",
        textStyle: { textAlign: "center" }
      });
    }
  }

  render() {
    const { isRequesting, wasSuccessful, error, errorMessage } = this.props.forgotPasswordReducer;

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
          <Content contentOffset={this.state.offset}>
            <Content padder scrollEnabled={false}>
              <Text style={styles.forgotPasswordHeader}>
                Forgot Your Password?
              </Text>
              <View style={styles.forgotPasswordContainer}>
                <Field
                  name="email"
                  component={this.renderInput}
                  type="email"
                  validate={[email, required]}
                />

                {wasSuccessful && <Text style={styles.formSuccessText}>Reset email has been sent! Please follow the instructions to reset your password!</Text>}

                {error && <Text style={styles.formErrorText3}>{errorText}</Text>}

                <Button
                  rounded
                  block
                  bordered
                  onPress={() => this.forgotPassword()}
                  style={styles.emailBtn}
                >
                  {
                    isRequesting
                     ? <Spinner color="white"/>
                     : <Text style={{ color: "#FFF" }}>Send Email</Text>
                  }
                </Button>
              </View>
            </Content>
          </Content>
          <Footer
            style={{
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.helpBtns}>Back To Login</Text>
            </Button>
          </Footer>
        </Image>
      </Container>
    );
  }
}

function mapStateToProps (state) {
  return {
    values: state.form && state.form.forgotPassword && state.form.forgotPassword.values ? state.form.forgotPassword.values : undefined,
    forgotPasswordReducer: state.forgotPasswordReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    passwordRequest: (payload={}) => dispatch(passwordRequest(payload))
  }
}

ForgotPasswordForm = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);

const ForgotPassword = reduxForm({
  form: "forgotPassword"
})(ForgotPasswordForm);
export default ForgotPassword;
