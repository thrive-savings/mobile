import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { Card, Right } from "native-base";

import styles from "./styles";

const tickIcon = require("../../../assets/Icons/TickGradient/tickGradient.png");

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  render() {
    const expanded = this.state.expanded;
    const { title, description, showIcon, titleFont } = this.props;

    return (
      <Card style={styles.container}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({expanded: !expanded})} style={styles.header}>
          {showIcon && <Image source={tickIcon} />}
          <Text style={[styles.titleText, (titleFont && {fontSize: titleFont})]}>{title}</Text>
          <Right>
            <Text style={[styles.rightIcon, (expanded && styles.rightIconRotated)]}>></Text>
          </Right>
        </TouchableOpacity>
        {
          expanded &&
          <View style={styles.contentContainer}>
            <Text style={styles.descText}>{description}</Text>
          </View>
        }
      </Card>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  showIcon: PropTypes.bool,
  titleFont: PropTypes.number
};
Accordion.defaultProps = {
  title: "",
  description: "",
  showIcon: true,
  titleFont: 0
};

export default Accordion;
