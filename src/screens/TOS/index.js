import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  StatusBar
} from "react-native";

import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const backIcon = require("../../../assets/Icons/Back/back.png");

class TOS extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground
          source={bg}
          style={styles.background}
        >
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.navigation.goBack()} style={styles.headerIcon}>
              <Image source={backIcon} style={styles.headerIconImage}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>TERMS OF SERVICE</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
            <Text style={[styles.regularText, styles.boldText]}>Test text</Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default TOS;
