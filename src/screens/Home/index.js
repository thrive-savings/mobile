import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Card } from "native-base";
import { LinearGradient } from "expo";
import { connect } from "react-redux";

import Header from "../../components/Header";
import ModalTemplate from "../../components/ModalTemplate";
import ProgressBar from "../../components/ProgressBar";

import { getDollarString, getSplitDollarStrings } from "../../globals/helpers";
import GOAL_CATEGORIES from "../../globals/goalCategories";

import { bonusNotificationSeen } from "../Login/state/actions";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

import NOTIFICATION_TYPES from "./constants";

const bg = require("../../../assets/Backgrounds/BackgroundAccount.png");
const infoIcon = require("../../../assets/Icons/Info/information.png");

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRainyDayInfoModal: false
    };
  }

  notificationClicked(notificationType) {
    switch (notificationType) {
      case "SavingPreferences":
        this.props.navigation.navigate("SavingPreferences");
        break;
      case "EmployerBonus":
        this.props.bonusNotificationSeen();
        break;
      default:
        break;
    }
  }

  getInfoModalContent() {
    return (
      <View>
        <Text style={[styles.infoContentText, styles.bottomPadder]}>All Thrive users have a default Rainy Day Fund to help reduce their financial anxiety and jumpstart their saving goals!</Text>
        <Text style={styles.infoContentText}>Your Thrive Savings will automatically go here unless you create additional goals.</Text>
      </View>
    );
  }

  renderNotifications() {
    const {
      isSeeingBonus,
      isSettingPreferencesDone,
      preferencesInitialSetDone,
      userData: { notifications }
    } = this.props;

    let notifPreferencesSet = false, notifBonus = 0;
    if (notifications) {
      notifPreferencesSet = notifications.savingPreferencesSet;
      notifBonus = notifications.bonus;
    }

    return NOTIFICATION_TYPES.map(({ type, title, getDescription, icon }) => {
      if (type === "EmployerBonus" && notifBonus <= 0) { return; }
      else if (type === "SavingPreferences" && (preferencesInitialSetDone || notifPreferencesSet)) { return; }

      const description =
        type === "EmployerBonus"
          ? isSeeingBonus ? "Dismissing ... " : getDescription(getDollarString(notifBonus))
          : isSettingPreferencesDone ? "Setting up ..." : getDescription();

      return (
        <TouchableOpacity
          key={type} activeOpacity={0.6} style={styles.notificationHolder}
          onPress={() => this.notificationClicked(type)}
        >
          <LinearGradient colors={colors.blueGreenGradient.colors} style={styles.notificationContent}>
            <Image source={icon} />
            <View style={styles.notificationTextsContainer}>
              <Text style={styles.notificationTitle}>{title}</Text>
              <Text style={styles.notificationDescription}>{isSeeingBonus ? "Dismissing ..." : description}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      );
    });
  }

  renderGoals() {
    return this.props.userData.goals.map((goal, index) => {
      const { category, name, amount, savedAmount } = goal;
      return (
        <TouchableOpacity
          key={index} activeOpacity={0.6} style={styles.goalHolder}
          onPress={() => this.props.navigation.navigate("SavingGoals", { actionType: "Detail", data: goal })}
        >
          <Card style={styles.goalCard}>
            <View style={styles.goalRow}>
              <Image source={GOAL_CATEGORIES[category].icon} />
              {
                category === "RainyDay" &&
                <TouchableOpacity activeOpacity={0.6} style={styles.infoIconButton} onPress={() => this.setState({showRainyDayInfoModal: true})} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                  <Image source={infoIcon} />
                </TouchableOpacity>
              }
              <View style={styles.goalTextsContainer}>
                <Text style={styles.goalLabelText}>{`GOAL ${index + 1}`}</Text>
                <Text style={styles.goalNameText}>{name}</Text>
                <Text style={styles.goalAmountText}>{getDollarString(savedAmount)}</Text>
              </View>
            </View>
            <View style={styles.goalProgressContainer}>
              <ProgressBar progress={savedAmount / amount} />
              <View style={styles.goalProgressTextsHolder}>
                <Text style={styles.goalProgressBarText}>$0</Text>
                <Text style={styles.goalProgressBarText}>{getDollarString(amount)}</Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const navigation = this.props.navigation;
    const { beforeDot: balanceBD, afterDot: balanceAD } = getSplitDollarStrings(this.props.userData.balance);
    return (
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={globalStyles.background}>
          <Header navigation={navigation} />
          <View style={styles.subHeader}>
            <Text style={styles.balanceLabelText}>THRIVE SAVINGS BALANCE</Text>
            <View style={styles.balanceTextHolder}>
              <Text style={styles.balanceMainText}>{balanceBD}</Text>
              <Text style={styles.balanceRemainderText}>{balanceAD}</Text>
            </View>
            <View style={[styles.subHeaderLabel, globalStyles.shadow]}>
              <Text style={styles.subHeaderText}>MY SAVINGS GOALS</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
              {this.renderNotifications()}
              {this.renderGoals()}
              <TouchableOpacity activeOpacity={0.6} style={[styles.addGoalButton, globalStyles.shadow]} onPress={() => navigation.navigate("SavingGoals", { actionType: "Add" })}>
                <LinearGradient colors={colors.blueGreenGradient.colors} style={styles.addGoalGradient}>
                  <Text style={styles.addGoalButtonText}>+ ADD GOAL</Text>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <ModalTemplate
            show={this.state.showRainyDayInfoModal}
            buttonVisible={false}
            content={this.getInfoModalContent()}
            onClose={() => this.setState({showRainyDayInfoModal: false})}
          />
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    userData: state.authReducer.data.authorized,
    isSeeingBonus: state.authReducer.isSeeingBonus,
    isSettingPreferencesDone: state.savingPreferencesReducer.isSettingDone,
    preferencesInitialSetDone: state.savingPreferencesReducer.initialSetDone
  };
}

function mapDispatchToProps (dispatch) {
  return {
    bonusNotificationSeen: (payload = {}) => dispatch(bonusNotificationSeen(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
