// @flow
import React, { Component } from "react";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  View
} from "native-base";
import { reduxForm } from "redux-form";

import styles from "./styles";

import WorkType from "./pages/WorkType";
import SavingType from "./pages/SavingType";
import FixedPlan from "./pages/FixedPlan";
import FlexPlan from "./pages/FlexPlan";
import AllSet from "./pages/AllSet";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const backIcon = require("../../../assets/Icons/Back/back.png");

type Props = {
  navigation: () => void
};
class SavingPreferences extends Component {
  state: {
    step: 0
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      step: 0
    };

    this.changeStep = this.changeStep.bind(this);
  }

  changeStep(step: int) {
    this.setState({ step });
  }

  render() {
    const navigation = this.props.navigation;

    let body;
    switch (this.state.step) {
      case 0:
        body = <WorkType changeStep={this.changeStep}/>;
        break;
      case 1:
        body = <SavingType changeStep={this.changeStep}/>;
        break;
      case 2:
        body = true
          ? <FlexPlan changeStep={this.changeStep}/>
          : <FixedPlan changeStep={this.changeStep}/>;
        break;
      case 3:
        body = <AllSet changeStep={this.changeStep}/>;
        break;
    }

    return (
      <Container>
        <Image
          source={bg}
          style={styles.background}
        >
          <View style={styles.headerContainer}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()} style={styles.headerIcon}>
              <Image source={backIcon} style={styles.headerIconImage}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>SAVING PREFERENCES</Text>
          </View>
          <Content showsVerticalScrollIndicator={false} style={styles.contentContainer}>
            {body}
          </Content>
        </Image>
      </Container>
    );
  }
}

export default SavingPreferences;
