import React, { Component } from "react";
import {
  View,
  Image,
  StatusBar
} from "react-native";

import styles from "./styles";
import colors from "../../theme/colors";

import WhyLink from "./pages/WhyLink";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const logo = require("../../../assets/Logo/white.png");


class IntegrateBank extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <Image source={bg} style={styles.background}>
          <View style={styles.header}>
            <Image source={logo} style={styles.headerLogo} />
          </View>
          <View style={{flex: 1}}>
            <WhyLink />
          </View>
        </Image>
      </View>
    );
  }
}

export default IntegrateBank;
