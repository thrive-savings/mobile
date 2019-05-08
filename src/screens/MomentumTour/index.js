import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import ModalTemplate from "../../components/ModalTemplate";
import Dots from "../../components/Dots";
import SpecialButton from "../../components/SpecialButton";
import addStatusBar from "../../components/StatusBar";

import amplitude from "../../globals/amplitude";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";

import { Tour0, Tour1, Tour2, routes } from "./components";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const momentumLogo = require("../../../assets/Momentum/Logos/InApp/logo.png");

class MomentumTour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes,
      showWarning: false
    };

    amplitude.track(amplitude.events.MOMENTUM_TOUR_STEP_VIEW(1));
  }

  onStepChange = index => {
    amplitude.track(amplitude.events.MOMENTUM_TOUR_STEP_VIEW(index));
    this.setState({ index });
  };

  renderTabBar = ({ navigationState: { index: activeIndex } }) =>
    <Dots
      step={activeIndex + 1}
      count={3}
      strokeColor="white"
      fillColor="white"
      emptyColor="transparent"
    />;

  renderWarningModal() {
    return (
      <React.Fragment>
        <Text style={[styles.regularText, styles.boldText]}>Are you sure?</Text>
        <Text style={[styles.regularText, styles.textPadder]}>
          You could be eligible for a <Text style={styles.blueText}>
            $60
          </Text>{" "}
          savings boost!
        </Text>
        <SpecialButton
          text="GO BACK"
          onClick={() => this.setState({ showWarning: false })}
          style={styles.modalButtonStyle}
        />
        <SpecialButton
          text="I DON'T WANT $60"
          onClick={() => {}}
          type="white"
          style={[styles.modalButtonStyle, globalStyles.shadow]}
        />
      </React.Fragment>
    );
  }

  render() {
    const { index: activeIndex, routes: tourRoutes, showWarning } = this.state;
    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Image source={momentumLogo} style={styles.momentumLogo} />
        <TabView
          navigationState={{ index: activeIndex, routes: tourRoutes }}
          renderScene={SceneMap({ Tour0, Tour1, Tour2 })}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.onStepChange}
          tabBarPosition="bottom"
        />
        <View style={styles.buttonsContainer}>
          <SpecialButton
            style={styles.specialButton}
            text={
              activeIndex === 0
                ? "LEARN MORE"
                : activeIndex === 1 ? "NEXT" : "CHECK ELIGIBILITY"
            }
            onClick={() =>
              activeIndex < 2
                ? this.onStepChange(activeIndex + 1)
                : this.props.navigation.navigate("MomentumVerification")}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this.setState({ showWarning: true })}
          >
            <Text style={styles.otherButtonText}>I'm not interested</Text>
          </TouchableOpacity>
        </View>

        <ModalTemplate
          show={showWarning}
          buttonVisible={false}
          buttonText={"SUBMIT"}
          content={this.renderWarningModal()}
          onClose={() => this.setState({ showWarning: false })}
        />
      </ImageBackground>
    );
  }
}

export default addStatusBar(MomentumTour);
