import React, { Component } from "react";
import PropTypes from "prop-types";
import { ImageBackground } from "react-native";
import { connect } from "react-redux";
import { Content } from "native-base";

import Header from "../../components/Header";
import addStatusBar from "../../components/StatusBar";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";

import {
  changeStep,
  setWorkType,
  setSavingType,
  setSavingDetails,
  preferencesInitialSetDone
} from "./state/actions";

import WorkType from "./pages/WorkType";
import SavingType from "./pages/SavingType";
import FixedPlan from "./pages/FixedPlan";
import FlexPlan from "./pages/FlexPlan";
import AllSet from "./pages/AllSet";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class SavingPreferences extends Component {
  onBackArrowClick() {
    const { navigation, savingPreferencesReducer: { step } } = this.props;
    if (step) {
      this.props.changeStep({ step: step - 1 });
    } else {
      navigation.goBack();
    }
  }

  render() {
    const navigation = this.props.navigation;

    const {
      step,
      values: { savingType }
    } = this.props.savingPreferencesReducer;

    let body;
    switch (step) {
      case 0:
        body = <WorkType save={this.props.setWorkType} />;
        break;
      case 1:
        body = <SavingType save={this.props.setSavingType} />;
        break;
      case 2:
        body =
          savingType === "Thrive Flex"
            ? <FlexPlan changeStep={this.props.changeStep} />
            : <FixedPlan
                changeStep={this.props.changeStep}
                save={this.props.setSavingDetails}
              />;
        break;
      case 3:
        body = (
          <AllSet
            navigation={navigation}
            save={this.props.preferencesInitialSetDone}
          />
        );
        break;
    }

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header
          navigation={navigation}
          button={step > 0 ? "back" : "none"}
          onButtonPress={this.onBackArrowClick.bind(this)}
          content="text"
          text="SAVING PREFERENCES"
        />
        <Content
          showsVerticalScrollIndicator={false}
          style={styles.contentContainer}
        >
          {body}
        </Content>
      </ImageBackground>
    );
  }
}

SavingPreferences.propTypes = {
  navigation: PropTypes.object
};
SavingPreferences.defaultProps = {
  navigation: {}
};

function mapStateToProps(state) {
  return {
    savingPreferencesReducer: state.savingPreferencesReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeStep: (payload = { step: 0 }) => dispatch(changeStep(payload)),
    setWorkType: (payload = {}) => dispatch(setWorkType(payload)),
    setSavingType: (payload = {}) => dispatch(setSavingType(payload)),
    setSavingDetails: (payload = {}) => dispatch(setSavingDetails(payload)),
    preferencesInitialSetDone: () => dispatch(preferencesInitialSetDone())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(SavingPreferences)
);
