import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Text } from "react-native";

import amplitude from "../../../../globals/amplitude";

import SpecialButton from "../../../../components/SpecialButton";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

import { ACTION_TYPES } from "../../state/constants";

const thumbnailIcon = require("../../../../../assets/ThumbnailLogo/Small/thumbnail.png");
const shieldIcon = require("../../../../../assets/Icons/Shield/bitmap.png");
const bankIcon = require("../../../../../assets/Icons/BankSymbolSmaller/bitmap.png");
const tickIcon = require("../../../../../assets/Icons/TickIcon/bitmap.png");

class WhyLink extends Component {
  componentDidMount() {
    amplitude.track(amplitude.events.WHY_LINK_VIEW);
  }

  render() {
    return (
      <View style={[styles.container, globalStyles.shadow]}>
        <Text style={styles.titleText}>OUR COMMITMENT TO YOU</Text>

        <View style={styles.logosContainer}>
          <Image source={thumbnailIcon} />
          <View style={styles.dashLine} />
          <Image source={shieldIcon} />
          <View style={styles.dashLine} />
          <Image source={bankIcon} />
        </View>

        <View style={styles.infoRow}>
          <Image source={tickIcon} />
          <Text style={styles.infoText}>
            We use AES-256 encryption to protect your sensitive information.
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Image source={tickIcon} />
          <Text style={styles.infoText}>
            Your savings are CDIC insured.
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Image source={tickIcon} />
          <Text style={styles.infoText}>
            We never store your bank login credentials.
          </Text>
        </View>

        <SpecialButton style={styles.buttonStyle} text={"LINK MY ACCOUNT"} onClick={this.props.next} />
      </View>
    );
  }
}

WhyLink.propTypes = {
  actionType: PropTypes.oneOf(Object.values(ACTION_TYPES)),
  next: PropTypes.func
};
WhyLink.defaultProps = {
  actionType: ACTION_TYPES.INITAL,
  next: () => {}
};

export default WhyLink;
