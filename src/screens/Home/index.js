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

import ModalTemplate from "../../components/ModalTemplate";
import ProgressBar from "../../components/ProgressBar";

import { getDollarString, getSplitDollarStrings } from "../../globals/helpers";
import GOAL_CATEGORIES from "../../globals/goalCategories";

import { getGoals } from "../SavingGoals/state/actions";

import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundAccount.png");
const menuIcon = require("../../../assets/Icons/Menu/menu.png");
const logo = require("../../../assets/Logo/white.png");
const employerBonusIcon = require("../../../assets/Icons/Notifications/EmployerBonus/bitmap.png");
const savingPreferencesIcon = require("../../../assets/Icons/Notifications/SavingPreferences/bitmap.png");
const infoIcon = require("../../../assets/Icons/Info/information.png");


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

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRainyDayInfoModal: false
    };
  }

  componentWillMount()  {
    const goals = this.props.goalsReducer.goals;
    if (!goals || goals.length === 0) {
      this.props.getGoals();
    }
  }

  notificationClicked(notificationType) {
    switch (notificationType) {
      case "SavingPreferences":
        this.props.navigation.navigate("SavingPreferences");
        break;
      case "EmployerBonus":
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
    return NOTIFICATION_TYPES.map(({ type, title, description, icon }) => {
      return (
        <TouchableOpacity
          key={type} activeOpacity={0.6} style={styles.notificationHolder}
          onPress={() => this.notificationClicked(type)}
        >
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
    return this.props.goalsReducer.goals.map((goal, index) => {
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
                <TouchableOpacity activeOpacity={0.6} style={styles.infoIconButton} onPress={() => this.setState({showRainyDayInfoModal: true})}>
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
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={styles.background}>
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("DrawerOpen")} style={styles.headerMenuButton}>
              <Image source={menuIcon} />
            </TouchableOpacity>
            <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.subHeader}>
            <Text style={styles.balanceLabelText}>THRIVE SAVINGS BALANCE</Text>
            <View style={styles.balanceTextHolder}>
              <Text style={styles.balanceMainText}>{balanceBD}</Text>
              <Text style={styles.balanceRemainderText}>{balanceAD}</Text>
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
    goalsReducer: state.goalsReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getGoals: (payload = {}) => dispatch(getGoals(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
