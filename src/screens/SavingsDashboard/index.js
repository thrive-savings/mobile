import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Animated
} from "react-native";
import { Card } from "native-base";
import { LinearGradient } from "expo";
import { connect } from "react-redux";

import Communications from "react-native-communications";
import { THRIVE_BOT_NUMBER } from "../../globals/constants";

import amplitude from "../../globals/amplitude";

import SpecialButton from "../../components/SpecialButton";
import Header from "../../components/Header";
import ModalTemplate from "../../components/ModalTemplate";
import ProgressBar from "../../components/ProgressBar";
import addStatusBar from "../../components/StatusBar";

import { getDollarString, getSplitDollarStrings } from "../../globals/helpers";
import GOAL_CATEGORIES from "../../globals/goalCategories";

import { bonusNotificationSeen } from "../Login/state/actions";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

import NOTIFICATION_TYPES from "./constants";

const bg = require("../../../assets/Backgrounds/BackgroundAccount.png");
const filledStarIcon = require("../../../assets/Icons/Star/Blue/star.png");
const emptyStarIcon = require("../../../assets/Icons/Star/Empty/star.png");

class SavingsDashboard extends Component {
  constructor(props) {
    super(props);

    this.cycleAnimation = this.cycleAnimation.bind(this);

    this.state = {
      showInfoModal: false,
      notifFadeAnim: new Animated.Value(1)
    };
  }

  cycleAnimation() {
    Animated.sequence([
      Animated.timing(this.state.notifFadeAnim, {
        toValue: 0.6,
        duration: 1000
      }),
      Animated.timing(this.state.notifFadeAnim, {
        toValue: 1,
        duration: 1000
      })
    ]).start(() => {
      this.cycleAnimation();
    });
  }

  componentDidMount() {
    this.cycleAnimation();
  }

  notificationClicked(notificationType) {
    switch (notificationType) {
      case "SavingPreferences":
        amplitude.track(
          amplitude.events.SAVING_PREFERENCES_NOTIFICATION_CLICKED
        );
        this.props.navigation.navigate("SavingPreferences");
        break;
      case "EmployerBonus":
        this.props.bonusNotificationSeen();
        break;
      default:
        break;
    }
  }

  saveMore() {
    amplitude.track(amplitude.events.CLICKED_SAVE_MORE);
    Communications.textWithoutEncoding(THRIVE_BOT_NUMBER, "Save 20.00");
  }

  getInfoModalContent() {
    return (
      <View>
        <Text style={[styles.infoContentText, styles.bottomPadder]}>
          Prioritizing a goal increases the amount Thrive will set aside towards
          that specific goal.
        </Text>
        <Text style={styles.infoContentText}>
          You can prioritize a goal by editing your goal.
        </Text>
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

    let notifPreferencesSet = false,
      notifBonus = 0;
    if (notifications) {
      notifPreferencesSet = notifications.savingPreferencesSet;
      notifBonus = notifications.bonus;
    }

    return NOTIFICATION_TYPES.map(({ type, title, getDescription, icon }) => {
      if (type === "EmployerBonus" && notifBonus <= 0) {
        return;
      } else if (
        type === "SavingPreferences" &&
        (preferencesInitialSetDone || notifPreferencesSet)
      ) {
        return;
      }

      const description =
        type === "EmployerBonus"
          ? isSeeingBonus
            ? "Dismissing ... "
            : getDescription(getDollarString(notifBonus))
          : isSettingPreferencesDone ? "Setting up ..." : getDescription();

      return (
        <Animated.View
          key={type}
          style={{
            alignSelf: "stretch",
            opacity: this.state.notifFadeAnim
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.notificationHolder}
            onPress={() => this.notificationClicked(type)}
          >
            <LinearGradient
              colors={colors.blueGreenGradient.colors}
              style={styles.notificationContent}
            >
              <Image source={icon} />
              <View style={styles.notificationTextsContainer}>
                <Text style={styles.notificationTitle}>
                  {title}
                </Text>
                <Text style={styles.notificationDescription}>
                  {isSeeingBonus ? "Dismissing ..." : description}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      );
    });
  }

  renderGoals() {
    return this.props.userData.goals.map((goal, index) => {
      const { category, name, amount, progress, boosted } = goal;
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.6}
          style={styles.goalHolder}
          onPress={() =>
            this.props.navigation.navigate("SavingGoals", {
              actionType: "Detail",
              data: goal
            })}
        >
          <Card style={styles.goalCard}>
            <View style={styles.goalRow}>
              <Image source={GOAL_CATEGORIES[category].icon} />
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.infoIconButton}
                onPress={() => this.setState({ showInfoModal: true })}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              >
                <Image source={boosted ? filledStarIcon : emptyStarIcon} />
              </TouchableOpacity>
              <View style={styles.goalTextsContainer}>
                <Text style={styles.goalLabelText}>{`GOAL ${index + 1}`}</Text>
                <Text style={styles.goalNameText}>
                  {name}
                </Text>
                <Text style={styles.goalAmountText}>
                  {getDollarString(progress)}
                </Text>
              </View>
            </View>
            <View style={styles.goalProgressContainer}>
              <ProgressBar progress={progress / amount} />
              <View style={styles.goalProgressTextsHolder}>
                <Text style={styles.goalProgressBarText}>$0</Text>
                <Text style={styles.goalProgressBarText}>
                  {getDollarString(amount, true)}
                </Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const navigation = this.props.navigation;
    const { beforeDot: balanceBD, afterDot: balanceAD } = getSplitDollarStrings(
      this.props.userData.balance
    );
    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header navigation={navigation} />
        <View style={styles.subHeader}>
          <Text style={styles.balanceLabelText}>THRIVE SAVINGS BALANCE</Text>
          <View style={styles.balanceTextHolder}>
            <Text style={styles.balanceMainText}>
              {balanceBD}
            </Text>
            <Text style={styles.balanceRemainderText}>
              {balanceAD}
            </Text>
            <TouchableOpacity
              style={[styles.saveMoreContainer, globalStyles.shadow]}
              activeOpacity={0.6}
              onPress={() => this.saveMore()}
            >
              <Text style={styles.saveMoreText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.subHeaderLabel, globalStyles.shadow]}>
            <Text style={styles.subHeaderText}>MY SAVINGS GOALS</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            {this.renderNotifications()}
            {this.renderGoals()}
            <SpecialButton
              style={styles.addGoalButton}
              text="+ ADD GOAL"
              onClick={() =>
                navigation.navigate("SavingGoals", { actionType: "Add" })}
            />
          </ScrollView>
        </View>
        <ModalTemplate
          show={this.state.showInfoModal}
          buttonVisible={false}
          content={this.getInfoModalContent()}
          onClose={() => this.setState({ showInfoModal: false })}
        />
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.authReducer.data.authorized,
    isSeeingBonus: state.authReducer.isSeeingBonus,
    isSettingPreferencesDone: state.savingPreferencesReducer.isSettingDone,
    preferencesInitialSetDone: state.savingPreferencesReducer.initialSetDone
  };
}

function mapDispatchToProps(dispatch) {
  return {
    bonusNotificationSeen: (payload = {}) =>
      dispatch(bonusNotificationSeen(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(addStatusBar(SavingsDashboard));
