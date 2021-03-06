import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

import amplitude from "../../../../globals/amplitude";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

const logo = require("../../../../../assets/LogoLarger/bitmap.png");

class ChooseType extends Component {
  componentDidMount() {
    amplitude.track(amplitude.events.CHOOSE_SIGN_UP_TYPE_VIEW);
  }

  onButtonPress = type => {
    amplitude.track(type === "personal" ? amplitude.events.CLICKED_JOIN_THRIVE_PERSONAL : amplitude.events.CLICKED_JOIN_THRIVE_AT_WORK);
    this.props.onButtonPress(type);
  };

  render() {
    return (
      <View style={styles.container} behavior="padding" enabled>
        <View style={styles.logoContainer}>
          <Image
            source={logo}
            style={this.props.keyboardClosed ? styles.logo : styles.smallerLogo}
          />
        </View>

        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={[styles.buttonStyle, globalStyles.shadow]}
            activeOpacity={0.6}
            onPress={() => this.onButtonPress("personal")}
          >
            <Text style={[styles.buttonText, styles.greenText]}>JOIN THRIVE PERSONAL</Text>
          </TouchableOpacity>

          <Text style={styles.regularText}>Do you have an employer code?</Text>
          <TouchableOpacity
            style={[styles.buttonStyle, globalStyles.shadow]}
            activeOpacity={0.6}
            onPress={() => this.onButtonPress("company")}
          >
            <Text style={styles.buttonText}>JOIN THRIVE @ WORK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ChooseType.propTypes = {
  onButtonPress: PropTypes.func.isRequired
};

export default ChooseType;
