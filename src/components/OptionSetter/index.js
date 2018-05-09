import React from "react";
import { TouchableOpacity, Image } from "react-native";
import {
  View,
  Text
} from "native-base";

import styles from "./styles";

const tickIcon = require("../../../assets/Icons/TickGradient/tickGradient.png");

const getModalContent = (props) => {
  let { label, types, selectedIndex, onPress } = props;
  if (!label) {
    label = "Options";
  }
  if (!selectedIndex) {
    selectedIndex = 0;
  }
  if (!onPress) {
    onPress = (num) => {};
  }

  let body = [];
  types.map(({ displayName }, index) => {
    body.push((
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onPress(index)}
        style={styles.optionRow}
        key={index}
      >
        <Text style={[styles.optionText, (selectedIndex === index && styles.enabledText)]}>{displayName}</Text>
        {selectedIndex === index && <Image source={tickIcon} style={styles.tickIcon} />}
      </TouchableOpacity>
    ));
    if (index < types.length - 1) {
      body.push((
        <View style={styles.separator}  key={`separator_${index}`}/>
      ));
    }
  });

  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.optionsContainer}>
        {body}
      </View>
    </View>
  );
};

export default getModalContent;
