import React, { Component } from "react";
import PropTypes from "prop-types";
import { ImageBackground, ScrollView, Image, Text } from "react-native";

import Header from "../../../../components/Header";
import SpecialButton from "../../../../components/SpecialButton";

import { MOMENTUM_OFFER_STATUSES } from "../../state/constants";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

const bg = require("../../../../../assets/Backgrounds/BackgroundFull.png");
const starIcon = require("../../../../../assets/Icons/StarLarger/star.png");
const thriveLargeLogo = require("../../../../../assets/ThumbnailLogo/Large/thumbnail.png");
const momentumLogo = require("../../../../../assets/Momentum/Logos/InApp/logo.png");

class EligibilityResults extends Component {
  renderIneligible() {
    return (
      <React.Fragment>
        <Header button="none" />
        <ScrollView
          style={globalStyles.container}
          contentContainerStyle={[styles.container, globalStyles.shadow]}
          showsVerticalScrollIndicator={false}
        >
          <Image source={thriveLargeLogo} />
          <Text style={[styles.regularText, styles.boldText]}>
            You don't qualify for Momentum's savings boost, but you can still
            use Thrive to save!{"\n\n"}
            Thrive offers easy and auomated savings. Start saving for goals that
            matter to you! soft landing $5
          </Text>
          <SpecialButton text="FINISH" onClick={this.props.onFinish} />
        </ScrollView>
      </React.Fragment>
    );
  }

  renderPass() {
    return (
      <React.Fragment>
        <Image source={momentumLogo} style={styles.momentumLogo} />
        <ScrollView
          style={globalStyles.container}
          contentContainerStyle={[styles.container, globalStyles.shadow]}
          showsVerticalScrollIndicator={false}
        >
          <Image source={starIcon} />
          <Text style={styles.regularText}>
            You could be eligible for $60 in matched savings.
          </Text>
          <SpecialButton text="FINISH" onClick={this.props.onFinish} />
        </ScrollView>
      </React.Fragment>
    );
  }

  render() {
    const { status } = this.props;
    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        {status === MOMENTUM_OFFER_STATUSES.PASSED
          ? this.renderPass()
          : this.renderIneligible()}
      </ImageBackground>
    );
  }
}

EligibilityResults.propTypes = {
  onFinish: PropTypes.func.isRequired,
  status: PropTypes.oneOf([
    MOMENTUM_OFFER_STATUSES.PASSED,
    MOMENTUM_OFFER_STATUSES.INELIGIBLE
  ])
};

export default EligibilityResults;
