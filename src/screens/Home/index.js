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

const NOTIFICATION_TYPES = [
  {
    type: "EmployerBonus",
    displayName: "EMPLOYER BONUS",
    description: "Hooray, your employer has contributed $100 to your Rainy Day Fund! Swipe to dismiss."
  },
  {
    type: "SavingPreferences",
    displayName: "SAVING PREFERENCES",
    description: "Click here to set up how you’d like to save!"
  }
];

class Home extends Component {
  renderNotifications() {
    return NOTIFICATION_TYPES.map(({ type, displayName, description }) => {
      return (
        <TouchableOpacity key={type} activeOpacity={0.6} style={styles.notificationHolder}>
          <LinearGradient
            colors={colors.blueGreenGradient.colors}
            style={styles.notificationContent}
          >
            <Text style={styles.notificationText}>
              Test
            </Text>
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
