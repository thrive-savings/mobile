import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

import GOAL_CATEGORIES from "../../../../globals/goalCategories";

import styles from "./styles";

class ChooseCategory extends Component {
  render() {
    const goalCategories = Object.keys(GOAL_CATEGORIES);
    const goalCategoryViews = goalCategories.map((category, index) => {
      if (index < goalCategories.length - 1) {
        return (
          <TouchableOpacity key={index} activeOpacity={0.6} style={styles.categoryHolder}>
            <Image source={GOAL_CATEGORIES[category].icon} />
            <Text style={styles.categoryName}>{GOAL_CATEGORIES[category].name}</Text>
          </TouchableOpacity>
        );
      }
    });

    return (
      <View style={styles.categories}>
        {goalCategoryViews}
      </View>
    );
  }
}

export default ChooseCategory;
