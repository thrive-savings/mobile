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

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";

import { Tour0, Tour1, Tour2, Tour3, routes } from "./components";

const bg = require("../../../assets/Backgrounds/BackgroundCover.png");

class ProductTour extends Component {
  state = {
    index: 0,
    routes
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
          onIndexChange={index => this.setState({ index })}
          tabBarPosition="bottom"
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.buttonStyle, styles.nextButton, globalStyles.shadow]}
            activeOpacity={0.6}
            onPress={() => activeIndex < 3 ? this.setState({ index: activeIndex + 1 }) : this.props.navigation.navigate("SignUp")}
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
