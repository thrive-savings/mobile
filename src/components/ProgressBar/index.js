import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View
} from "react-native";
import { LinearGradient } from "expo";

import styles from "./styles";
import colors from "../../theme/colors";

class ProgressBar extends Component {
  render() {
    return (
      <View style={styles.progressContainer}>
        <LinearGradient
          colors={colors.blueGreenGradient.colors}
          style={[styles.progressFill, {flex: this.props.progress}]}
        />
      </View>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number
};
ProgressBar.defaultProps = {
  progress: 0
};

export default ProgressBar;
