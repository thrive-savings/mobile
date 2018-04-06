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

import NumPadModal from "../../modals/NumPad";

import styles from "./styles";

const colors = require("../../../../theme/colors");

type Props = {
  next: () => void
};
class FixedPlan extends Component {
  state = {
    contribution: "$20.00",
    frequency: "Once a week",
    showContributionSetter: false,
    showFrequencySetter: false
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      contribution: "$20.00",
      frequency: "Once a week",
      showContributionSetter: false,
      showFrequencySetter: false
    };
  }

  modalClosed() {
    console.log("Modal closed");
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
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showContributionSetter: true })}>
              <Text style={styles.inputButtonText}>{this.state.contribution}</Text>
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
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showFrequencySetter: true })}>
              <Text style={styles.inputButtonText}>{this.state.frequency}</Text>
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
        <SpecialButton next={this.next} state={1} />

        <NumPadModal show={this.state.showContributionSetter} onClose={this.modalClosed}/>
      </Card>
    );
  }
}

export default FixedPlan;
