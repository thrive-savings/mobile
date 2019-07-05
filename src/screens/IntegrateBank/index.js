import React, { Component } from "react";
import { ScrollView, ImageBackground } from "react-native";
import { connect } from "react-redux";

import Header from "../../components/Header";
import ModalTemplate from "../../components/ModalTemplate";
import bankOutageModal from "../../components/BankOutageModal";
import addStatusBar from "../../components/StatusBar";

import amplitude from "../../globals/amplitude";
import globalStyles from "../../globals/globalStyles";

import WhyLink from "./pages/WhyLink";
import AuthenticateBank from "./pages/AuthenticateBank";
import ChooseAccount from "./pages/ChooseAccount";
import AuthSuccess from "./pages/AuthSuccess";

import { fetchDebts } from "../DebtDashboard/state/actions";
import {
  changeBankStep,
  updateUserDataAfterLinkingDone
} from "./state/actions";
import { LINK_STEPS } from "./state/constants";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class IntegrateBank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWarning: false
    };
  }

  componentWillUnmount() {
    this.props.changeBankStep();
  }

  updateConnectionsData = () => {
    const {
      integrateBankReducer: {
        connection,
        allConnections,
        momentumOfferData,
        synapseEntryData
      }
    } = this.props;
    if (connection || allConnections) {
      const data = {};
      if (momentumOfferData) {
        data.momentumOfferData = momentumOfferData;
      }
      if (synapseEntryData) {
        data.synapseEntryData = synapseEntryData;
      }
      if (allConnections) {
        data.connections = allConnections;
      } else {
        data.connection = connection;
      }

      this.props.updateUserDataAfterLinkingDone(data);
    }
  };

  goBack = () => {
    const {
      navigation: { state: { params: { comingFromDebts = false } = {} } = {} }
    } = this.props;
    if (comingFromDebts) {
      this.props.fetchDebts();
    }

    this.props.navigation.goBack();
  };

  onQuovoClose = () => {
    const {
      integrateBankReducer: {
        connection: { quovoConnectionID: curConnectionID } = {}
      },
      navigation: { state: { params: { step: stepFromNavigation } = {} } = {} }
    } = this.props;

    if (curConnectionID || typeof stepFromNavigation !== "undefined") {
      this.updateConnectionsData();
      this.goBack();
    }
  };

  onBackPress = () => {
    const {
      integrateBankReducer: {
        step: stepFromReducer,
        connection: { sync: { status: syncStatus } = {} } = {}
      },
      navigation: { state: { params: { step: stepFromNavigation } = {} } = {} }
    } = this.props;

    let lowestStep = LINK_STEPS.INFO;
    if (stepFromNavigation) {
      lowestStep = stepFromNavigation;
    }

    if (stepFromReducer > lowestStep) {
      const newStep =
        stepFromReducer === LINK_STEPS.FINAL && syncStatus !== "good"
          ? LINK_STEPS.AUTH
          : stepFromReducer - 1;
      this.props.changeBankStep({ step: newStep });
    } else {
      this.props.changeBankStep();
      if (typeof stepFromNavigation !== "undefined") {
        this.updateConnectionsData();
        this.goBack();
      }
    }
  };

  onWarningPress = () => {
    amplitude.track(amplitude.events.BANK_OUTAGE_WARNING_CLICK);
    this.setState({ showWarning: true });
  };

  renderContent() {
    const {
      integrateBankReducer: { step: stepFromReducer },
      navigation: {
        state: {
          params: {
            step: stepFromNavigation = undefined,
            connection: connectionToFix,
            accounts: providedAccounts
          } = {}
        } = {}
      }
    } = this.props;

    let step = stepFromReducer;
    if (stepFromNavigation && stepFromNavigation > step) {
      step = stepFromNavigation;
    }

    switch (step) {
      default:
      case LINK_STEPS.INFO:
        return (
          <ScrollView
            style={globalStyles.container}
            showsVerticalScrollIndicator={false}
          >
            <WhyLink
              next={() => this.props.changeBankStep({ step: LINK_STEPS.AUTH })}
            />
          </ScrollView>
        );
      case LINK_STEPS.AUTH:
        return (
          <AuthenticateBank
            connection={connectionToFix}
            onQuovoClose={this.onQuovoClose}
          />
        );
      case LINK_STEPS.ACCOUNT:
        return (
          <ScrollView
            style={globalStyles.container}
            showsVerticalScrollIndicator={false}
          >
            <ChooseAccount accounts={providedAccounts} goBack={this.goBack} />
          </ScrollView>
        );
      case LINK_STEPS.FINAL:
        return (
          <ScrollView
            style={globalStyles.container}
            showsVerticalScrollIndicator={false}
          >
            <AuthSuccess updateConnectionsData={this.updateConnectionsData} />
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
          warning={step === LINK_STEPS.AUTH}
          onWarningPress={this.onWarningPress}
        />
        {this.renderContent()}

        <ModalTemplate
          show={this.state.showWarning}
          buttonVisible={false}
          content={bankOutageModal()}
          onClose={() => this.setState({ showWarning: false })}
        />
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
    fetchDebts: (payload = {}) => dispatch(fetchDebts(payload)),
    changeBankStep: (payload = {}) => dispatch(changeBankStep(payload)),
    updateUserDataAfterLinkingDone: (payload = {}) =>
      dispatch(updateUserDataAfterLinkingDone(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(IntegrateBank)
);
