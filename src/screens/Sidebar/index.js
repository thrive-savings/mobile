import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Svg } from "expo";
import { connect } from "react-redux";
import { View, Text } from "native-base";

import amplitude from "../../globals/amplitude";
import { clearStorage } from "../../globals/clearStorage";
import getAvatar from "../../globals/getAvatar";
import { getDollarString } from "../../globals/helpers";
import { companyLogoUrl } from "../../globals/logoUrls";

import styles from "./styles";
import colors from "../../theme/colors";

import { TOP_MENU_ITEMS, FOOTER_MENU_ITEMS } from "./constants";

const logo = require("../../../assets/ThumbnailLogo/Small/thumbnail.png");
const premiumIcon = require("../../../assets/Icons/Star/Blue/star.png");

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItemIndex: 0
    };
  }

  onProfileClick() {
    this.setState({ activeMenuItemIndex: -1 });
    this.props.navigation.navigate("Profile");
  }

  onTopMenuItemClick(index) {
    this.setState({ activeMenuItemIndex: index });
    this.props.navigation.navigate(TOP_MENU_ITEMS[index].screen);
  }

  renderTopMenuItems() {
    return TOP_MENU_ITEMS.map(({ displayName, icon, premium }, index) => {
      return (
        <TouchableOpacity
          key={`TopMenuItem_${index}`}
          activeOpacity={0.6}
          style={[
            styles.menuItem,
            styles.padder,
            index === this.state.activeMenuItemIndex && styles.menuItemActive
          ]}
          onPress={() => this.onTopMenuItemClick(index)}
        >
          <Image
            source={icon}
            style={
              index === this.state.activeMenuItemIndex &&
              styles.menuItemIconActive
            }
          />
          <Text
            style={[
              styles.menuItemText,
              index === this.state.activeMenuItemIndex &&
                styles.menuItemTextActive
            ]}
          >
            {displayName}
          </Text>
          {premium &&
            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <Image source={premiumIcon} />
            </TouchableOpacity>}
        </TouchableOpacity>
      );
    });
  }

  onLogout() {
    amplitude.identify("N/A");
    amplitude.track(amplitude.events.LOGOUT);
    this.props.clearStorage();
  }

  onFooterMenuItemClick(index) {
    const { screen } = FOOTER_MENU_ITEMS[index];
    if (screen === "logout") {
      this.onLogout();
    } else {
      this.props.navigation.navigate(screen);
    }
  }

  renderFooterMenuItems() {
    return FOOTER_MENU_ITEMS.map(({ displayName, underline }, index) => {
      return (
        <TouchableOpacity
          key={`FooterMenuItem_${index}`}
          activeOpacity={0.6}
          onPress={() => this.onFooterMenuItemClick(index)}
          hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
          style={styles.footerPadder}
        >
          <Text
            style={[styles.footerLinkText, underline && styles.underlineText]}
          >
            {displayName}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const avatar = getAvatar(this.props.authReducer, this.props.profileReducer);
    const {
      data: {
        authorized: {
          balance,
          firstName,
          lastName,
          company: { brandLogoUrl: companyLogoName }
        }
      }
    } = this.props.authReducer;
    const fullName = firstName + " " + lastName;
    const dollars = getDollarString(balance);

    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.header, styles.padder]}
          onPress={() => this.onProfileClick()}
        >
          {companyLogoName &&
            <Image
              source={{ uri: companyLogoUrl(companyLogoName) }}
              style={styles.brandLogo}
            />}
          <View style={styles.profileContainer}>
            {avatar
              ? <Image
                  source={{ uri: `data:image/png;base64,${avatar}` }}
                  style={styles.avatar}
                />
              : <Svg width={40} height={40}>
                  <Svg.Circle
                    cx="20"
                    cy="20"
                    r={19}
                    stokeWidth={1}
                    stroke={colors.darkerGrey}
                    fill={colors.mediumGrey}
                  />
                </Svg>}
            <View style={styles.headerTexts}>
              <Text style={styles.nameText}>
                {fullName}
              </Text>
              <Text style={styles.balanceText}>
                {dollars}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.body}>
          {this.renderTopMenuItems()}
        </View>
        <View style={[styles.footer, styles.padder]}>
          <View style={styles.footerLinks}>
            {this.renderFooterMenuItems()}
          </View>
          <Image source={logo} />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    profileReducer: state.profileReducer,
    authReducer: state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearStorage: () => dispatch(clearStorage())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
