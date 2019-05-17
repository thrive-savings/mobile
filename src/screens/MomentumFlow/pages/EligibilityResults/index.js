import React, { Component } from "react";
import { ImageBackground, ScrollView, View, Image, Text } from "react-native";
import PropTypes from "prop-types";
import CheckBox from "react-native-check-box";

import Header from "../../../../components/Header";
import SpecialButton from "../../../../components/SpecialButton";

import { MOMENTUM_OFFER_STATUSES } from "../../state/constants";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

const bg = require("../../../../../assets/Backgrounds/BackgroundFull.png");
const starIcon = require("../../../../../assets/Icons/StarLarger/star.png");
const thriveLargeLogo = require("../../../../../assets/ThumbnailLogo/Large/thumbnail.png");
const momentumLogo = require("../../../../../assets/Momentum/Logos/InApp/logo.png");
const tick = require("../../../../../assets/Icons/Checkbox/tick.png");

class EligibilityResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agreed: false
    };
  }

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
            matter to you!
          </Text>
          <SpecialButton
            text="FINISH"
            loading={this.props.loading}
            onClick={() =>
              this.props.onFinish(MOMENTUM_OFFER_STATUSES.INELIGIBLE_DONE)}
          />
        </ScrollView>
      </React.Fragment>
    );
  }

  onCheckboxClick() {
    this.setState({ agreed: !this.state.agreed });
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
          <Text style={[styles.regularText, styles.boldText]}>
            You're good to go!
          </Text>
          <Text style={[styles.regularText, styles.lessPaddedText]}>
            Momentum will boost your savings with $10 each month and send you
            tips and tricks for managing your money.
          </Text>
          <View style={styles.checkboxRow}>
            <CheckBox
              onClick={() => this.onCheckboxClick()}
              isChecked={this.state.agreed}
              unCheckedImage={<View style={styles.checkbox} />}
              checkedImage={
                <View style={styles.checkbox}>
                  <Image source={tick} style={styles.checkboxTick} />
                </View>
              }
            />
            <Text style={[styles.regularText, styles.leftAlignedText]}>
              I agree to the Momentum{" "}
              <Text
                style={styles.blueText}
                onPress={() => this.props.onNavigate("TOS")}
                suppressHighlighting
              >
                Terms of Service
              </Text>{" "}
              and{" "}
              <Text
                style={styles.blueText}
                onPress={() => this.props.onNavigate("PP")}
                suppressHighlighting
              >
                Privacy Policy
              </Text>
            </Text>
          </View>
          <SpecialButton
            enabled={this.state.agreed}
            loading={this.props.loading}
            text="FINISH"
            onClick={() =>
              this.props.onFinish(MOMENTUM_OFFER_STATUSES.PASSED_DONE)}
          />
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
  onNavigate: PropTypes.func.isRequired,
  status: PropTypes.oneOf(Object.values(MOMENTUM_OFFER_STATUSES)),
  loading: PropTypes.bool
};

export default EligibilityResults;
