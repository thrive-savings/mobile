import React, { Component } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  StatusBar
} from "react-native";
import { connect } from "react-redux";

import ChooseCategory from "./pages/ChooseCategory";
import GoalDetail from "./pages/GoalDetail";
import EditGoal from "./pages/EditGoal";

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

  categoryChosen(categoryName) {
    this.setState({
      step: 1,
      data: { categoryName }
    });
  }

  renderContent() {
    const params = this.props.navigation.state.params;
    const { step, data } = this.state;

    switch (params.actionType) {
      case "Add":
        switch (step) {
          case 0:
            return <ChooseCategory submit={this.categoryChosen.bind(this)} />;
          case 1:
            return <EditGoal newGoal data={data} />;
          default:
            return;
        }
      case "Detail":
        switch (step) {
          case 0:
            return <GoalDetail />;
          case 1:
            return <EditGoal />;
          default:
            return;
        }
      default:
        return;
    }
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <Image source={bg} style={styles.background}>
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()} style={styles.headerBackButton}>
              <Image source={backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTitleText}>CREATE A SAVINGS GOAL</Text>
          </View>
          <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            {this.renderContent()}
          </ScrollView>
        </Image>
      </View>
    );
  }
}


function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps (dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SavingGoals);
