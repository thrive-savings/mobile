import React, { Component } from "react";
import { Image, ImageBackground, StatusBar, TouchableOpacity, View, Text } from "react-native";
import { connect } from "react-redux";
import { Spinner } from "native-base";
import { Svg } from "expo";

import getAvatar from "../../globals/getAvatar";

import styles from "./styles";
import colors from "../../theme/colors";

import { setPhone, setEmail, setPassword } from "./state/actions";

import ChangePhotoModal from "./modals/ChangePhoto";
import ChangePhone from "./pages/ChangePhone";
import ChangeEmail from "./pages/ChangeEmail";
import ChangePassword from "./pages/ChangePassword";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const menuIcon = require("../../../assets/Icons/Menu/menu.png");
const backIcon = require("../../../assets/Icons/Back/back.png");

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeContent: "Home",
      showModal: false
    };

    this.getDisplayName = this.getDisplayName.bind(this);
    this.onBackPress = this.onBackPress.bind(this);
  }

  setPhone(payload) {
    this.props.setPhone(payload);
    this.setState({ activeContent: "Home" });
  }

  setEmail(payload) {
    this.props.setEmail(payload);
    this.setState({ activeContent: "Home" });
  }

  setPassword(payload) {
    this.props.setPassword(payload);
    this.setState({ activeContent: "Home" });
  }

  onBackPress() {
    if (this.state.activeContent === "Home") {
      this.props.navigation.navigate("DrawerOpen");
    } else {
      this.setState({activeContent: "Home"});
    }
  }

  getDisplayName() {
    switch (this.state.activeContent) {
      case "Home":
        return "MY PROFILE";
      case "ChangePhone":
        return "CHANGE PHONE NUMBER";
      case "ChangeEmail":
        return "CHANGE EMAIL";
      case "ChangePassword":
        return "CHANGE PASSWORD";
      default:
        return this.renderHome();
    }
  }

  renderContent() {
    switch (this.state.activeContent) {
      case "Home":
        return this.renderHome();
      case "ChangePhone":
        return <ChangePhone onSubmit={this.setPhone.bind(this)} />;
      case "ChangeEmail":
        return <ChangeEmail onSubmit={this.setEmail.bind(this)} />;
      case "ChangePassword":
        return <ChangePassword onSubmit={this.setPassword.bind(this)} />;
      default:
        return this.renderHome();
    }
  }

  renderPhotoContainer() {
    const avatar = getAvatar(this.props.authReducer, this.props.profileReducer);

    const { data: { authorized: { firstName, lastName } } } = this.props.authReducer;
    const { isLoading } = this.props.profileReducer;

    return (
      <View style={styles.photoContainer}>
        {
          isLoading
            ? <Spinner color={colors.blue} />
            :
              <TouchableOpacity activeOpacity={0.6} style={styles.photoHolder} onPress={() => this.setState({showModal: true})}>
                {
                  avatar
                    ? <Image source={{uri: `data:image/png;base64,${avatar}`}} style={styles.avatar} />
                    :
                      <Svg width={100} height={100}>
                        <Svg.Circle cx="50" cy="50" r={49} stokeWidth={1} stroke={colors.darkestGrey} fill={colors.mediumGrey} />
                      </Svg>
                }
              </TouchableOpacity>
        }
        <Text style={styles.nameText}>{firstName + " " + lastName}</Text>
      </View>
    );
  }

  renderHome() {
    const { phone, email } = this.props.authReducer.data.authorized;

    const { isSettingPhone, isSettingEmail, isSettingPassword, error, errorMessage } = this.props.profileReducer;

    let errorText = "";
    if (error) {
      const { errors } = errorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    return (
      <View style={styles.contentContainer}>
        {this.renderPhotoContainer()}

        <View style={styles.separator} />

        <View style={styles.otherContainer}>
          <Text style={[styles.labelText, styles.commonText]}>Phone Number:</Text>
          {
            isSettingPhone
              ? <Text style={[styles.buttonText, styles.commonText]}>Changing phone ...</Text>
              :
                <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({activeContent: "ChangePhone"})}>
                  <Text style={[styles.buttonText, styles.commonText]}>{phone}</Text>
                </TouchableOpacity>
          }
        </View>

        <View style={styles.separator} />

        <View style={styles.otherContainer}>
          <Text style={[styles.labelText, styles.commonText]}>Email:</Text>
          {
            isSettingEmail
              ? <Text style={[styles.buttonText, styles.commonText]}>Changing email ...</Text>
              :
                <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({activeContent: "ChangeEmail"})}>
                  <Text style={[styles.buttonText, styles.commonText]}>{email}</Text>
                </TouchableOpacity>
          }
        </View>

        <View style={styles.separator} />

        <View style={styles.otherContainer}>
          <Text style={[styles.labelText, styles.commonText]}>Password:</Text>
          {
            isSettingPassword
              ? <Text style={[styles.buttonText, styles.commonText]}>Changing password ...</Text>
              :
                <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({activeContent: "ChangePassword"})}>
                  <Text style={[styles.buttonText, styles.commonText]}>Change Password</Text>
                </TouchableOpacity>
          }
        </View>

        {error && <Text style={styles.formErrorText3}>{errorText}</Text>}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={styles.background}>
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.6} onPress={this.onBackPress} style={styles.backButton}>
              <Image source={this.state.activeContent === "Home" ? menuIcon : backIcon} />
            </TouchableOpacity>
            <Text style={styles.titleText}>{this.getDisplayName()}</Text>
          </View>
          <View style={{flex: 1}}>
            {this.renderContent()}
            <ChangePhotoModal
              showModal={this.state.showModal}
              onClose={() => this.setState({showModal: false})}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    authReducer: state.authReducer,
    profileReducer: state.profileReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    setPhone: (payload) => dispatch(setPhone(payload)),
    setEmail: (payload) => dispatch(setEmail(payload)),
    setPassword: (payload) => dispatch(setPassword(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
