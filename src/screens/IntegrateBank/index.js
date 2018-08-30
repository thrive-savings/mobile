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

import { changeBankStep, updateUserAccount } from "./state/actions";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class IntegrateBank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      loginId: undefined,
      institution: undefined
    };

    this.allDone = this.allDone.bind(this);
    this.authedBank = this.authedBank.bind(this);
    this.onBackPress = this.onBackPress.bind(this);
  }

  allDone() {
    this.props.updateUserAccount(
      this.props.integrateBankReducer.defaultAccountData
    );
    this.props.changeBankStep({ step: undefined });
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
    let step = reducerStep ? reducerStep : this.state.step;

    const { bank, relinkRequired } = this.props.userData;

    switch (step) {
      case 0:
        return (
          <WhyLink
            next={() => this.setState({ step: 1 })}
            relinkRequired={relinkRequired}
          />
        );
      case 1:
        const { loginId, institution } = this.state;
        if (loginId && institution) {
          return <ChooseAccount loginId={loginId} institution={institution} />;
        } else {
          return (
            <AuthenticateBank
              next={this.authedBank}
              relinkRequired={relinkRequired}
              bank={bank}
            />
          );
        }
      case 2:
        return (
          <AuthSuccess next={this.allDone} relinkRequired={relinkRequired} />
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
            onButtonPress={this.onBackPress}
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
    userData: state.authReducer.data.authorized,
    integrateBankReducer: state.integrateBankReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserAccount: (payload = {}) => dispatch(updateUserAccount(payload)),
    changeBankStep: (payload = {}) => dispatch(changeBankStep(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IntegrateBank);
