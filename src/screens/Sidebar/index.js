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
import { getDollarString } from "../../globals/helpers";

import styles from "./styles";
import colors from "../../theme/colors";

import MENU_ITEMS from "./constants";

const logo = require("../../../assets/ThumbnailLogo/Small/thumbnail.png");

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItemIndex: 0
    };
  }

  onProfileClick() {
    this.setState({activeMenuItemIndex: -1});
    this.props.navigation.navigate("Profile");
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
    const avatar = getAvatar(this.props.authReducer, this.props.profileReducer);
    const { data: { authorized: { balance, firstName, lastName } } } = this.props.authReducer;
    const fullName = firstName + " " + lastName;
    const dollars = getDollarString(balance);

    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.6} style={[styles.header, styles.padder]} onPress={() => this.onProfileClick()}>
          {
            avatar
              ? <Image source={{uri: `data:image/png;base64,${avatar}`}} style={styles.avatar} />
              :
                <Svg width={40} height={40}>
                  <Svg.Circle cx="20" cy="20" r={19} stokeWidth={1} stroke={colors.darkerGrey} fill={colors.mediumGrey} />
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
          <TouchableOpacity activeOpacity={0.6} onPress={this.props.clearStorage} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
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
