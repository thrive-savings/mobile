import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Svg } from "expo";
import {
  View,
  Text,
  Card,
  Left,
  Right
} from "native-base";

import SpecialButton from "../../../../components/SpecialButton";
import ModalTemplate from "../../../../components/ModalTemplate";

import getNumPadModalContent from "../../modals/NumPad";
import getFrequencySetterModalContent from "../../modals/FrequencySetter";

import styles from "./styles";
import { FREQUENCY_TYPES } from "./constants";

const colors = require("../../../../theme/colors");

type Props = {
  next: () => void
};
class FixedPlan extends Component {
  state = {
    contribution: "$20.00",
    setContribution: 0,
    frequencyIndex: 0,
    showContributionSetter: false,
    showFrequencySetter: false
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      contribution: "$20.00",
      setContribution: 0,
      frequencyIndex: 0,
      showContributionSetter: false,
      showFrequencySetter: false
    };

    this.numPadClicked = this.numPadClicked.bind(this);
    this.frequencySelected = this.frequencySelected.bind(this);
  }

  numPadClicked(value: int) {
    let setContribution = this.state.setContribution;
    setContribution = value >= 0 ? setContribution * 10 + value : setContribution / 10;
    let contribution = setContribution / 100;
    contribution = contribution % 1 === 0 ? contribution : contribution.toFixed(2);
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
        <View style={styles.dots}>
          <Svg width={40} height={10}>
            <Svg.Circle cx="4" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={"white"} />
            <Svg.Circle cx="20" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={"white"} />
            <Svg.Circle cx="36" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={colors.blue} />
          </Svg>
        </View>

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
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showContributionSetter: true, showFrequencySetter: false })}>
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
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showFrequencySetter: true, showContributionSetter: false })}>
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
        <SpecialButton onClick={this.next} state={1} />

        <ModalTemplate
          show={this.state.showContributionSetter}
          buttonText={"SUBMIT"}
          content={
            getNumPadModalContent({
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

export default FixedPlan;
