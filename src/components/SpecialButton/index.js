import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo";
import { Spinner } from "native-base";

import styles from "./styles";
import colors from "../../theme/colors";

class SpecialButton extends Component {
  renderWhite() {
    let text = this.props.text ? this.props.text : "CONTINUE";

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.whiteButton, this.props.style]}
      >
        {this.props.loading
          ? <Spinner color={colors.blue} />
          : <Text style={styles.whiteButtonText}>
              {text}
            </Text>}
      </TouchableOpacity>
    );
  }

  renderGradient() {
    let text = this.props.text ? this.props.text : "CONTINUE";

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => this.props.onClick()}
        style={[styles.enabledButton, this.props.style]}
      >
        <LinearGradient
          colors={colors.blueGreenGradient.colors}
          style={styles.enabledButtonGradient}
        >
          {this.props.loading
            ? <Spinner color="white" />
            : <Text style={styles.enabledButtonText}>
                {text}
              </Text>}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  renderDisabled() {
    let text = this.props.text ? this.props.text : "CONTINUE";

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.disabledButton, this.props.style]}
      >
        {this.props.loading
          ? <Spinner color="white" />
          : <Text style={styles.disabledButtonText}>
              {text}
            </Text>}
      </TouchableOpacity>
    );
  }

  render() {
    const { enabled, type } = this.props;
    return enabled
      ? type === "gradient" ? this.renderGradient() : this.renderWhite()
      : this.renderDisabled();
  }
}

SpecialButton.propTypes = {
  next: PropTypes.func,
  enabled: PropTypes.bool,
  loading: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    ),
    PropTypes.object,
    PropTypes.number
  ]),
  type: PropTypes.oneOf(["gradient", "white"])
};
SpecialButton.defaultProps = {
  next: () => {},
  enabled: true,
  loading: false,
  style: undefined,
  type: "gradient"
};

export default SpecialButton;
