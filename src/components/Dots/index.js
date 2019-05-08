import React from "react";
import PropTypes from "prop-types";
import { Svg } from "expo";
import { View } from "native-base";

import styles from "./styles";

const colors = require("../../theme/colors");

const STROKE_WIDTH = 1;
const RADIUS = 4;
const DISTANCE_BETWEEN = 4;
const DISTANCE_BETWEEN_ORIGINS = 4 + 2 * RADIUS;
const containerWidth = n => 2 * n * RADIUS + (n - 1) * DISTANCE_BETWEEN;

function Dots({ count, step, strokeColor, fillColor, emptyColor }) {
  const circles = [];
  for (let i = 0; i < count; i++) {
    circles.push(
      <Svg.Circle
        key={`dot_${i}`}
        cx={RADIUS + i * DISTANCE_BETWEEN_ORIGINS}
        cy={RADIUS}
        r={RADIUS - STROKE_WIDTH}
        stokeWidth={STROKE_WIDTH}
        stroke={strokeColor}
        fill={step === i + 1 ? fillColor : emptyColor}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Svg width={containerWidth(count)} height={2 * RADIUS}>
        {circles}
      </Svg>
    </View>
  );
}

Dots.propTypes = {
  step: PropTypes.number,
  count: PropTypes.number,
  strokeColor: PropTypes.string,
  fillColor: PropTypes.string,
  emptyColor: PropTypes.string
};
Dots.defaultProps = {
  step: 1,
  count: 4,
  strokeColor: colors.blue,
  fillColor: colors.blue,
  emptyColor: "white"
};

export default Dots;
