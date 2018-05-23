import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ImageBackground, StatusBar } from "react-native";
import { connect } from "react-redux";
import { Content } from "native-base";

import Header from "../../components/Header";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";

import { changeStep, setWorkType, setSavingType, setSavingDetails } from "./state/actions";

import WorkType from "./pages/WorkType";
import SavingType from "./pages/SavingType";
import FixedPlan from "./pages/FixedPlan";
import FlexPlan from "./pages/FlexPlan";
import AllSet from "./pages/AllSet";

import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class SavingPreferences extends Component {
  onBackArrowClick() {
    const { navigation, savingPreferencesReducer: { step } } = this.props;
    if (step) {
      this.props.changeStep({step: step - 1});
    } else {
      navigation.goBack();
    }
  }

  render() {
    const { step, values: { savingType } } = this.props.savingPreferencesReducer;

    let body;
    switch (step) {
      case 0:
        body =
          <WorkType
            reducer={this.props.savingPreferencesReducer}
            save={this.props.setWorkType}
          />;
        break;
      case 1:
        body =
          <SavingType
            reducer={this.props.savingPreferencesReducer}
            save={this.props.setSavingType}
          />;
        break;
      case 2:
        body = savingType === "Thrive Flex"
          ? <FlexPlan
              changeStep={this.props.changeStep}
            />
          : <FixedPlan
              changeStep={this.props.changeStep}
              save={this.props.setSavingDetails}
              reducer={this.props.savingPreferencesReducer}
            />;
        break;
      case 3:
        body = <AllSet navigation={this.props.navigation}/>;
        break;
    }

    return (
      <View style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
        <ImageBackground source={bg} style={globalStyles.background}>
          <Header
            navigation={this.props.navigation}
            button="back" onButtonPress={this.onBackArrowClick.bind(this)}
            content="text" text="SAVING PREFERENCES"
          />
          <Content showsVerticalScrollIndicator={false} style={styles.contentContainer}>
            {body}
          </Content>
        </ImageBackground>
      </View>
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
    setSavingDetails: (payload = {}) => dispatch(setSavingDetails(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SavingPreferences);
