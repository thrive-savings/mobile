import React, { Component } from "react";
import {
  ScrollView,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Share,
  Clipboard
} from "react-native";
import { Toast } from "native-base";
import { connect } from "react-redux";

import { DEEP_LINK } from "../../../config";
import amplitude from "../../globals/amplitude";

import Header from "../../components/Header";
import addStatusBar from "../../components/StatusBar";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";

const referralIcon = require("../../../assets/Icons/Referral/like.png");
const copyIcon = require("../../../assets/Icons/Copy/copy-content.png");
const shareIcon = require("../../../assets/Icons/Share/share.png");
const bg = require("../../../assets/Backgrounds/BackgroundCover.png");

class Referral extends Component {
  componentDidMount() {
    amplitude.track(amplitude.events.REFERRAL_PAGE_VIEW);
  }

  getMessage() {
    return `Hey! Get $5 on me - I've been using Thrive to save and thought you'd love it. Use my referral code when you sign up to get $5: ${this
      .props.userData.referralCode}\n\n${DEEP_LINK}`;
  }

  async onShare() {
    try {
      const result = await Share.share({
        message: this.getMessage()
      });

      amplitude.track(amplitude.events.REFERRAL_CODE_SHARED, result);
    } catch (e) {
      amplitude.track(amplitude.events.REFERRAL_CODE_SHARE_FAILED, {
        error: e
      });
    }
  }

  async onCopy() {
    try {
      await Clipboard.setString(this.getMessage());
      amplitude.track(amplitude.events.REFERRAL_CODE_COPIED);
      Toast.show({
        text: "COPIED",
        duration: 2000,
        position: "bottom",
        type: "info",
        style: styles.toastStyle,
        textStyle: styles.whiteText
      });
    } catch (e) {
      amplitude.track(amplitude.events.REFERRAL_CODE_COPY_FAILED, {
        error: e
      });
    }
  }

  render() {
    const { referralCode } = this.props.userData;

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header navigation={this.props.navigation} content="text" />
        <ScrollView
          style={globalStyles.container}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Image source={referralIcon} />
          <Text style={[styles.whiteText, styles.labelText]}>
            Share the love, get $5
          </Text>
          <Text style={styles.whiteText}>
            Earn $5 when friends join and save with your invite link.
          </Text>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={this.onShare.bind(this)}
            style={styles.shareButton}
          >
            <Image source={shareIcon} />
            <Text
              style={[styles.whiteText, styles.buttonText, styles.boldText]}
            >
              Share with friends
            </Text>
          </TouchableOpacity>

          <Text style={[styles.whiteText, styles.boldText]}>
            Copy your personal code below:
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={this.onCopy.bind(this)}
            style={styles.copyButton}
          >
            <Image source={copyIcon} />
            <Text
              style={[styles.whiteText, styles.buttonText, styles.boldText]}
            >
              {referralCode}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.authReducer.data.authorized
  };
}

export default connect(mapStateToProps)(addStatusBar(Referral));
