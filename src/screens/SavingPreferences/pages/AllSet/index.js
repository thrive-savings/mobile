import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, Text } from "react-native";
import { Card } from "native-base";

import SpecialButton from "../../../../components/SpecialButton";
import Dots from "../../../../components/Dots";

import styles from "./styles";

const thriveBotIcon = require("../../../../../assets/Icons/ThriveBot/thriveBot.png");

class AllSet extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
  }

  next() {
    this.props.navigation.goBack();
    this.props.save();
  }

  render() {
    return (
      <Card style={styles.container}>
        <Dots step={4} />

        <Text style={styles.labelText}>YOU'RE ALL SET!</Text>

        <Image source={thriveBotIcon} />

        <Text style={styles.greyText}>
          Way to go! Your saving preferences are all set up and you can expect
          your first transfer in the next 2-3 business days.
        </Text>
        <Text style={styles.blueText}>
          Next step is creating your first savings goal!
        </Text>

        <SpecialButton text={"CREATE A GOAL"} onClick={this.next} />
      </Card>
    );
  }
}

AllSet.propTypes = {
  navigation: PropTypes.object.isRequired,
  next: PropTypes.func
};
AllSet.defaultProps = {
  next: () => {}
};

export default AllSet;
