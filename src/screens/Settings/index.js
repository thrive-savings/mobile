import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Content } from "native-base";
import { connect } from "react-redux";

import Communications from "react-native-communications";

import SpecialButton from "../../components/SpecialButton";
import getAuthorized from "../../globals/getAuthorized";

import WorkType from "../SavingPreferences/pages/WorkType";
import SavingType from "../SavingPreferences/pages/SavingType";
import FixedPlan from "../SavingPreferences/pages/FixedPlan";
import { setWorkType, setSavingType, setSavingDetails } from "../SavingPreferences/state/actions";

import BANK_ICONS from "../IntegrateBank/bankIcons";

import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const menuIcon = require("../../../assets/Icons/Menu/menu.png");
const backIcon = require("../../../assets/Icons/Back/back.png");

const PAGE_TYPES = {
  settings: {
    headerTitle: "SETTINGS",
    headerIcon: menuIcon
  },
  workType: {
    headerTitle: "UPDATE SETTINGS",
    headerIcon: backIcon
  },
  savingType: {
    headerTitle: "UPDATE SETTINGS",
    headerIcon: backIcon
  },
  fixedPlan: {
    headerTitle: "UPDATE SETTINGS",
    headerIcon: backIcon
  },
  linkedBank: {
    headerTitle: "LINKED BANK ACCOUNT",
    headerIcon: backIcon
  },
  legal: {
    headerTitle: "LEGAL & PRIVACY",
    headerIcon: backIcon
  }
};

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: "legal"
    };

    this.headerIconClicked = this.headerIconClicked.bind(this);
    this.save = this.save.bind(this);
  }

  headerIconClicked() {
    if (this.state.activePage === "settings") {
      this.props.navigation.navigate("DrawerOpen");
    } else {
      this.setState({activePage: "settings"});
    }
  }

  save(payload = {}) {
    switch (this.state.activePage) {
      case "workType":
        this.props.setWorkType(payload);
        break;
      case "savingType":
        this.props.setSavingType(payload);
        break;
      case "fixedPlan":
        this.props.setSavingDetails(payload);
        break;
      default:
        break;
    }

    this.setState({activePage: "settings"});
  }

  renderContent() {
    switch (this.state.activePage) {
      case "settings":
        return this.renderHome();
      case "workType":
        return <WorkType showDots={false} reducer={this.props.savingPreferencesReducer} save={this.save} />;
      case "savingType":
        return <SavingType showDots={false} reducer={this.props.savingPreferencesReducer} save={this.save} />;
      case "fixedPlan":
        return <FixedPlan showDots={false} reducer={this.props.savingPreferencesReducer} save={this.save} />;
      case "linkedBank":
        return this.renderLinkedBank();
      case "legal":
        return this.renderLegal();
      default:
        return this.renderHome();
    }
  }

  renderLinkedBank() {
    const account = getAuthorized(this.props.authReducer).account;
    let bank = "TD";
    let title = "No Bank Linked";
    if (account) {
      bank = account.bank;
      title = account.title;
    }

    return (
      <View>
        <View style={[styles.contentBox, styles.linkedBankBox]}>
          <Image source={BANK_ICONS[bank]} />
          <Text style={styles.linkedBankLabelText}>{title}</Text>
          <Text style={styles.linkedBankDescText}>To change or unlink your bank account, send us a request below and we’ll get in touch with you shortly.</Text>
          <SpecialButton state={1} text={"CONTACT SUPPORT"} onClick={() => Communications.email(["help@thrivesavings.com", "naib.baghirov@gmail.com"],null,null,"Change or Unlink Bank Account",null)}/>
        </View>
      </View>
    );
  }

  renderLegal() {
    return (
      <View>
        <View style={[styles.contentBox, styles.legalBox]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("TOS")} activeOpacity={0.6} style={styles.contentRow}>
            <Text style={[styles.regularText, styles.blueText]}>Terms of Service</Text>
            <Text style={[styles.regularText, styles.blueText]}>></Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => this.props.navigation.navigate("PP")} activeOpacity={0.6} style={styles.contentRow}>
            <Text style={[styles.regularText, styles.blueText]}>Privacy Policy</Text>
            <Text style={[styles.regularText, styles.blueText]}>></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderHome() {
    const {
      isSettingWorkType, isSettingSavingType, isSettingSavingDetails,
      values: {
        workType, savingType
      }
    } = this.props.savingPreferencesReducer;

    const isSavingDetailsDisabled = savingType === "Thrive Flex" || !savingType;

    const account = getAuthorized(this.props.authReducer).account;
    let title = "No Bank Linked";
    if (account) {
      title = account.title;
    }

    return (
      <View>
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>SAVING</Text>
          <TouchableOpacity onPress={() => this.setState({activePage: "workType"})} activeOpacity={0.6} style={styles.contentRow}>
            <Text style={styles.regularText}>Primary Work Type</Text>
            <Text style={[styles.regularText, styles.blueText]}>
              {
                isSettingWorkType
                  ? "Loading ..."
                  : workType ? workType : "Full-time"
              }
            </Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => this.setState({activePage: "savingType"})} activeOpacity={0.6} style={styles.contentRow}>
            <Text style={styles.regularText}>Saving Plan</Text>
            <Text style={[styles.regularText, styles.blueText]}>
              {
                isSettingSavingType
                  ? "Loading ..."
                  : savingType ? savingType : "Thrive Flex"
              }
            </Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => !isSavingDetailsDisabled && this.setState({activePage: "fixedPlan"})} activeOpacity={isSavingDetailsDisabled ? 1 : 0.6} style={styles.contentRow}>
            <Text style={styles.regularText}>Saving Preferences</Text>
            <Text style={[styles.regularText, (isSavingDetailsDisabled ? styles.disabledText : styles.blueText)]}>
              {
                isSavingDetailsDisabled
                  ? "Unavailable for Flex"
                  : isSettingSavingDetails
                    ? "Loading ..."
                    : "Change Preferences"
              }
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>GENERAL</Text>
          <TouchableOpacity onPress={() => this.setState({activePage: "legal"})} activeOpacity={0.6} style={styles.contentRow}>
            <Text style={styles.regularText}>Legal & Privacy</Text>
            <Text style={[styles.regularText, styles.blueText]}>></Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => this.setState({activePage: "linkedBank"})} activeOpacity={0.6} style={styles.contentRow}>
            <Text style={styles.regularText}>Linked Bank Account</Text>
            <Text style={[styles.regularText, styles.blueText]}>{title}</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <View style={styles.contentRow}>
            <Text style={styles.regularText}>App Version</Text>
            <Text style={[styles.regularText, styles.blueText]}>v0.0</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const activePage = this.state.activePage;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground
          source={bg}
          style={styles.background}
        >
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.6} onPress={this.headerIconClicked} style={styles.headerIcon}>
              <Image source={PAGE_TYPES[activePage].headerIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{PAGE_TYPES[activePage].headerTitle}</Text>
          </View>

          <Content showsVerticalScrollIndicator={false} style={styles.contentContainer}>
            {this.renderContent()}
          </Content>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
    savingPreferencesReducer: state.savingPreferencesReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setWorkType: (payload = {}) => dispatch(setWorkType(payload)),
    setSavingType: (payload = {}) => dispatch(setSavingType(payload)),
    setSavingDetails: (payload = {}) => dispatch(setSavingDetails(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
