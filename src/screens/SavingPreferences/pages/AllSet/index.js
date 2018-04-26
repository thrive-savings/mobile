import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import {
  Text,
  Card
} from "native-base";

import SpecialButton from "../../../../components/SpecialButton";
import Dots from "../../../../components/Dots";

import styles from "./styles";

const thriveBotIcon = require("../../../../../assets/Icons/ThriveBot/thriveBot.png");

type Props = {
  next: () => void
};
class AllSet extends Component {
  constructor(props: Props) {
    super(props);

    this.next = this.next.bind(this);
  }

  next() {
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <Card style={styles.container}>
        <Dots step={4} />

        <Text style={styles.labelText}>YOU'RE ALL SET!</Text>

        <Image source={thriveBotIcon} style={styles.thriveBotIcon} />

        <Text style={styles.greyText}>
          Way to go! Your saving preferences are all set up and you can expect your first transfer in the next 2-3 business days.
        </Text>
        <Text style={styles.blueText}>
          Next step is creating your first savings goal!
        </Text>

        <SpecialButton text={"GO TO MY ACCOUNT"} onClick={this.next} state={1} />
      </Card>
    );
  }
}

AllSet.propTypes = {
  next: PropTypes.func
};
AllSet.defaultProps = {
  next: () => {}
};

export default AllSet;
