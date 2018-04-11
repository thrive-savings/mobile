import React, { Component } from "react";
import { Svg } from "expo";
import { View } from "native-base";

import styles from "./styles";

const colors = require("../../theme/colors");

type Props = {
  step: 1,
  count: 4
};
class Dots extends Component {
  constructor(props: Props) {
    super(props);
  }

  renderThree() {
    return (
      <Svg width={40} height={10}>
        <Svg.Circle cx="4" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={this.props.step === 1 ? colors.blue : "white"} />
        <Svg.Circle cx="20" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={this.props.step === 2 ? colors.blue : "white"} />
        <Svg.Circle cx="36" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={this.props.step === 3 ? colors.blue : "white"} />
      </Svg>
    );
  }

  renderFour() {
    return (
      <Svg width={56} height={10}>
        <Svg.Circle cx="4" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={this.props.step === 1 ? colors.blue : "white"} />
        <Svg.Circle cx="20" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={this.props.step === 2 ? colors.blue : "white"} />
        <Svg.Circle cx="36" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={this.props.step === 3 ? colors.blue : "white"} />
        <Svg.Circle cx="52" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={this.props.step === 4 ? colors.blue : "white"} />
      </Svg>
    );
  }

  render() {
    let body;
    switch (this.props.count) {
      case 3:
        body = this.renderThree();
        break;
      case 4:
        body = this.renderFour();
        break;
      default:
        body = this.renderFour();
        break;
    }

    return (
      <View style={styles.container}>
        {body}
      </View>
    );
  }
}

export default Dots;
