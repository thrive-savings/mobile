import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundCover.png");
const logo = require("../../../assets/Logo/white.png");


class Landing extends Component {
  render() {
    const navigation = this.props.navigation;

    return (
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
        <ImageBackground source={bg} style={globalStyles.background}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.labelText}>
              Saving money, simplified.
            </Text>
            <Text style={[styles.descText, styles.contentPadder]}>
              Start saving today in less than 3 minutes.
            </Text>
            <TouchableOpacity style={[styles.signUpBtn, globalStyles.shadow]} activeOpacity={0.6} onPress={() => navigation.navigate("SignUp")}>
              <Text style={[styles.buttonText, styles.greenText]}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={[styles.descText, styles.bottomPadder]}>Already have an account?</Text>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.buttonText}>
                LOG IN
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Landing;
