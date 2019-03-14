import React, { Component } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import Header from "../../components/Header";
import Dots from "../../components/Dots";
import addStatusBar from "../../components/StatusBar";

import amplitude from "../../globals/amplitude";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";

import { Tour0, Tour1, Tour2, Tour3, routes } from "./components";

const bg = require("../../../assets/Backgrounds/BackgroundCover.png");

class ProductTour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes
    };

    amplitude.track(amplitude.events.PRODUCT_TOUR_STEP_VIEW(1));
  }

  onStepChange = index => {
    amplitude.track(amplitude.events.PRODUCT_TOUR_STEP_VIEW(index));
    this.setState({ index });
  };

  renderTabBar = ({ navigationState: { index: activeIndex } }) => <Dots step={activeIndex + 1} count={4} />;

  render() {
    const { index: activeIndex } = this.state;
    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header button="none" />
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({ Tour0, Tour1, Tour2, Tour3 })}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.onStepChange}
          tabBarPosition="bottom"
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.buttonStyle, styles.nextButton, globalStyles.shadow]}
            activeOpacity={0.6}
            onPress={() => activeIndex < 3 ? this.onStepChange(activeIndex + 1) : this.props.navigation.navigate("SignUp")}
          >
            <Text style={styles.loginButtonText}>{activeIndex < 3 ? "NEXT" : "JOIN THRIVE"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonStyle, styles.loginButton, globalStyles.shadow]}
            activeOpacity={0.6}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default addStatusBar(ProductTour);
