import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import { connect } from "react-redux";

import Header from "../../components/Header";
import addStatusBar from "../../components/StatusBar";

import ChooseCategory from "./pages/ChooseCategory";
import GoalDetail from "./pages/GoalDetail";
import EditGoal from "./pages/EditGoal";

import { updateOnboardingStep } from "../Login/state/actions";
import { setSucceedFlagOff } from "./state/actions";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class SavingGoals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      data: {}
    };
  }

  categoryChosen(category) {
    this.setState({
      step: 1,
      data: { category }
    });
  }

  getContent() {
    let actionType = "Add";
    let data;
    const navigation = this.props.navigation;
    if (navigation.state && navigation.state.params) {
      const navigationParams = navigation.state.params;
      actionType = navigationParams.actionType;
      data = navigationParams.data;
    }
    const { step, data: newData } = this.state;

    switch (actionType) {
      case "Add":
        switch (step) {
          case 0:
            return {
              title: "CREATE A SAVINGS GOAL",
              component: (
                <ChooseCategory submit={this.categoryChosen.bind(this)} />
              )
            };
          case 1:
            return {
              title: "CUSTOMIZE YOUR GOAL",
              component: <EditGoal newGoal data={newData} />
            };
          default:
            return;
        }
      case "Detail":
        switch (step) {
          case 0:
            return {
              title: "MY SAVINGS GOAL",
              component: (
                <GoalDetail
                  data={data}
                  onEditGoal={() => this.setState({ step: 1 })}
                />
              )
            };
          case 1:
            return {
              title: "CUSTOMIZE YOUR GOAL",
              component: <EditGoal data={data} />
            };
          default:
            return;
        }
      default:
        return;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.goalsReducer.serverCallSucceeded) {
      this.props.setSucceedFlagOff();
      this.props.navigation.goBack();
    }
  }

  backArrowPressed() {
    if (this.state.step > 0) {
      this.setState({ step: this.state.step - 1 });
    } else {
      if (this.props.onboardingStep === "SavingGoals") {
        this.props.updateOnboardingStep({
          data: { onboardingStep: "SavingPreferences" }
        });
      } else {
        this.props.navigation.goBack();
      }
    }
  }

  render() {
    const { title, component } = this.getContent();

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header
          navigation={this.props.navigation}
          onButtonPress={this.backArrowPressed.bind(this)}
          button="back"
          content="text"
          text={title}
        />
        <View style={styles.contentContainer}>
          {component}
        </View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    onboardingStep: state.authReducer.data.authorized.onboardingStep,
    goalsReducer: state.goalsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateOnboardingStep: payload => dispatch(updateOnboardingStep(payload)),
    setSucceedFlagOff: () => dispatch(setSucceedFlagOff())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(SavingGoals)
);
