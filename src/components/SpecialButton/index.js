import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import {
  Text,
  Button,
  Spinner
} from "native-base";

import styles from "./styles";

const colors = require("../../theme/colors");

type Props = {
  next: () => void,
  state: 1,
  loading: false
};
class SpecialButton extends Component {
  constructor(props: Props) {
    super(props);
  }

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
      <Button
        block
        style={styles.disabledButton}
      >
        {
          this.props.loading
            ? <Spinner color="white" />
            : <Text style={styles.disabledButtonText}>
                {text}
              </Text>
        }
      </Button>
    );
  }

  render() {
    return (
      this.props.state
        ? this.renderEnabled()
        : this.renderDisabled()
    );
  }
}

export default SpecialButton;
