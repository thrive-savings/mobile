import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { LinearGradient } from "expo";

import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundAccount.png");
const menuIcon = require("../../../assets/Icons/Menu/menu.png");
const logo = require("../../../assets/Logo/white.png");
const employerBonusIcon = require("../../../assets/Icons/Notifications/EmployerBonus/bitmap.png");
const savingPreferencesIcon = require("../../../assets/Icons/Notifications/SavingPreferences/bitmap.png");


const NOTIFICATION_TYPES = [
  {
    type: "EmployerBonus",
    title: "EMPLOYER BONUS",
    description: "Hooray, your employer has contributed $100 to your Rainy Day Fund! Swipe to dismiss.",
    icon: employerBonusIcon
  },
  {
    type: "SavingPreferences",
    title: "SAVING PREFERENCES",
    description: "Click here to set up how you’d like to save!",
    icon: savingPreferencesIcon
  }
];

class Home extends Component {
  renderNotifications() {
    return NOTIFICATION_TYPES.map(({ type, title, description, icon }) => {
      return (
        <TouchableOpacity key={type} activeOpacity={0.6} style={styles.notificationHolder}>
          <LinearGradient colors={colors.blueGreenGradient.colors} style={styles.notificationContent}>
            <Image source={icon} />
            <View style={styles.notificationTextsContainer}>
              <Text style={styles.notificationTitle}>{title}</Text>
              <Text style={styles.notificationDescription}>{description}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <Image source={bg} style={styles.background}>
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("DrawerOpen")} style={styles.headerMenuButton}>
              <Image source={menuIcon} />
            </TouchableOpacity>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.subHeader}>
            <Text style={styles.balanceLabelText}>THRIVE SAVINGS BALANCE</Text>
            <View style={styles.balanceTextHolder}>
              <Text style={styles.balanceMainText}>$0.</Text>
              <Text style={styles.balanceRemainderText}>00</Text>
            </View>
            <View style={styles.subHeaderLabel}>
              <Text style={styles.subHeaderText}>MY SAVINGS GOALS</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
              {this.renderNotifications()}
            </ScrollView>
          </View>
        </Image>
      </View>
    );
  }
}

export default Home;
