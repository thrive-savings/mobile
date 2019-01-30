import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import { Card } from "native-base";
import { connect } from "react-redux";

import SpecialButton from "../../components/SpecialButton";
import Header from "../../components/Header";
import ModalTemplate from "../../components/ModalTemplate";
import addStatusBar from "../../components/StatusBar";

import { LINK_STEPS } from "../IntegrateBank/state/constants";

import { getSplitDollarStrings } from "../../globals/helpers";
import GOAL_CATEGORIES from "../../globals/goalCategories";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";

const bg = require("../../../assets/Backgrounds/BackgroundAccount.png");
const filledStarIcon = require("../../../assets/Icons/Star/Blue/star.png");
const emptyStarIcon = require("../../../assets/Icons/Star/Empty/star.png");
const budgetIcon = require("../../../assets/Icons/Budget/budget.png");

class SavingsDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfoModal: false
    };
  }

  getCCAccounts(connections) {
    const ccAccounts = [];
    connections.forEach(
      ({
        accounts = [],
        institution: { logoFolder: bankLogo = "ThriveBank" } = {}
      }) => {
        accounts.forEach(({ nickname, type }) => {
          if (type === "Credit Card") {
            ccAccounts.push({ logo: bankLogo, name: nickname, type });
          }
        });
      }
    );
    return ccAccounts;
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

  renderCCBoxes(ccAccounts) {
    return ccAccounts.map((account, index) => {
      const { name, type } = account;
      const randomGoalLogo =
        GOAL_CATEGORIES[Object.keys(GOAL_CATEGORIES)[index]].icon;

      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.6}
          style={styles.ccHolder}
          onPress={() => console.log("CC box click")}
        >
          <Card style={styles.ccCard}>
            <View style={styles.ccRow}>
              <Image source={randomGoalLogo} />
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.infoIconButton}
                onPress={() => this.setState({ showInfoModal: true })}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              >
                <Image
                  source={
                    type === "Credit Card" ? filledStarIcon : emptyStarIcon
                  }
                />
              </TouchableOpacity>
              <View style={styles.ccTextsContainer}>
                <Text style={styles.ccLabelText}>{`CC ${index + 1}`}</Text>
                <Text style={styles.ccNameText}>
                  {name}
                </Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      );
    });
  }

  renderEmpty() {
    return (
      <React.Fragment>
        <Image source={budgetIcon} style={styles.emptyStateIcon} />
        <Text style={[styles.emptyStateText, styles.bottomPadder]}>
          You haven't connected a credit card yet.
        </Text>
        <Text style={[styles.emptyStateText, styles.bottomPadder]}>
          Connect one now and let Thrive do the rest.
        </Text>
      </React.Fragment>
    );
  }

  render() {
    const { navigation, userData: { connections = [], balance } } = this.props;
    const ccAccounts = this.getCCAccounts(connections);

    const { beforeDot: balanceBD, afterDot: balanceAD } = getSplitDollarStrings(
      balance
    );

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header navigation={navigation} />
        <View style={styles.subHeader}>
          <Text style={styles.balanceLabelText}>THRIVE DEBT BALANCE</Text>
          <View style={styles.balanceTextHolder}>
            <Text style={styles.balanceMainText}>
              {balanceBD}
            </Text>
            <Text style={styles.balanceRemainderText}>
              {balanceAD}
            </Text>
          </View>
          <View style={[styles.subHeaderLabel, globalStyles.shadow]}>
            <Text style={styles.subHeaderText}>CREDIT CARDS</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            {ccAccounts && ccAccounts.length > 0
              ? this.renderCCBoxes(ccAccounts)
              : this.renderEmpty()}
            <SpecialButton
              style={styles.addCcButton}
              text="+ ADD CREDIT CARD"
              onClick={() =>
                navigation.navigate("IntegrateBank", {
                  step: LINK_STEPS.INFO,
                  newConnection: true
                })}
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
    userData: state.authReducer.data.authorized
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(SavingsDashboard)
);
