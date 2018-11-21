import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import globalStyles from "../../globals/globalStyles";

const tickIcon = require("../../../assets/Icons/TickGradient/tickGradient.png");

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  onPress() {
    if (this.props.expandable) {
      this.setState({ expanded: !this.state.expanded });
    }
  }

  render() {
    const expanded = this.state.expanded;
    const { title, description, showIcon, titleFont, expandable } = this.props;

    return (
      <View style={[styles.container, globalStyles.shadow]}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={this.onPress.bind(this)}
          style={styles.header}
        >
          <View style={styles.left}>
            {showIcon && <Image source={tickIcon} />}
            <Text
              style={[styles.titleText, titleFont && { fontSize: titleFont }]}
            >
              {title}
            </Text>
          </View>
          {expandable &&
            <View style={styles.right}>
              <Text
                style={[styles.rightIcon, expanded && styles.rightIconRotated]}
              >
                >
              </Text>
            </View>}
        </TouchableOpacity>
        {expanded &&
          <View style={styles.contentContainer}>
            <Text style={styles.descText}>
              {description}
            </Text>
          </View>}
      </View>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  showIcon: PropTypes.bool,
  titleFont: PropTypes.number,
  expandable: PropTypes.bool
};
Accordion.defaultProps = {
  title: "",
  description: "",
  showIcon: true,
  titleFont: 0,
  expandable: true
};

export default Accordion;
