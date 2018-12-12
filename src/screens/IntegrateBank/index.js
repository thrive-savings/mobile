import React, { Component } from "react";
import { ScrollView, View, ImageBackground } from "react-native";
import { connect } from "react-redux";

import Header from "../../components/Header";
import addStatusBar from "../../components/StatusBar";

import globalStyles from "../../globals/globalStyles";

import WhyLink from "./pages/WhyLink";
import AuthenticateBank from "./pages/AuthenticateBank";
import ChooseAccount from "./pages/ChooseAccount";
import AuthSuccess from "./pages/AuthSuccess";

import { changeBankStep, updateUserConnections } from "./state/actions";
import { LINK_STEPS } from "./state/constants";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class IntegrateBank extends Component {
  allDone = () => {
    this.props.updateUserConnections(
      this.props.integrateBankReducer.connection
    );
    this.props.changeBankStep();
  };

  onBackPress = () => {
    const {
      step: stepFromProps,
      integrateBankReducer: { step: stepFromReducer }
    } = this.props;

    let lowestStep = LINK_STEPS.INFO;
    if (stepFromProps) {
      lowestStep = stepFromProps;
    }

    if (stepFromReducer > lowestStep) {
      this.props.changeBankStep({ step: stepFromReducer - 1 });
    } else {
      this.props.changeBankStep();
      if (stepFromProps) {
        this.props.navigation.goBack();
      }
    }
  };

  renderContent() {
    const {
      step: stepFromProps,
      connection: providedConnection,
      integrateBankReducer: { step: stepFromReducer }
    } = this.props;

    let step = stepFromReducer;
    if (stepFromProps && stepFromProps > step) {
      step = stepFromProps;
    }

    switch (step) {
      default:
      case LINK_STEPS.INFO:
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <WhyLink
              next={() => this.props.changeBankStep({ step: LINK_STEPS.AUTH })}
              relink={providedConnection || false}
            />
          </ScrollView>
        );
      case LINK_STEPS.AUTH:
        return (
          <View style={globalStyles.container}>
            <AuthenticateBank connection={providedConnection} />
          </View>
        );
      case LINK_STEPS.ACCOUNT:
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <ChooseAccount
              next={this.allDone}
              relink={providedConnection || false}
            />
          </ScrollView>
        );
      case LINK_STEPS.SUCCESS:
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <AuthSuccess
              next={this.allDone}
              relink={providedConnection || false}
            />
          </ScrollView>
        );
    }
  }

  render() {
    const {
      step: stepFromProps,
      integrateBankReducer: { step: stepFromReducer }
    } = this.props;

    let step = stepFromReducer;
    if (stepFromProps && stepFromProps > stepFromReducer) {
      step = stepFromProps;
    }

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header
          button={step ? "back" : "none"}
          onButtonPress={this.onBackPress}
        />
        {this.renderContent()}
      </ImageBackground>
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
    updateUserConnections: (payload = {}) =>
      dispatch(updateUserConnections(payload)),
    changeBankStep: (payload = { step: 0 }) => dispatch(changeBankStep(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(IntegrateBank)
);
