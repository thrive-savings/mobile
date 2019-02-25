import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { View, Text } from "native-base";

import styles from "./styles";

const filledStarIcon = require("../../../assets/Icons/Star/Blue/star.png");
const emptyStarIcon = require("../../../assets/Icons/Star/Empty/star.png");

const getModalContent = props => {
  let { label, value, onPress } = props;
  if (!label) {
    label = "Enter amount.";
  }
  if (!value) {
    value = 0;
  }
  if (!onPress) {
    onPress = () => {};
  }

  const hitSlop = { top: 20, bottom: 20, left: 10, right: 10 };

  return (
    <View>
      <Text style={styles.labelText}>
        {label}
      </Text>
      <View style={styles.row}>
        <TouchableOpacity hitSlop={hitSlop} activeOpacity={0.6} onPress={() => onPress(1)}>
          <Image source={value > 0 ? filledStarIcon : emptyStarIcon} />
        </TouchableOpacity>
        <TouchableOpacity hitSlop={hitSlop} activeOpacity={0.6} onPress={() => onPress(2)}>
          <Image source={value > 1 ? filledStarIcon : emptyStarIcon} />
        </TouchableOpacity>
        <TouchableOpacity hitSlop={hitSlop} activeOpacity={0.6} onPress={() => onPress(3)}>
          <Image source={value > 2 ? filledStarIcon : emptyStarIcon} />
        </TouchableOpacity>
        <TouchableOpacity hitSlop={hitSlop} activeOpacity={0.6} onPress={() => onPress(4)}>
          <Image source={value > 3 ? filledStarIcon : emptyStarIcon} />
        </TouchableOpacity>
        <TouchableOpacity hitSlop={hitSlop} activeOpacity={0.6} onPress={() => onPress(5)}>
          <Image source={value > 4 ? filledStarIcon : emptyStarIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default getModalContent;
