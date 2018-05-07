import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Card } from "native-base";
import { LinearGradient } from "expo";

import ProgressBar from "../../components/ProgressBar";

import GOAL_CATEGORIES from "../../globals/goalCategories";

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
    description: "Hooray, your employer has contributed $100 to your Rainy Day Fund! Click to dismiss.",
    icon: employerBonusIcon
  },
  {
    type: "SavingPreferences",
    title: "SAVING PREFERENCES",
    description: "Click here to set up how you’d like to save!",
    icon: savingPreferencesIcon
  }
];

const USER_GOALS = [
  {
    category: "RainyDay",
    name: "RAINY DAY FUND",
    amount: 5000
  },
  {
    category: "Education",
    name: "EDUCATION",
    amount: 10000
  }
];

class Home extends Component {
  renderNotifications() {
    return NOTIFICATION_TYPES.map(({ type, title, description, icon }) => {
      return (
        <TouchableOpacity key={type} activeOpacity={0.6} style={styles.notificationHolder} onPress={() => this.props.navigation.navigate("SavingGoals")}>
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

  renderGoals() {
    return USER_GOALS.map(({ category, name, amount }, index) => {
      return (
        <TouchableOpacity key={index} activeOpacity={0.6} style={styles.goalHolder} onPress={() => this.props.navigation.navigate("SavingGoals", { actionType: "Edit" })}>
          <Card style={styles.goalCard}>
            <View style={styles.goalRow}>
              <Image source={GOAL_CATEGORIES[category].icon} />
              <View style={styles.goalTextsContainer}>
                <Text style={styles.goalLabelText}>{`GOAL ${index + 1}`}</Text>
                <Text style={styles.goalNameText}>{name}</Text>
                <Text style={styles.goalAmountText}>$878.52</Text>
              </View>
            </View>
            <View style={styles.goalProgressContainer}>
              <ProgressBar progress={0.8} />
              <View style={styles.goalProgressTextsHolder}>
                <Text style={styles.goalProgressBarText}>$0</Text>
                <Text style={styles.goalProgressBarText}>$5,000</Text>
              </View>
            </View>
          </Card>
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
              {this.renderGoals()}
              <TouchableOpacity activeOpacity={0.6} style={styles.addGoalButton} onPress={() => navigation.navigate("SavingGoals", { actionType: "Add" })}>
                <LinearGradient colors={colors.blueGreenGradient.colors} style={styles.addGoalGradient}>
                  <Text style={styles.addGoalButtonText}>+ ADD GOAL</Text>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Image>
      </View>
    );
  }
}

export default Home;
