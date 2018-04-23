import React, { Component } from "react";
import { Image, StatusBar, TouchableOpacity, View, Text } from "react-native";
import { connect } from "react-redux";
import { Spinner } from "native-base";
import { Svg } from "expo";

import getAvatar from "../../globals/getAvatar";

import styles from "./styles";
import colors from "../../theme/colors";

import ChangePhotoModal from "./modals/ChangePhoto";
import ChangePhone from "./pages/ChangePhone";
import ChangeEmail from "./pages/ChangeEmail";
import ChangePassword from "./pages/ChangePassword";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
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

  onBackPress() {
    if (this.state.activeContent === "Home") {
      this.props.navigation.goBack();
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
        return <ChangePhone />;
      case "ChangeEmail":
        return <ChangeEmail />;
      case "ChangePassword":
        return <ChangePassword />;
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
    return (
      <View style={styles.contentContainer}>
        {this.renderPhotoContainer()}

        <View style={styles.separator} />

        <View style={styles.otherContainer}>
          <Text style={[styles.labelText, styles.commonText]}>Phone Number:</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({activeContent: "ChangePhone"})}>
            <Text style={[styles.buttonText, styles.commonText]}>(647) 676 3323</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <View style={styles.otherContainer}>
          <Text style={[styles.labelText, styles.commonText]}>Email:</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({activeContent: "ChangeEmail"})}>
            <Text style={[styles.buttonText, styles.commonText]}>naib.baghirov@gmail.com</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <View style={styles.otherContainer}>
          <Text style={[styles.labelText, styles.commonText]}>Password:</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({activeContent: "ChangePassword"})}>
            <Text style={[styles.buttonText, styles.commonText]}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <Image source={bg} style={styles.background}>
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.6} onPress={this.onBackPress} style={styles.backButton}>
              <Image source={backIcon} />
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
        </Image>
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

export default connect(mapStateToProps)(Profile);
