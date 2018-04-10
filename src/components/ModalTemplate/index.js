import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import {
  View,
  Text
} from "native-base";
import Modal from "react-native-modal";

import SpecialButton from "../SpecialButton";

import styles from "./styles";

const closeIcon = require("../../../assets/Icons/Close/close.png");

type Props = {
  show: false,
  onClose: () => void,
  buttonText: "CONTINUE"
};
class ModalTemplate extends Component {
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
    let body = this.props.content
      ? this.props.content
      : <Text style={styles.contentPlaceholderText}>Content not provided</Text>;

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
          <View style={styles.contentContainer}>
            {body}
            <SpecialButton text={this.props.buttonText} onClick={this.close} state={1} />
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalTemplate;
