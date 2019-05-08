import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Image, Text } from "react-native";

import styles from "./styles";

const logo = require("../../../assets/Logo/white.png");
const menuIcon = require("../../../assets/Icons/Menu/menu.png");
const backIcon = require("../../../assets/Icons/Back/back.png");
const warningIcon = require("../../../assets/Icons/Warning/warning.png");

class Header extends Component {
  _onButtonPress() {
    const { navigation, button, onButtonPress } = this.props;
    if (onButtonPress) {
      onButtonPress();
    } else {
      if (button === "menu") {
        navigation.openDrawer();
      } else {
        navigation.goBack();
      }
    }
  }

  render() {
    const { button, content, text, warning, onWarningPress } = this.props;
    return (
      <View style={styles.container}>
        {button !== "none" &&
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={this._onButtonPress.bind(this)}
            style={styles.leftButton}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Image source={button === "menu" ? menuIcon : backIcon} />
          </TouchableOpacity>}
        {content === "icon"
          ? <Image source={logo} />
          : <Text style={styles.text}>
              {text}
            </Text>}
        {warning &&
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onWarningPress}
            style={styles.rightButton}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Image source={warningIcon} />
          </TouchableOpacity>}
      </View>
    );
  }
}

Header.propTypes = {
  navigation: PropTypes.object,
  button: PropTypes.oneOf(["menu", "back", "none"]),
  onButtonPress: PropTypes.func,
  content: PropTypes.oneOf(["icon", "text"]),
  text: PropTypes.string,
  warning: PropTypes.bool,
  onWarningPress: PropTypes.func
};
Header.defaultProps = {
  navigation: {},
  button: "menu",
  onButtonPress: undefined,
  content: "icon",
  text: "",
  warning: false,
  onWarningPress: () => {}
};

export default Header;
