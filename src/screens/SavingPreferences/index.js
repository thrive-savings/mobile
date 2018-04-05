// @flow
import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View
} from "native-base";
import { reduxForm } from "redux-form";

import styles from "./styles";
import colors from "../../theme/colors";

import WorkType from "./pages/WorkType";
import SavingType from "./pages/SavingType";
//import SavingDetails from "./pages/SavingDetails";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

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
        body = <WorkType changeStep={this.changeStep}/>;
        break;
    }

    return (
      <Container>
        <Image
          source={bg}
          style={styles.background}
        >
          <View style={styles.headerContainer}>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon active name="arrow-back" style={styles.headerIcon}/>
            </Button>
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
