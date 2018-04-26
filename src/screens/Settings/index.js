import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";

import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const menuIcon = require("../../../assets/Icons/Menu/menu.png");

class Settings extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <Image
          source={bg}
          style={styles.background}
        >
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("DrawerOpen")} style={styles.headerIcon}>
              <Image source={menuIcon} style={styles.headerIconImage}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>SETTINGS</Text>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.contentBox}>
              <Text style={styles.contentTitle}>SAVING</Text>
              <TouchableOpacity activeOpacity={0.6} style={styles.contentRow}>
                <Text style={styles.regularText}>Primary Work Type</Text>
                <Text style={[styles.regularText, styles.blueText]}>Full-time</Text>
              </TouchableOpacity>
              <View style={styles.separator} />
              <TouchableOpacity activeOpacity={0.6} style={styles.contentRow}>
                <Text style={styles.regularText}>Saving Plan</Text>
                <Text style={[styles.regularText, styles.blueText]}>Thrive Flex</Text>
              </TouchableOpacity>
              <View style={styles.separator} />
              <TouchableOpacity activeOpacity={0.6} style={styles.contentRow}>
                <Text style={styles.regularText}>Saving Preferences</Text>
                <Text style={[styles.regularText, styles.blueText]}>Change Preferences</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.contentBox}>
              <Text style={styles.contentTitle}>GENERAL</Text>
              <TouchableOpacity activeOpacity={0.6} style={styles.contentRow}>
                <Text style={styles.regularText}>Legal & Privacy</Text>
                <Text style={[styles.regularText, styles.blueText]}>></Text>
              </TouchableOpacity>
              <View style={styles.separator} />
              <TouchableOpacity activeOpacity={0.6} style={styles.contentRow}>
                <Text style={styles.regularText}>Linked Bank Account</Text>
                <Text style={[styles.regularText, styles.blueText]}>XXX-1234</Text>
              </TouchableOpacity>
              <View style={styles.separator} />
              <View style={styles.contentRow}>
                <Text style={styles.regularText}>App Version</Text>
                <Text style={[styles.regularText, styles.blueText]}>v0.0</Text>
              </View>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

export default Settings;
