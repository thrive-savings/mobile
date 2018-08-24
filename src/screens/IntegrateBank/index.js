import React, { Component } from "react";
import { View, ImageBackground, StatusBar } from "react-native";
import { connect } from "react-redux";

import Header from "../../components/Header";

import globalStyles from "../../globals/globalStyles";
import colors from "../../theme/colors";

import WhyLink from "./pages/WhyLink";
import AuthenticateBank from "./pages/AuthenticateBank";
import ChooseAccount from "./pages/ChooseAccount";
import AuthSuccess from "./pages/AuthSuccess";

import { changeBankStep } from "./state/actions";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class IntegrateBank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      loginId: undefined,
      institution: undefined
    };
  }

  authedBank(loginId, institution) {
    this.setState({ loginId, institution });
  }

  onBackPress() {
    const reducerStep = this.props.integrateBankReducer.step;
    if (reducerStep) {
      this.props.changeBankStep({ step: reducerStep > 1 ? 0 : undefined });
    } else {
      const { loginId, institution, step } = this.state;
      if (step && loginId && institution) {
        this.setState({ loginId: undefined, institution: undefined });
      } else {
        this.setState({ step: Math.max(0, this.state.step - 1) });
      }
    }
  }

  renderContent() {
    const reducerStep = this.props.integrateBankReducer.step;
    const step = reducerStep ? reducerStep : this.state.step;
    switch (step) {
      case 0:
        return <WhyLink next={() => this.setState({ step: 1 })} />;
      case 1:
        const { loginId, institution } = this.state;
        if (false || (loginId && institution)) {
          return <ChooseAccount loginId={loginId} institution={institution} />;
        } else {
          return <AuthenticateBank next={this.authedBank.bind(this)} />;
        }
      case 2:
        return (
          <AuthSuccess
            next={() => this.props.changeBankStep({ step: undefined })}
          />
        );
      default:
        return <WhyLink next={() => this.setState({ step: 1 })} />;
    }
  }

  render() {
    const reducerStep = this.props.integrateBankReducer.step;
    const step = reducerStep ? reducerStep : this.state.step;
    return (
      <View style={globalStyles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusbar}
        />
        <ImageBackground source={bg} style={globalStyles.background}>
          <Header
            button={step ? "back" : "none"}
            onButtonPress={this.onBackPress.bind(this)}
          />
          <View style={globalStyles.container}>
            {this.renderContent()}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    integrateBankReducer: state.integrateBankReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeBankStep: (payload = {}) => dispatch(changeBankStep(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IntegrateBank);
