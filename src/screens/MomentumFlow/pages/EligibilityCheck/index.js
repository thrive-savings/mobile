import React, { Component } from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import PropTypes from "prop-types";
import CheckBox from "react-native-check-box";

import Header from "../../../../components/Header";
import SpecialButton from "../../../../components/SpecialButton";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

import INCOME_THRESHOLDS from "./constants";

const bg = require("../../../../../assets/Backgrounds/BackgroundFull.png");
const momentumLogo = require("../../../../../assets/Momentum/Logos/InApp/logo.png");
const tick = require("../../../../../assets/Icons/Checkbox/tick.png");

class EligibilityCheck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      familyMemberCount: undefined,
      isIncomeVerified: undefined,
      agreed: false
    };

    this.onSubmitCheck = this.onSubmitCheck.bind(this);
  }

  onSubmitCheck() {
    const { familyMemberCount, isIncomeVerified, agreed } = this.state;
    if (agreed && familyMemberCount > 0) {
      this.props.onSubmitCheck({
        householdCount: familyMemberCount,
        isIncomeBelow: isIncomeVerified
      });
    }
  }

  onFamilyMemberCountSet(i) {
    let newCount;
    if (i !== this.state.familyMemberCount) {
      newCount = i;
    }

    this.setState({ familyMemberCount: newCount });
  }

  renderFamilyMemberCountInput() {
    const { familyMemberCount } = this.state;
    let buttons = [];
    for (let i = 1; i <= 7; i++) {
      buttons.push(
        <TouchableOpacity
          key={`count_${i}`}
          activeOpacity={0.6}
          onPress={() => this.onFamilyMemberCountSet(i)}
          style={[
            styles.inputButton,
            familyMemberCount === i && styles.inputButtonSelected
          ]}
        >
          <Text
            style={[
              styles.regularText,
              familyMemberCount === i && styles.whiteText
            ]}
          >
            {i < 7 ? i : `${i}+`}
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.inputHolder}>
        <Text style={[styles.regularText, styles.boldText]}>
          How many people live in your household?
        </Text>
        <View style={styles.inputButtonsHolder}>
          {buttons}
        </View>
      </View>
    );
  }

  onIncomeVerificationSet(value) {
    let newValue = this.state.isIncomeVerified;

    if (typeof newValue === undefined || newValue !== value) {
      newValue = value;
    } else {
      newValue = undefined;
    }

    this.setState({ isIncomeVerified: newValue });
  }

  renderIncomeVerificationInput() {
    const { familyMemberCount, isIncomeVerified } = this.state;

    return (
      <View style={styles.inputHolder}>
        <Text style={[styles.regularText, styles.boldText]}>
          Is your annual household income below{" "}
          <Text style={styles.blueText}>
            {
              INCOME_THRESHOLDS[
                Math.min(familyMemberCount - 1, INCOME_THRESHOLDS.length - 1)
              ]
            }
          </Text>?
        </Text>
        <View style={styles.inputButtonsHolder}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this.onIncomeVerificationSet(true)}
            style={[
              styles.inputButton,
              styles.inputButtonWider,
              isIncomeVerified && styles.inputButtonSelected
            ]}
          >
            <Text
              style={[styles.regularText, isIncomeVerified && styles.whiteText]}
            >
              YES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this.onIncomeVerificationSet(false)}
            style={[
              styles.inputButton,
              styles.inputButtonWider,
              typeof isIncomeVerified === "boolean" &&
                !isIncomeVerified &&
                styles.inputButtonSelected
            ]}
          >
            <Text
              style={[
                styles.regularText,
                typeof isIncomeVerified === "boolean" &&
                  !isIncomeVerified &&
                  styles.whiteText
              ]}
            >
              NO
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onCheckboxClick() {
    this.setState({ agreed: !this.state.agreed });
  }

  renderCheckboxFields() {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => this.onCheckboxClick()}
        style={styles.checkboxRow}
      >
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
          I certify this information is accurate and understand I may need to
          provide proof of income
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { familyMemberCount, isIncomeVerified, agreed } = this.state;

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header
          navigation={this.props.navigation}
          button="back"
          onButtonPress={this.props.onBackPress}
          content="text"
        />
        <Image source={momentumLogo} style={styles.momentumLogo} />
        <ScrollView
          style={globalStyles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.contentContainer}>
            <Text style={[styles.regularText, styles.faqText]}>
              Full details and FAQ
            </Text>

            {this.renderFamilyMemberCountInput()}
            {familyMemberCount && this.renderIncomeVerificationInput()}
            {familyMemberCount &&
              typeof isIncomeVerified === "boolean" &&
              <React.Fragment>
                {this.renderCheckboxFields()}
                <SpecialButton
                  enabled={agreed}
                  text={"NEXT"}
                  onClick={this.onSubmitCheck}
                />
              </React.Fragment>}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

EligibilityCheck.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  onSubmitCheck: PropTypes.func.isRequired
};

export default EligibilityCheck;
