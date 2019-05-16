import React, { Component } from "react";
import PropTypes from "prop-types";
import { ImageBackground, ScrollView, Image, Text } from "react-native";

import Header from "../../../../components/Header";
import SpecialButton from "../../../../components/SpecialButton";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

const bg = require("../../../../../assets/Backgrounds/BackgroundFull.png");
const thriveBot = require("../../../../../assets/Icons/ThriveBot/thriveBot.png");

class CalgaryOffer extends Component {
  render() {
    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header button="none" />
        <ScrollView
          style={globalStyles.container}
          contentContainerStyle={[styles.container, globalStyles.shadow]}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.titleText}>CALGARY OFFER</Text>
          <Image source={thriveBot} />
          <Text style={styles.regularText}>
            You could be eligible for $60 in matched savings.
          </Text>
          <SpecialButton text="SEE OFFER" onClick={this.props.onSeeOffer} />
        </ScrollView>
      </ImageBackground>
    );
  }
}

CalgaryOffer.propTypes = {
  onSeeOffer: PropTypes.func.isRequired
};

export default CalgaryOffer;
