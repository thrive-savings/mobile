import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo";
import { Spinner } from "native-base";

import styles from "./styles";
import colors from "../../theme/colors";

class SpecialButton extends Component {
  renderEnabled() {
    let text = this.props.text ? this.props.text : "CONTINUE";

    return (
      <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.onClick()} style={styles.enabledButton}>
        <LinearGradient
          colors={colors.blueGreenGradient.colors}
          style={styles.enabledButtonGradient}
        >
          {
            this.props.loading
              ? <Spinner color="white" />
              : <Text style={styles.enabledButtonText}>
                  {text}
                </Text>
          }
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  renderDisabled() {
    let text = this.props.text ? this.props.text : "CONTINUE";

    return (
      <TouchableOpacity activeOpacity={0.6} style={styles.disabledButton}>
        {
          this.props.loading
            ? <Spinner color="white" />
            : <Text style={styles.disabledButtonText}>
                {text}
              </Text>
        }
      </TouchableOpacity>
    );
  }

  render() {
    return (
      this.props.enabled
        ? this.renderEnabled()
        : this.renderDisabled()
    );
  }
}

SpecialButton.propTypes = {
  next: PropTypes.func,
  enabled: PropTypes.bool,
  loading: PropTypes.bool
};
SpecialButton.defaultProps = {
  next: () => {},
  enabled: true,
  loading: false
};

export default SpecialButton;
