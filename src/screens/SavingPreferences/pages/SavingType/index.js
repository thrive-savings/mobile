import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Svg } from "expo";
import {
  View,
  Text,
  Card
} from "native-base";

import SpecialButton from "../../../../components/SpecialButton";

import styles from "./styles";

const colors = require("../../../../theme/colors");

type Props = {
  navigation: () => void
};
class SavingType extends Component {
  state: {
    savingType: ""
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      savingType: ""
    };

    this.next = this.next.bind(this);
  }

  next() {
    // TODO: connect api here
    this.props.changeStep(2);
  }

  typeSelected(savingType: string) {
    this.setState({ savingType });
  }

  render() {
    return (
      <Card style={styles.container}>
        <View style={styles.dots}>
          <Svg width={40} height={10}>
            <Svg.Circle cx="4" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={"white"} />
            <Svg.Circle cx="20" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={colors.blue} />
            <Svg.Circle cx="36" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={"white"} />
          </Svg>
        </View>

        <Text style={styles.labelText}>HOW WOULD YOU LIKE TO SAVE?</Text>
        <Text style={styles.secondaryText}>You can come back and update this later.</Text>

        <View style={styles.typesContainer}>
          <Card style={styles.savingTypeCard}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.typeSelected("flex")}>
              <Text style={[styles.blueHeader, (this.state.savingType === "fixed" && styles.disabledType)]}>THRIVE FLEX</Text>
              <Text style={[styles.bodyText, (this.state.savingType === "fixed" && styles.disabledType)]}>We'll find disposable income based on your spending history and sweep varying funds into your Thrive Savings account.</Text>
              <Text style={[styles.blueFooter, (this.state.savingType === "fixed" && styles.disabledType)]}>Optimal for freelance/part-time workers</Text>
            </TouchableOpacity>
          </Card>

          <Card style={styles.savingTypeCard}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.typeSelected("fixed")}>
              <Text style={[styles.greenHeader, (this.state.savingType === "flex" && styles.disabledType)]}>THRIVE FIXED</Text>
              <Text style={[styles.bodyText, (this.state.savingType === "flex" && styles.disabledType)]}>A recurring fixed amount will be deposited into your Thrive Savings account.</Text>
              <Text style={[styles.greenFooter, (this.state.savingType === "flex" && styles.disabledType)]}>Optimal for steady earners</Text>
            </TouchableOpacity>
          </Card>
        </View>

        <SpecialButton next={this.next} state={this.state.savingType ? 1 : 0} />
      </Card>
    );
  }
}

export default SavingType;
