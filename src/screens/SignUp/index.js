// @flow
import React, { Component } from "react";
import { ImageBackground, StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  View,
  Button,
  Text
} from "native-base";

import styles from "./styles";
import colors from "../../theme/colors";

import ReferralCode from "./pages/ReferralCode";
import PersonalDetails from "./pages/PersonalDetails";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");


class SignUp extends Component {
  render() {
    const { step } = this.props.signUpReducer;

    let body;
    switch (step) {
      case 0:
        body = <ReferralCode navigation={this.props.navigation} />;
        break;
      case 1:
        body = <PersonalDetails navigation={this.props.navigation} />;
        break;
      default:
        break;
    }

    return (
      <Container>
        <StatusBar
          backgroundColor={colors.statusbar}
          barStyle="light-content"
        />
        <ImageBackground
          source={bg}
          style={styles.background}
        >
          {body}
          <View style={styles.bottomContainer}>
            <Text
              style={styles.bottomLabelText}
            >
              Already have an account?
            </Text>
            <Button
              small
              transparent
              style={styles.bottomBtn}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text uppercase={false} style={styles.bottomBtnText}>
                Log In.
              </Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

function mapStateToProps (state) {
  return {
    signUpReducer: state.signUpReducer
  };
}

export default connect(mapStateToProps)(SignUp);
