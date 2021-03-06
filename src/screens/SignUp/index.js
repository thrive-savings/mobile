import React, { Component } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  Keyboard,
  Platform
} from "react-native";
import { connect } from "react-redux";

import Header from "../../components/Header";
import addStatusBar from "../../components/StatusBar";

import globalStyles from "../../globals/globalStyles";

import ChooseType from "./pages/ChooseType";
import EmployerCode from "./pages/EmployerCode";
import PersonalDetails from "./pages/PersonalDetails";

import { changeStep } from "./state/actions";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardClosed: true
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow",
      this._keyboardDidShow.bind(this)
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide",
      this._keyboardDidHide.bind(this)
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    this.setState({ keyboardClosed: false });
  }

  _keyboardDidHide() {
    this.setState({ keyboardClosed: true });
  }

  render() {
    const { navigation, signUpReducer: { companyID, step } } = this.props;

    let body, header;
    switch (step) {
      case 0:
        body = (
          <ChooseType
            onButtonPress={type =>
              this.props.changeStep({ step: type === "personal" ? 2 : 1 })}
          />
        );
        break;
      case 1:
        header = (
          <Header
            navigation={navigation}
            button="back"
            onButtonPress={() => this.props.changeStep({ step: 0 })}
          />
        );
        body = <EmployerCode navigation={navigation} />;
        break;
      case 2:
        header = (
          <Header
            navigation={navigation}
            button="back"
            onButtonPress={() =>
              this.props.changeStep({ step: companyID > 1 ? 1 : 0 })}
          />
        );
        body = <PersonalDetails navigation={navigation} />;
        break;
      default:
        break;
    }

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        {header}
        {body}
        {this.state.keyboardClosed &&
          <TouchableOpacity
            activeOpacity={0.6}
            style={globalStyles.bottomContainer}
            onPress={() => navigation.navigate("Login")}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={globalStyles.bottomLabelText}>
              Already have an account?
              <Text style={globalStyles.bottomBtnText}> Log In.</Text>
            </Text>
          </TouchableOpacity>}
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    signUpReducer: state.signUpReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeStep: (payload = {}) => dispatch(changeStep(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(SignUp)
);
