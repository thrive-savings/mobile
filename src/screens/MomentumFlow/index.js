import React, { Component } from "react";
import { connect } from "react-redux";

import addStatusBar from "../../components/StatusBar";

import CalgaryOffer from "./pages/CalgaryOffer";
import ProgramTour from "./pages/ProgramTour";
import EligibilityCheck from "./pages/EligibilityCheck";
import EligibilityResults from "./pages/EligibilityResults";

import {
  MOMENTUM_STEPS,
  MOMENTUM_OFFER_STATUSES,
  LOADING_STATES
} from "./state/constants";
import {
  checkEligibility,
  updateOfferStatus,
  changeMomentumStep
} from "./state/actions";

class MomentumFlow extends Component {
  componentWillUnmount() {
    this.props.changeMomentumStep();
  }

  render() {
    const {
      momentumFlowReducer: { step, loadingState } = {},
      momentumOfferData: { status } = {}
    } = this.props;

    switch (step) {
      default:
      case MOMENTUM_STEPS.CALGARY_OFFER:
        return (
          <CalgaryOffer
            onSeeOffer={() =>
              this.props.changeMomentumStep({
                step: MOMENTUM_STEPS.PROGRAM_TOUR
              })}
          />
        );
      case MOMENTUM_STEPS.PROGRAM_TOUR:
        return (
          <ProgramTour
            onUninterestedConfirmed={() =>
              this.props.updateOfferStatus({
                status: MOMENTUM_OFFER_STATUSES.UNINTERESTED
              })}
            onGoToEligibilityCheck={() =>
              this.props.changeMomentumStep({
                step: MOMENTUM_STEPS.ELIGIBILITY_CHECK
              })}
            loading={loadingState === LOADING_STATES.UPDATING_STATUS}
          />
        );
      case MOMENTUM_STEPS.ELIGIBILITY_CHECK:
        return (
          <EligibilityCheck
            onBackPress={() =>
              this.props.changeMomentumStep({ step: step - 1 })}
            onSubmitCheck={data => this.props.checkEligibility(data)}
            loading={loadingState === LOADING_STATES.CHECKING_ELIGIBILITY}
          />
        );
      case MOMENTUM_STEPS.ELIGIBILITY_RESULT:
        return (
          <EligibilityResults
            status={status}
            onFinish={doneStatus =>
              this.props.updateOfferStatus({
                status: doneStatus
              })}
            onNavigate={path => this.props.navigation.navigate(path)}
            loading={loadingState === LOADING_STATES.UPDATING_STATUS}
          />
        );
    }
  }
}

function mapStateToProps(state) {
  return {
    momentumOfferData: state.authReducer.data.authorized.momentumOfferData,
    momentumFlowReducer: state.momentumFlowReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkEligibility: (payload = {}) => dispatch(checkEligibility(payload)),
    updateOfferStatus: (payload = {}) => dispatch(updateOfferStatus(payload)),
    changeMomentumStep: (payload = {}) => dispatch(changeMomentumStep(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(MomentumFlow)
);
