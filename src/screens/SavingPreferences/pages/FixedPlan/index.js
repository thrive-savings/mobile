import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";
import { Left, Right } from "native-base";
import { connect } from "react-redux";

import SpecialButton from "../../../../components/SpecialButton";
import ModalTemplate from "../../../../components/ModalTemplate";
import Dots from "../../../../components/Dots";

import getNumPadModalContent from "../../../../components/NumPad";
import getFrequencySetterModalContent from "../../../../components/OptionSetter";

import { getDollarString } from "../../../../globals/helpers";

import styles from "./styles";
import { FREQUENCY_TYPES, getFrequencyIndex } from "./constants";


class FixedPlan extends Component {
  constructor(props) {
    super(props);

    let { values: { fixedContribution: contribution, frequency: frequencyIndex } } = props.reducer;
    const { savingPreferences: { savingDetails: { fetchFrequency, fixedContribution } } } = props.userData;
    if (!contribution) { contribution = fixedContribution; }
    if (!frequencyIndex) { frequencyIndex = fetchFrequency; }

    this.state = {
      contribution: getDollarString(contribution),
      setContribution: 0,
      frequencyIndex: getFrequencyIndex(frequencyIndex),
      showContributionSetter: false,
      showFrequencySetter: false
    };

    this.next = this.next.bind(this);
    this.numPadClicked = this.numPadClicked.bind(this);
    this.frequencySelected = this.frequencySelected.bind(this);
  }

  next() {
    const { setContribution, frequencyIndex } = this.state;

    this.props.save({
      fixedContribution: setContribution > 0 ? setContribution.toString() : "2000",
      frequency: FREQUENCY_TYPES[frequencyIndex].identifier
    });

    this.setState({ showFrequencySetter: false, showContributionSetter: false });
  }

  numPadClicked(value: int) {
    let setContribution = this.state.setContribution;
    setContribution = value >= 0 ? setContribution * 10 + value : Math.floor(setContribution / 10);

    const contribution = getDollarString(setContribution);

    this.setState({ setContribution, contribution });
  }

  frequencySelected(value: int) {
    this.setState({ frequencyIndex: value });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.showDots && <Dots step={3} />}

        <Text style={[styles.labelText, (this.props.showDots && styles.topPadder)]}>HOW MUCH WOULD YOU LIKE TO SAVE?</Text>
        <Text style={styles.secondaryText}>
          You are currently on the <Text style={styles.planNameText}>Thrive Fixed</Text> plan
        </Text>

        <View style={styles.separator} />
        <View style={styles.inputContainer}>
          <Left>
            <Text style={styles.inputLabel}>
              Contribution:
            </Text>
          </Left>
          <Right>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showContributionSetter: true, showFrequencySetter: false })} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
              <Text style={styles.inputButtonText}>
                {this.state.contribution}
              </Text>
            </TouchableOpacity>
          </Right>
        </View>
        <View style={styles.separator} />
        <View style={styles.inputContainer}>
          <Left>
            <Text style={styles.inputLabel}>
              Frequency:
            </Text>
          </Left>
          <Right>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showFrequencySetter: true, showContributionSetter: false })} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
              <Text style={styles.inputButtonText}>
                {FREQUENCY_TYPES[this.state.frequencyIndex].displayName}
              </Text>
            </TouchableOpacity>
          </Right>
        </View>
        <View style={styles.separator} />
        <View style={styles.inputContainer}>
          <Left>
            <Text style={styles.inputLabel}>
              Overdraft Limit:
            </Text>
          </Left>
          <Right>
            <Text style={styles.inputText}>$100.00</Text>
          </Right>
        </View>
        <Text style={styles.promiseText}>
          If your bank account goes below this limit, we’ll stop withdrawing any funds into your Thrive Savings account.
        </Text>
        <SpecialButton loading={this.props.reducer.isLoading} onClick={this.next} />

        <ModalTemplate
          show={this.state.showContributionSetter}
          buttonText={"SUBMIT"}
          content={
            getNumPadModalContent({
              label: "Enter contribution amount.",
              value: this.state.setContribution && this.state.contribution,
              onPress: this.numPadClicked
            })
          }
        />

        <ModalTemplate
          show={this.state.showFrequencySetter}
          buttonText={"SAVE"}
          content={
            getFrequencySetterModalContent({
              label: "Frequency",
              types: FREQUENCY_TYPES,
              selectedIndex: this.state.frequencyIndex,
              onPress: this.frequencySelected
            })
          }
        />
      </View>
    );
  }
}

FixedPlan.propTypes = {
  next: PropTypes.func,
  showDots: PropTypes.bool
};
FixedPlan.defaultProps = {
  next: () => {},
  showDots: true
};

function mapStateToProps(state) {
  return {
    userData: state.authReducer.data.authorized,
    reducer: state.savingPreferencesReducer
  };
}

export default connect(mapStateToProps)(FixedPlan);
