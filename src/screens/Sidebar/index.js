import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Svg } from "expo";
import { connect } from "react-redux";
import {
  View,
  Text,
} from "native-base";

import { clearStorage } from "../../globals/clearStorage";
import getAvatar from "../../globals/getAvatar";

import styles from "./styles";
import colors from "../../theme/colors";

const logo = require("../../../assets/Logo/thumbnail.png");
const savingsIcon = require("../../../assets/Sidebar/House/house.png");
const historyIcon = require("../../../assets/Sidebar/Fill/fill1.png");
const settingsIcon = require("../../../assets/Sidebar/Settings/settings1.png");
const helpIcon = require("../../../assets/Sidebar/ThriveBot/thriveBot.png");

const MENU_ITEMS = [
  {
    displayName: "MY SAVINGS",
    icon: savingsIcon,
    screen: "Home"
  },
  {
    displayName: "SAVINGS HISTORY",
    icon: historyIcon,
    screen: "Channels"
  },
  {
    displayName: "SETTINGS",
    icon: settingsIcon,
    screen: "Settings"
  },
  {
    displayName: "HELP",
    icon: helpIcon,
    screen: "Feedback"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItemIndex: 0
    };
  }

  onMenuItemClick(index) {
    this.setState({activeMenuItemIndex: index});
    this.props.navigation.navigate(MENU_ITEMS[index].screen);
  }

  renderMenuItems() {
    return MENU_ITEMS.map(({ displayName, icon }, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.6}
          style={[styles.menuItem, styles.padder, index === this.state.activeMenuItemIndex && styles.menuItemActive]}
          onPress={() => this.onMenuItemClick(index)}
        >
          <Image source={icon}  style={[styles.menuItemIcon, index === this.state.activeMenuItemIndex && styles.menuItemIconActive]} />
          <Text style={[styles.menuItemText, index === this.state.activeMenuItemIndex && styles.menuItemTextActive]}>{displayName}</Text>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const { navigation } = this.props;

    const avatar = getAvatar(this.props.authReducer, this.props.profileReducer);
    const { data: { authorized: { balance, firstName, lastName } } } = this.props.authReducer;
    const fullName = firstName + " " + lastName;
    let dollars = balance / 100;
    dollars = dollars % 1 === 0 ? dollars : dollars.toFixed(2);
    dollars = "$" + dollars.toLocaleString("en-US", {style: "currency", currency: "USD"});

    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.6} style={[styles.header, styles.padder]} onPress={() => navigation.navigate("Profile")}>
          {
            avatar
              ? <Image source={{uri: `data:image/png;base64,${avatar}`}} style={styles.avatar} />
              :
                <Svg width={40} height={40}>
                  <Svg.Circle cx="20" cy="20" r={19} stokeWidth={1} stroke={colors.darkergrey} fill={colors.mediumGrey} />
                </Svg>
          }
          <View style={styles.headerTexts}>
            <Text style={styles.nameText}>{fullName}</Text>
            <Text style={styles.balanceText}>{dollars}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.body}>
          {this.renderMenuItems()}
        </View>
        <View style={[styles.footer, styles.padder]}>
          <TouchableOpacity activeOpacity={0.6} onPress={this.props.clearStorage}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
          <Image source={logo} style={styles.footerLogo} />
        </View>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    profileReducer: state.profileReducer,
    authReducer: state.authReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    clearStorage: () => dispatch(clearStorage())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
