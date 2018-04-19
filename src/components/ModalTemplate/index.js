import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Image } from "react-native";
import {
  View,
  Text
} from "native-base";
import Modal from "react-native-modal";

import SpecialButton from "../SpecialButton";

import styles from "./styles";

const closeIcon = require("../../../assets/Icons/Close/close.png");


class ModalTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: props.show,
      buttonLoading: props.buttonLoading
    };

    this.close = this.close.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      buttonLoading: nextProps.buttonLoading
    });
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
            {
              this.props.buttonVisible &&
              <SpecialButton loading={this.state.buttonLoading} text={this.props.buttonText} onClick={this.props.onButtonClick ? this.props.onButtonClick : this.close} state={1} />
            }
          </View>
        </View>
      </Modal>
    );
  }
}

ModalTemplate.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  buttonVisible: PropTypes.bool,
  buttonLoading: PropTypes.bool,
  buttonText: PropTypes.string
};
ModalTemplate.defaultProps = {
  show: false,
  onClose: () => {},
  buttonVisible: true,
  buttonLoading: false,
  buttonText: "CONTINUE"
};


export default ModalTemplate;
