import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import { Contacts } from "expo";

import Communications from "react-native-communications";
import { THRIVE_BOT_NUMBER, THRIVE_HELP_NUMBER } from "../../globals/constants";

import amplitude from "../../globals/amplitude";

import Header from "../../components/Header";
import SpecialButton from "../../components/SpecialButton";
import addStatusBar from "../../components/StatusBar";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const botIcon = require("../../../assets/Icons/ThriveBot/thriveBot.png");
const emailIcon = require("../../../assets/Icons/Email/email.png");

class Contact extends Component {
  async createContact() {
    const contactName = `Thrive Bot${__DEV__ ? " Dev" : ""}`;
    const { data } = await Contacts.getContactsAsync({
      name: contactName
    });

    if (!data || data.length === 0) {
      await Contacts.addContactAsync({
        [Contacts.Fields.FirstName]: contactName,
        [Contacts.Fields.Company]: "Thrive Savings Inc."
      });
    }
  }

  textThriveBot() {
    amplitude.track(amplitude.events.CLICKED_TALK_TO_BOT);
    if (Platform.OS !== "android") {
      this.createContact();
    }
    Communications.text(THRIVE_BOT_NUMBER, "Balance");
  }

  callSupport() {
    amplitude.track(amplitude.events.CLICKED_CALL_SUPPORT);
    Communications.phonecall(THRIVE_HELP_NUMBER, true);
  }

  emailSupport() {
    amplitude.track(amplitude.events.CLICKED_EMAIL_SUPPORT);
    Communications.email(
      ["help@thrivesavings.com"],
      null,
      null,
      "Help Needed",
      null
    );
  }

  render() {
    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header
          navigation={this.props.navigation}
          content="text"
          text="CONTACT"
        />

        <View style={styles.contentContainer}>
          <View style={[styles.content, globalStyles.shadow]}>
            <Image source={botIcon} />
            <Text style={styles.descText}>
              We’re more than happy to help with any questions or feedback you
              may have.{"\n"}You can chat with ThriveBot and perform basic
              commands regarding your account.
            </Text>
            <SpecialButton
              text={"TALK TO THRIVEBOT"}
              onClick={() => this.textThriveBot()}
            />
            <Text style={styles.descText}>
              You can also choose to speak with one of our representatives. Our
              office hours are{" "}
              <Text style={styles.boldText}>
                {" "}Monday to Friday, 9:00AM - 5:00PM EST.
              </Text>
            </Text>
            <View style={styles.helpButtonsContainer}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.helpButton}
                onPress={() => this.emailSupport()}
              >
                <Image source={emailIcon} />
                <Text style={styles.blueText}>EMAIL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default addStatusBar(Contact);
