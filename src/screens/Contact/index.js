import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";

import Communications from "react-native-communications";

import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const menuIcon = require("../../../assets/Icons/Menu/menu.png");
const botIcon = require("../../../assets/Icons/ThriveBot/thriveBot.png");

class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground
          source={bg}
          style={styles.background}
        >
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigation.navigate("DrawerOpen")} style={styles.headerIcon}>
              <Image source={menuIcon} style={styles.headerIconImage}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>CONTACT</Text>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Image source={botIcon} />
              <Text style={styles.descText}>We’re more than happy to help with any questions or feedback you may have.</Text>
              <Text style={styles.descText}>Our office hours are Monday to Friday, 9:00AM - 5:00PM EST.</Text>
              <TouchableOpacity activeOpacity={0.6} style={styles.helpButton} onPress={() => Communications.phonecall("6476763332", true)}>
                <Text style={styles.blueText}>Call +1-833-7-THRIVE</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={styles.helpButton} onPress={() => Communications.email(["help@thrivesavings.com", "naib.baghirov@gmail.com"],null,null,"Help Needed",null)}>
                <Text style={styles.blueText}>HELP@THRIVESAVINGS>COM</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Contact;
