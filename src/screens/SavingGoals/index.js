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

import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const backIcon = require("../../../assets/Icons/Back/back.png");

class SavingGoals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: "GoalDetail"
    };
  }

  renderContent() {
    // const { actionType } = this.props.navigation.state.params;
    // console.log(`Rendering Saving Goals Content with ${actionType}`);

    switch (this.state.activePage) {
      case "ChooseCategory":
        return <ChooseCategory />;
      case "GoalDetail":
        return <GoalDetail />;
      default:
        return <ChooseCategory />;
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
