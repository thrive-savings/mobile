import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import {
  View,
  Text
} from "native-base";
import Modal from "react-native-modal";

import styles from "./styles";

const colors = require("../../../../theme/colors");

const closeIcon = require("../../../../../assets/Icons/Close/close.png");

type Props = {
  show: false,
  onClose: () => void
};
class NumPadModal extends Component {
  state: {
    show: false
  };
  constructor(props: Props) {
    super(props);

    this.state = {
      show: props.show
    };

    this.close = this.close.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({show: nextProps.show});
  }

  close() {
    this.setState({show: false});
  }

  render() {
    return (
      <Modal
        isVisible={this.state.show}
        onModalHide={this.props.onClose}
        backdropOpacity={0.6}
        onBackdropPress={this.close}
      >
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0.6} style={styles.closeButton} onPress={() => this.close()}>
            <Image source={closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={() => this.close()}>
            <Text style={{color: colors.charcoal}}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

export default NumPadModal;
