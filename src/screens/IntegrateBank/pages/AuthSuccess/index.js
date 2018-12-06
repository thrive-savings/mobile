import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ScrollView, Image, Text } from "react-native";

import Dots from "../../../../components/Dots";
import SpecialButton from "../../../../components/SpecialButton";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

const thriveBot = require("../../../../../assets/Icons/ThriveBot/thriveBot.png");

class AuthSuccess extends Component {
  continue() {
    this.props.next();
  }

  render() {
    const relink = this.props.relink;
    return (
      <ScrollView
        contentContainerStyle={[styles.container, globalStyles.shadow]}
        showsVerticalScrollIndicator={false}
      >
        <Dots step={3} count={3} />

        <Text style={styles.titleText}>SUCCESS!</Text>
        <Image source={thriveBot} style={styles.botSymbol} />
        <Text style={styles.secondaryTitleText}>
          You’ve successfully linked your Thrive Savings account with your Bank.
        </Text>
        {!relink &&
          <Text style={styles.regularText}>
            Next step is to choose how you prefer to save!
          </Text>}

        <View style={styles.separator} />
        <SpecialButton
          text={relink ? "CONTINUE" : "SET HOW I SAVE"}
          onClick={this.continue.bind(this)}
        />
      </ScrollView>
    );
  }
}

AuthSuccess.propTypes = {
  next: PropTypes.func
};
AuthSuccess.defaultProps = {
  next: () => {}
};

export default AuthSuccess;
