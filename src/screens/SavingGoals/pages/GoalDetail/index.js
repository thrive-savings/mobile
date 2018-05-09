import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Card } from "native-base";

import ProgressBar from "../../../../components/ProgressBar";

import GOAL_CATEGORIES from "../../../../globals/goalCategories";

import styles from "./styles";

const GOAL_DETAIL = {
  category: "RainyDay",
  name: "RAINY DAY FUND",
  amount: "$878.52"
};

class GoalDetail extends Component {
  renderGoalInfoBox() {
    const { category, name } = GOAL_DETAIL;
    return (
      <View style={styles.infoBox}>
        <Image source={GOAL_CATEGORIES[category].icon} />
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.amountTextHolder}>
          <Text style={styles.amountMainText}>$878.</Text>
          <Text style={styles.amountRemainderText}>52</Text>
        </View>

        <View style={styles.progressContainer}>
          <ProgressBar progress={0.8} />
          <View style={styles.progressTextsHolder}>
            <Text style={styles.progressBarText}>$0</Text>
            <Text style={styles.progressBarText}>$5,000</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.extraInfoContainer}>
          <View style={styles.extraInfoLeftView}>
            <Text style={styles.extraInfoLabel}>Saving since</Text>
            <Text style={styles.extraInfoText}>Apr 03, 2018</Text>
          </View>
          <View style={styles.extraInfoRightView}>
            <Text style={styles.extraInfoLabel}>Remaining</Text>
            <Text style={styles.extraInfoText}>$4,121.48</Text>
          </View>
        </View>

        <Card style={styles.editButtonCard}>
          <TouchableOpacity activeOpacity={0.6} style={styles.editButtonContainer}>
            <Text style={styles.editButtonText}>EDIT GOAL</Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderGoalInfoBox()}
      </View>
    );
  }
}

export default GoalDetail;
