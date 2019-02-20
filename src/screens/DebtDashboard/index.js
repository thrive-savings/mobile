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
import { Svg } from "expo";

import SpecialButton from "../../components/SpecialButton";
import Header from "../../components/Header";
import addStatusBar from "../../components/StatusBar";

import { fetchDebts, saveDebtDetails } from "./state/actions";

import { LINK_STEPS } from "../IntegrateBank/state/constants";

import { getDollarString, getSplitDollarStrings } from "../../globals/helpers";
import GOAL_CATEGORIES from "../../globals/goalCategories";

import DebtDetails from "./pages/DebtDetails";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundAccount.png");
const budgetIcon = require("../../../assets/Icons/Budget/budget.png");

class DebtDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { debt: undefined };

    this.onBackPress = this.onBackPress.bind(this);
  }

  componentDidMount() {
    this.props.fetchDebts();
  }

  onBackPress() {
    this.setState({ debt: undefined });
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

  renderDebts(debts) {
    return debts.map((debt, index) => {
      const { amountPulled, amountToPay, status, account: { name, balance } = {} } = debt;
      const randomGoalLogo =
        GOAL_CATEGORIES[Object.keys(GOAL_CATEGORIES)[index]].icon;

      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.6}
          style={styles.ccHolder}
          onPress={() => this.setState({ debt })}
        >
          <Card style={styles.ccCard}>
            <View style={styles.ccRow}>
              <Image source={randomGoalLogo} />
              <View style={styles.ccTextsContainer}>
                <Text style={styles.ccBlackText}>
                  {name}
                </Text>
                <Text style={[styles.ccGreyText, styles.textsPadder]}>Next Payment: ---</Text>
                <Text style={styles.ccGreyText}>Payment: <Text style={styles.ccDarkestGreyText}>{getDollarString(amountPulled)} / {getDollarString(amountToPay)}</Text></Text>
                <Text style={[styles.ccGreyText, styles.textsPadder]}>Balance: <Text style={styles.ccDarkestGreyText}>{getDollarString(Math.abs(balance))}</Text></Text>
                <View style={styles.ccStatusHolder}>
                  <Svg width={10} height={10}>
                    <Svg.Circle cx="4" cy="4" r={3} stokeWidth={1} stroke={colors.error} fill={status === "off" ? colors.error : colors.green} />
                  </Svg>
                  <Text style={[styles.ccGreyText, styles.ccStatusText]}>Auto Payments {status === "off" ? "OFF" : "ON"}</Text>
                </View>
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

  renderList() {
    const { navigation, debtReducer: { debts = [] } } = this.props;

    let totalDebt = 0;
    debts.map(({ account: { balance = 0 } = {} }) => {
      totalDebt += -1 * balance;
    });

    const { beforeDot: balanceBD, afterDot: balanceAD } = getSplitDollarStrings(
      totalDebt
    );

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header navigation={navigation} />
        <View style={styles.subHeader}>
          <Text style={styles.balanceLabelText}>TOTAL DEBT</Text>
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
            {debts.length > 0
              ? this.renderDebts(debts)
              : this.renderEmpty()}
            <SpecialButton
              style={styles.addCcButton}
              text="+ ADD CREDIT CARD"
              onClick={() =>
                navigation.navigate("IntegrateBank", {
                  step: LINK_STEPS.AUTH,
                  comingFromDebts: true
                })}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }

  render() {
    const { debt } = this.state;

    return debt && typeof debt === "object" ? <DebtDetails debt={debt} onBackPress={this.onBackPress} saveDebtDetails={this.props.saveDebtDetails} /> : this.renderList();
  }
}

function mapStateToProps(state) {
  return {
    userData: state.authReducer.data.authorized,
    debtReducer: state.debtReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDebts: (payload = {}) => dispatch(fetchDebts(payload)),
    saveDebtDetails: (payload = {}) => dispatch(saveDebtDetails(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(DebtDashboard)
);
