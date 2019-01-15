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
import { LINK_STEPS, ACTION_TYPES } from "./state/constants";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class IntegrateBank extends Component {
  componentWillUnmount() {
    this.props.changeBankStep();
  }

  updateConnectionsData = () => {
    const { integrateBankReducer: { connection, allConnections } } = this.props;
    if (connection || allConnections) {
      const updateConnectionObj = {};
      if (allConnections) {
        updateConnectionObj.connections = allConnections;
      } else {
        updateConnectionObj.connection = connection;
      }
      this.props.updateUserConnections(updateConnectionObj);
    }
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  onBackPress = () => {
    const {
      integrateBankReducer: { step: stepFromReducer },
      navigation: { state: { params: { step: stepFromNavigation } = {} } = {} }
    } = this.props;

    let lowestStep = LINK_STEPS.INFO;
    if (stepFromNavigation) {
      lowestStep = stepFromNavigation;
    }

    if (stepFromReducer > lowestStep) {
      this.props.changeBankStep({ step: stepFromReducer - 1 });
    } else {
      this.props.changeBankStep();
      if (typeof stepFromNavigation !== "undefined") {
        this.updateConnectionsData();
        this.goBack();
      }
    }
  };

  renderContent() {
    const {
      integrateBankReducer: { step: stepFromReducer },
      navigation: {
        state: {
          params: {
            step: stepFromNavigation = undefined,
            connection: connectionToFix,
            accounts: providedAccounts,
            newConnection
          } = {}
        } = {}
      }
    } = this.props;

    let step = stepFromReducer;
    if (stepFromNavigation && stepFromNavigation > step) {
      step = stepFromNavigation;
    }

    const actionType = connectionToFix
      ? ACTION_TYPES.RELINK
      : providedAccounts
        ? ACTION_TYPES.SET_DEFAULT
        : newConnection ? ACTION_TYPES.NEW : ACTION_TYPES.INITAL;

    switch (step) {
      default:
      case LINK_STEPS.INFO:
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <WhyLink
              next={() => this.props.changeBankStep({ step: LINK_STEPS.AUTH })}
              actionType={actionType}
            />
          </ScrollView>
        );
      case LINK_STEPS.AUTH:
        return (
          <View style={globalStyles.container}>
            <AuthenticateBank
              connection={connectionToFix}
              actionType={actionType}
            />
          </View>
        );
      case LINK_STEPS.ACCOUNT:
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <ChooseAccount
              actionType={actionType}
              accounts={providedAccounts}
            />
          </ScrollView>
        );
      case LINK_STEPS.SUCCESS:
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <AuthSuccess
              actionType={actionType}
              goBack={this.goBack}
              updateConnectionsData={this.updateConnectionsData}
            />
          </ScrollView>
        );
    }
  }

  render() {
    const {
      integrateBankReducer: { step: stepFromReducer },
      navigation: {
        state: { params: { step: stepFromNavigation = undefined } = {} } = {}
      }
    } = this.props;

    let step = stepFromReducer;
    if (stepFromNavigation && stepFromNavigation > stepFromReducer) {
      step = stepFromNavigation;
    }

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header
          button={
            step || typeof stepFromNavigation !== "undefined" ? "back" : "none"
          }
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
    changeBankStep: (payload = {}) => dispatch(changeBankStep(payload)),
    updateUserConnections: (payload = {}) =>
      dispatch(updateUserConnections(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(IntegrateBank)
);
