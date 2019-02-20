import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ScrollView, Image, Text } from "react-native";

import Dots from "../../../../components/Dots";
import SpecialButton from "../../../../components/SpecialButton";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

const thriveBot = require("../../../../../assets/Icons/ThriveBot/thriveBot.png");

class AuthSuccess extends Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={[styles.container, globalStyles.shadow]}
        showsVerticalScrollIndicator={false}
      >
        <Dots step={3} count={3} />

        <Text style={styles.titleText}>
          SUCCESS!
        </Text>
        <Image source={thriveBot} style={styles.botSymbol} />
        <Text style={styles.secondaryTitleText}>
          You’ve successfully linked your Thrive Savings account with your Bank.
        </Text>
        <Text style={styles.regularText}>
          You can link more banks later on.
        </Text>

        <View style={styles.separator} />
        <SpecialButton text="CONTINUE" onClick={() => this.props.updateConnectionsData()} />
      </ScrollView>
    );
  }
}

AuthSuccess.propTypes = {
  updateConnectionsData: PropTypes.func.isRequired
};

export default AuthSuccess;
