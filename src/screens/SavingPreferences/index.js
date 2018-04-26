import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Text,
  View
} from "native-base";

import styles from "./styles";

import { changeStep, setWorkType, setSavingType, setSavingDetails } from "./state/actions";

import WorkType from "./pages/WorkType";
import SavingType from "./pages/SavingType";
import FixedPlan from "./pages/FixedPlan";
import FlexPlan from "./pages/FlexPlan";
import AllSet from "./pages/AllSet";

import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const backIcon = require("../../../assets/Icons/Back/back.png");


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
        body = savingType === "flex"
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
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
        <Image
          source={bg}
          style={styles.background}
        >
          <View style={styles.headerContainer}>
            <TouchableOpacity activeOpacity={0.6} onPress={this.onBackArrowClick.bind(this)} style={styles.headerIcon}>
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
