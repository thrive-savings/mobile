import React, { Component } from "react";
import {
  View,
  Text,
  Card
} from "native-base";

import SpecialButton from "../../../../components/SpecialButton";
import Dots from "../../../../components/Dots";

import styles from "./styles";

type Props = {
  next: () => void
};
class FlexPlan extends Component {
  constructor(props: Props) {
    super(props);

    this.next = this.next.bind(this);
  }

  next() {
    this.props.changeStep({ step: 3 });
  }

  render() {
    return (
      <Card style={styles.container}>
        <Dots step={3} />

        <Text style={styles.labelText}>HOW MUCH WOULD YOU LIKE TO SAVE?</Text>
        <Text style={[styles.greyText]}>
          You are currently on the <Text style={styles.blueText}>Thrive Flex</Text> plan
        </Text>

        <View style={styles.separator} />

        <Text style={[styles.greyText, styles.desc1]}>
          We will automatically transfer a small amount of money into your Thrive Savings account.
        </Text>
        <Text style={[styles.greyText, styles.desc2]}>
          Each amount is custom-based on your transactions, income, and expenses.
        </Text>
        <Text style={[styles.blueText, styles.desc1]}>
          Don’t worry, we will never overdraw you.
        </Text>
        <SpecialButton onClick={this.next} state={1} />
      </Card>
    );
  }
}

export default FlexPlan;
