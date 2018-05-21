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

import Header from "../../components/Header";
import SpecialButton from "../../components/SpecialButton";

import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const botIcon = require("../../../assets/Icons/ThriveBot/thriveBot.png");
const phoneIcon = require("../../../assets/Icons/Phone/phone.png");
const emailIcon = require("../../../assets/Icons/Email/email.png");

class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground
          source={bg}
          style={styles.background}
        >
          <Header navigation={this.props.navigation} content="text" text="CONTACT" />

          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Image source={botIcon} />
              <Text style={styles.descText}>We’re more than happy to help with any questions or feedback you may have.{"\n"}You can chat with ThriveBot and perform basic commands regarding your account.</Text>
              <SpecialButton state={1} text={"TALK TO THRIVEBOT"} onClick={() => Communications.text("6476763323", "Balance")}/>
              <Text style={styles.descText}>You can also choose to speak with one of our representatives. Our office hours are <Text style={styles.boldText}> Monday to Friday, 9:00AM - 5:00PM EST.</Text></Text>
              <View style={styles.helpButtonsContainer}>
                <TouchableOpacity activeOpacity={0.6} style={styles.helpButton} onPress={() => Communications.phonecall("6476763323", true)}>
                  <Image source={phoneIcon} />
                  <Text style={styles.blueText}>CALL</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={styles.helpButton} onPress={() => Communications.email(["help@thrivesavings.com", "naib.baghirov@gmail.com"],null,null,"Help Needed",null)}>
                  <Image source={emailIcon} />
                  <Text style={styles.blueText}>EMAIL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Contact;
