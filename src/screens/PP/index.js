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

class PP extends Component {
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
            <Text style={styles.headerText}>PRIVACY POLICY</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
            <Text style={[styles.regularText, styles.boldText]}>Last Updated: May 01, 2018</Text>
            <Text style={[styles.regularText]}>Thrive Savings Inc. ("Thrive," "we," "us," and "our") is committed to protecting and respecting your privacy. </Text>
            <Text style={[styles.regularText]}>The purpose of Thrive is to try to help you save money with limited effort. This privacy policy explains what personal information we collect and why, with whom we share this information, and how we store and protect it. This Privacy Policy applies to users (individually referred to as "you") of our websites, applications, and other online services to which this Privacy Policy is posted (collectively, our "Services"). This Privacy Policy is part of our Terms of Service.</Text>
            <Text style={[styles.regularText]}>By accessing or using our Services, you agree to this Privacy Policy and our Terms of Service. The provisions contained in this Privacy Policy supersede all previous notices and statements regarding our privacy practices with respect to our Services.</Text>
            <Text style={[styles.regularText, styles.boldText]}>IF YOU DO NOT AGREE TO EVERY PROVISION OF THIS PRIVACY POLICY AND OUR TERMS OF SERVICE, YOU MAY NOT ACCESS OR USE OUR SERVICES.</Text>

            <Text style={[styles.regularText, styles.blueText]}>Application of this Privacy Policy</Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

export default PP;
