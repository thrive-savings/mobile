import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import { Toast } from "native-base";
import { ImagePicker, Permissions } from "expo";

import styles from "./styles";

import ModalTemplate from "../ModalTemplate";

class UploadPhotoModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploading: false
    };

    this.renderContent = this.renderContent.bind(this);

    this.handleImagePicked = this.handleImagePicked.bind(this);
    this.takePhoto = this.takePhoto.bind(this);
    this.chooseFromLibrary = this.chooseFromLibrary.bind(this);

    this.deletePhoto = this.deletePhoto.bind(this);
  }

  async handleImagePicked(pickerResult) {
    try {
      this.setState({ uploading: true });

      if (!pickerResult.cancelled) {
        const { uri, base64: encodedImage } = pickerResult;
        let uriParts = uri.split(".");
        let fileType = uriParts[uriParts.length - 1];
        this.props.uploadPhoto({
          encodedImage: encodedImage,
          imageType: `image/${fileType}`
        });
        this.props.onClose();
      }
    } catch (e) {
    } finally {
      this.setState({ uploading: false });
    }
  }

  async takePhoto() {
    let showToast = false;

    const { status: cameraStatus } = await Permissions.askAsync(
      Permissions.CAMERA
    );
    if (cameraStatus === "granted") {
      const { status: cameraRollStatus } = await Permissions.askAsync(
        Permissions.CAMERA_ROLL
      );
      if (cameraRollStatus === "granted") {
        const pickerResult = await ImagePicker.launchCameraAsync({
          exif: true,
          base64: true,
          allowsEditing: true
        });
        this.handleImagePicked(pickerResult);
      } else {
        showToast = true;
      }
    } else {
      showToast = true;
    }

    if (showToast) {
      Toast.show({
        text: "Camera & Camera Roll Permissions should be granted.",
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
    }
  }

  async chooseFromLibrary() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        exif: true,
        base64: true,
        allowsEditing: true
      });
      this.handleImagePicked(pickerResult);
    } else {
      Toast.show({
        text: "Camera Roll Permission not granted.",
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
    }
  }

  deletePhoto() {
    this.props.deletePhoto();
    this.props.onClose();
  }

  renderContent() {
    const { title, removeOption } = this.props;
    return (
      <View>
        <Text style={styles.regularText}>
          {title}
        </Text>
        <View style={styles.optionsContainer}>
          {removeOption &&
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.optionRow}
              onPress={this.deletePhoto}
            >
              <Text style={[styles.regularText, styles.redText]}>
                Remove Current Photo
              </Text>
            </TouchableOpacity>}
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.optionRow}
            onPress={this.takePhoto}
          >
            <Text style={styles.regularText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.optionRow}
            onPress={this.chooseFromLibrary}
          >
            <Text style={styles.regularText}>Choose from Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ModalTemplate
        show={this.props.show}
        buttonVisible={false}
        content={this.renderContent()}
        onClose={this.props.onClose}
      />
    );
  }
}

UploadPhotoModal.propTypes = {
  uploadPhoto: PropTypes.func.isRequired,
  deletePhoto: PropTypes.func.isRequired,
  title: PropTypes.string,
  removeOption: PropTypes.bool,
  show: PropTypes.bool,
  onClose: PropTypes.func
};
UploadPhotoModal.defaultProps = {
  title: "Change Profile Photo",
  removeOption: true,
  show: false,
  onClose: () => {}
};

export default UploadPhotoModal;
