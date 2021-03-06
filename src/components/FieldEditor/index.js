import React from "react";
import { TextInput } from "react-native";
import {
  View,
  Text,
} from "native-base";
import color from "color";

import styles from "./styles";
import colors from "../../theme/colors";

const getModalContent = (props) => {
  let { label, onChange } = props;
  if (!label) {
    label = "Enter new goal name.";
  }
  if (!onChange) {
    onChange = (text) => {};
  }

  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.inputGrp}>
        <TextInput
          style={styles.input}
          placeholder={"Goal Name"}
          autoFocus
          placeholderTextColor={color(colors.darkerGrey).darken(0.1).hex()}
          underlineColorAndroid="transparent"
          onChangeText={onChange}
        />
      </View>
    </View>
  );
};


export default getModalContent;
