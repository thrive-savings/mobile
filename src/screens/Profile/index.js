import React, { Component } from "react";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { Svg } from "expo";
import {
  View,
  Text,
  Card
} from "native-base";

import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const backIcon = require("../../../assets/Icons/Back/back.png");


class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <Image source={bg} style={styles.background}>
          <View style={styles.header}>
            <Image source={backIcon} style={styles.backIcon} />
            <Text style={styles.titleText}>MY PROFILE</Text>
          </View>
          <View style={{flex: 1}}>
            <View style={styles.contentContainer}>
              <View style={styles.photoContainer}>
                <TouchableOpacity activeOpacity={0.6} style={styles.photoHolder}>
                  <Svg width={100} height={100}>
                    <Svg.Circle cx="50" cy="50" r={49} stokeWidth={1} stroke={colors.darkestGrey} fill={colors.mediumGrey} />
                  </Svg>
                </TouchableOpacity>
                <Text style={styles.nameText}>NAIB BAGHIROV</Text>
              </View>

              <View style={styles.separator} />

              <View style={styles.otherContainer}>
                <Text style={[styles.labelText, styles.commonText]}>Phone Number:</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={[styles.buttonText, styles.commonText]}>(647) 676 3323</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.separator} />

              <View style={styles.otherContainer}>
                <Text style={[styles.labelText, styles.commonText]}>Email:</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={[styles.buttonText, styles.commonText]}>naib.baghirov@gmail.com</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.separator} />

              <View style={styles.otherContainer}>
                <Text style={[styles.labelText, styles.commonText]}>Password:</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={[styles.buttonText, styles.commonText]}>Change Password</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

export default Profile;
