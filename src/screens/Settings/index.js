import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Constants } from "expo";
import { Content } from "native-base";
import { connect } from "react-redux";

import Header from "../../components/Header";
import addStatusBar from "../../components/StatusBar";

import WorkType from "../SavingPreferences/pages/WorkType";
import SavingType from "../SavingPreferences/pages/SavingType";
import SavingDetails from "../SavingPreferences/pages/SavingDetails";

import {
  setWorkType,
  setSavingType,
  setSavingDetails
} from "../SavingPreferences/state/actions";
import { LOADING_STATES } from "../SavingPreferences/state/constants";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";

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
      this.props.navigation.openDrawer();
    } else {
      this.setState({ activePage: "settings" });
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
      case "savingDetails":
        this.props.setSavingDetails(payload);
        break;
      default:
        break;
    }

    this.setState({ activePage: "settings" });
  }

  renderContent() {
    const { savingType } = this.props.userData.savingPreferences;

    switch (this.state.activePage) {
      case "settings":
        return this.renderHome();
      case "workType":
        return <WorkType showDots={false} save={this.save} />;
      case "savingType":
        return <SavingType showDots={false} save={this.save} />;
      case "savingDetails":
        return <SavingDetails savingType={savingType} showDots={false} save={this.save} />;
      case "linkedBank":
        return this.renderLinkedBank();
      case "legal":
        return this.renderLegal();
      default:
        return this.renderHome();
    }
  }

  renderLegal() {
    return (
      <View>
        <View style={[styles.contentBox, styles.legalBox, globalStyles.shadow]}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("TOS")}
            activeOpacity={0.6}
            style={styles.contentRow}
          >
            <Text style={[styles.regularText, styles.blueText]}>
              Terms of Service
            </Text>
            <Text style={[styles.regularText, styles.blueText]}>></Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PP")}
            activeOpacity={0.6}
            style={styles.contentRow}
          >
            <Text style={[styles.regularText, styles.blueText]}>
              Privacy Policy
            </Text>
            <Text style={[styles.regularText, styles.blueText]}>></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderHome() {
    const { loadingState } = this.props.savingPreferencesReducer;
    const { workType, savingType } = this.props.userData.savingPreferences;

    return (
      <View>
        <View style={[styles.contentBox, globalStyles.shadow]}>
          <Text style={styles.contentTitle}>SAVING</Text>
          <TouchableOpacity
            onPress={() => this.setState({ activePage: "workType" })}
            activeOpacity={0.6}
            style={styles.contentRow}
          >
            <Text style={styles.regularText}>Primary Work Type</Text>
            <Text style={[styles.regularText, styles.blueText]}>
              {loadingState === LOADING_STATES.SETTING_WORK_TYPE
                ? "Loading ..."
                : workType ? workType : "Full-time"}
            </Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            onPress={() => this.setState({ activePage: "savingType" })}
            activeOpacity={0.6}
            style={styles.contentRow}
          >
            <Text style={styles.regularText}>Saving Plan</Text>
            <Text style={[styles.regularText, styles.blueText]}>
              {loadingState === LOADING_STATES.SETTING_SAVING_TYPE
                ? "Loading ..."
                : savingType ? savingType : "Thrive Flex"}
            </Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            onPress={() => this.setState({ activePage: "savingDetails" })}
            activeOpacity={0.6}
            style={styles.contentRow}
          >
            <Text style={styles.regularText}>Saving Preferences</Text>
            <Text
              style={[
                styles.regularText, styles.blueText
              ]}
            >
              {loadingState === LOADING_STATES.SETTING_SAVING_DETAILS ? "Loading ..." : "Change Preferences"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.contentBox, globalStyles.shadow]}>
          <Text style={styles.contentTitle}>GENERAL</Text>
          <TouchableOpacity
            onPress={() => this.setState({ activePage: "legal" })}
            activeOpacity={0.6}
            style={styles.contentRow}
          >
            <Text style={styles.regularText}>Legal & Privacy</Text>
            <Text style={[styles.regularText, styles.blueText]}>></Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <View style={styles.contentRow}>
            <Text style={styles.regularText}>App Version</Text>
            <Text style={[styles.regularText, styles.blueText]}>
              {"v" + Constants.manifest.version}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const activePage = this.state.activePage;

    return (
      <ImageBackground source={bg} style={styles.background}>
        <Header
          navigation={this.props.navigation}
          button={PAGE_TYPES[activePage].headerButton}
          onButtonPress={this.headerIconClicked}
          content="text"
          text={PAGE_TYPES[activePage].headerTitle}
        />
        <Content
          showsVerticalScrollIndicator={false}
          style={styles.contentContainer}
        >
          {this.renderContent()}
        </Content>
      </ImageBackground>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(Settings)
);
