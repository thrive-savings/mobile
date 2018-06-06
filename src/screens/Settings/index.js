import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Constants } from "expo";
import { Content } from "native-base";
import { connect } from "react-redux";

import Communications from "react-native-communications";

import Header from "../../components/Header";
import SpecialButton from "../../components/SpecialButton";

import WorkType from "../SavingPreferences/pages/WorkType";
import SavingType from "../SavingPreferences/pages/SavingType";
import FixedPlan from "../SavingPreferences/pages/FixedPlan";
import { setWorkType, setSavingType, setSavingDetails } from "../SavingPreferences/state/actions";

import BANK_ICONS from "../IntegrateBank/bankIcons";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

import PAGE_TYPES from "./constants";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: "settings"
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
        return <WorkType showDots={false} save={this.save} />;
      case "savingType":
        return <SavingType showDots={false} save={this.save} />;
      case "fixedPlan":
        return <FixedPlan showDots={false} save={this.save} />;
      case "linkedBank":
        return this.renderLinkedBank();
      case "legal":
        return this.renderLegal();
      default:
        return this.renderHome();
    }
  }

  renderLinkedBank() {
    const account = this.props.userData.account;
    let bank = "TD";
    let title = "No Bank Linked";
    if (account) {
      bank = account.bank;
      title = account.title;
    }

    return (
      <View>
        <View style={[styles.contentBox, styles.linkedBankBox, globalStyles.shadow]}>
          <Image source={BANK_ICONS[bank]} />
          <Text style={styles.linkedBankLabelText}>{title}</Text>
          <Text style={styles.linkedBankDescText}>To change or unlink your bank account, send us a request below and we’ll get in touch with you shortly.</Text>
          <SpecialButton text={"CONTACT SUPPORT"} onClick={() => Communications.email(["help@thrivesavings.com"],null,null,"Change or Unlink Bank Account",null)}/>
        </View>
      </View>
    );
  }

  renderLegal() {
    return (
      <View>
        <View style={[styles.contentBox, styles.legalBox, globalStyles.shadow]}>
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
        workType: workTypeSaved,
        savingType: savingTypeSaved
      }
    } = this.props.savingPreferencesReducer;

    let workType = workTypeSaved, savingType = savingTypeSaved;
    const userPrefrencesData = this.props.userData.savingPreferences;
    if (!workType) {
      workType = userPrefrencesData.workType;
    }
    if (!savingType) {
      savingType = userPrefrencesData.savingType;
    }

    const isSavingDetailsDisabled = savingType === "Thrive Flex" || !savingType;

    const account = this.props.userData.account;
    let title = "No Bank Linked";
    if (account) {
      title = account.title;
    }

    return (
      <View>
        <View style={[styles.contentBox, globalStyles.shadow]}>
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

        <View style={[styles.contentBox, globalStyles.shadow]}>
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
            <Text style={[styles.regularText, styles.blueText]}>{"v" + Constants.manifest.version}</Text>
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
          <Header
            navigation={this.props.navigation}
            button={PAGE_TYPES[activePage].headerButton}
            onButtonPress={this.headerIconClicked}
            content="text" text={PAGE_TYPES[activePage].headerTitle}
          />
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
    userData: state.authReducer.data.authorized,
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
