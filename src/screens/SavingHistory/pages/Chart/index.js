import React, { Component } from "react";
import { View, Text } from "react-native";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

class Chart extends Component {
  render() {
    return (
      <View style={[styles.container, globalStyles.shadow]}>
        <Text style={styles.placeholder}>Coming Soon</Text>
      </View>
    );
  }
}

export default Chart;
