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

import amplitude from "../../globals/amplitude";

import Header from "../../components/Header";
import SpecialButton from "../../components/SpecialButton";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const botIcon = require("../../../assets/Icons/ThriveBot/thriveBot.png");
const phoneIcon = require("../../../assets/Icons/Phone/phone.png");
const emailIcon = require("../../../assets/Icons/Email/email.png");

class Contact extends Component {
  textThriveBot() {
    amplitude.track(amplitude.events.CLICKED_TALK_TO_BOT);
    Communications.text("6476941740", "Balance");
  }

  callSupport() {
    amplitude.track(amplitude.events.CLICKED_CALL_SUPPORT);
    Communications.phonecall("8332433223", true);
  }

  emailSupport() {
    amplitude.track(amplitude.events.CLICKED_EMAIL_SUPPORT);
    Communications.email(["help@thrivesavings.com"],null,null,"Help Needed",null);
  }

  render() {
    return (
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={globalStyles.background}>
          <Header navigation={this.props.navigation} content="text" text="CONTACT" />

          <View style={styles.contentContainer}>
            <View style={[styles.content, globalStyles.shadow]}>
              <Image source={botIcon} />
              <Text style={styles.descText}>We’re more than happy to help with any questions or feedback you may have.{"\n"}You can chat with ThriveBot and perform basic commands regarding your account.</Text>
              <SpecialButton text={"TALK TO THRIVEBOT"} onClick={() => this.textThriveBot()}/>
              <Text style={styles.descText}>You can also choose to speak with one of our representatives. Our office hours are <Text style={styles.boldText}> Monday to Friday, 9:00AM - 5:00PM EST.</Text></Text>
              <View style={styles.helpButtonsContainer}>
                <TouchableOpacity activeOpacity={0.6} style={styles.helpButton} onPress={() => this.callSupport()}>
                  <Image source={phoneIcon} />
                  <Text style={styles.blueText}>CALL</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={styles.helpButton} onPress={() => this.emailSupport()}>
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
