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
    const { title, description } = this.props;

    return (
      <Card style={styles.container}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({expanded: !expanded})} style={styles.header}>
          <Image source={tickIcon} />
          <Text style={styles.titleText}>{title}</Text>
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
  description: PropTypes.string
};
Accordion.defaultProps = {
  title: "",
  description: ""
};

export default Accordion;
