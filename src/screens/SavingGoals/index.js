import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  StatusBar
} from "react-native";
import { connect } from "react-redux";

import ChooseCategory from "./pages/ChooseCategory";
import GoalDetail from "./pages/GoalDetail";
import EditGoal from "./pages/EditGoal";

import { getGoals, setSucceedFlagOff } from "./state/actions";

import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const backIcon = require("../../../assets/Icons/Back/back.png");

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
    const { actionType, data } = this.props.navigation.state.params;
    const { step, data: newData } = this.state;

    switch (actionType) {
      case "Add":
        switch (step) {
          case 0:
            return {
              title: "CREATE A SAVINGS GOAL",
              component: <ChooseCategory submit={this.categoryChosen.bind(this)} />
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
              component: <GoalDetail data={data} onEditGoal={() => this.setState({step: 1})} />
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
      this.setState({ step: this.state.step - 1});
    } else {
      this.props.navigation.goBack();
    }
  }

  render() {
    const { title, component } = this.getContent();

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={styles.background}>
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.backArrowPressed()} style={styles.headerBackButton}>
              <Image source={backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTitleText}>{title}</Text>
          </View>
          <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            {component}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}


function mapStateToProps (state) {
  return {
    goalsReducer: state.goalsReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getGoals: (payload = {}) => dispatch(getGoals(payload)),
    setSucceedFlagOff: () => dispatch(setSucceedFlagOff())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SavingGoals);
