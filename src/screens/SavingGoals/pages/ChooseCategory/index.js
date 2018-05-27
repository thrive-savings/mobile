import React, { Component } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

import GOAL_CATEGORIES from "../../../../globals/goalCategories";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

class ChooseCategory extends Component {
  render() {
    const goalCategories = Object.keys(GOAL_CATEGORIES);
    const goalCategoryViews = goalCategories.map((category, index) => {
      if (index < goalCategories.length - 1) {
        return (
          <TouchableOpacity key={index} activeOpacity={0.6} style={[styles.categoryHolder, globalStyles.shadow]} onPress={() => this.props.submit(category)}>
            <Image source={GOAL_CATEGORIES[category].icon} />
            <Text style={styles.categoryName}>{GOAL_CATEGORIES[category].name}</Text>
          </TouchableOpacity>
        );
      }
    });

    return (
      <ScrollView contentContainerStyle={styles.categories} showsVerticalScrollIndicator={false}>
        {goalCategoryViews}
      </ScrollView>
    );
  }
}

export default ChooseCategory;
