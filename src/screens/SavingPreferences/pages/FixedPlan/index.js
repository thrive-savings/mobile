import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Card,
  Left,
  Right
} from "native-base";

import SpecialButton from "../../../../components/SpecialButton";
import ModalTemplate from "../../../../components/ModalTemplate";
import Dots from "../../../../components/Dots";

import getNumPadModalContent from "../../../../components/NumPad";
import getFrequencySetterModalContent from "../../../../components/OptionSetter";

import styles from "./styles";
import { FREQUENCY_TYPES } from "./constants";


class FixedPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contribution: "$20.00",
      setContribution: 0,
      frequencyIndex: 0,
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

    let contribution = setContribution / 100;
    contribution = contribution.toFixed(2);
    contribution.toLocaleString("en-US", {style: "currency", currency: "USD"});
    contribution = "$" + contribution;

    this.setState({ setContribution, contribution });
  }

  frequencySelected(value: int) {
    this.setState({ frequencyIndex: value });
  }

  render() {
    return (
      <Card style={styles.container}>
        {this.props.showDots && <Dots step={3} />}

        <Text style={styles.labelText}>HOW MUCH WOULD YOU LIKE TO SAVE?</Text>
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
        <SpecialButton loading={this.props.reducer.isLoading} onClick={this.next} state={1} />

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
      </Card>
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

export default FixedPlan;
