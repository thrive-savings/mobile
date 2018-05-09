import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Left, Right } from "native-base";

import SpecialButton from "../../../../components/SpecialButton";
import ModalTemplate from "../../../../components/ModalTemplate";

import getNumPadModalContent from "../../../../components/NumPad";
import getFieldEditorContent from "../../../../components/FieldEditor";

import GOAL_CATEGORIES from "../../../../globals/goalCategories";

import styles from "./styles";

const editIcon = require("../../../../../assets/Icons/PencilEdit/pencilEditButton.png");

const NEW_GOAL_DEFAULTS = {
  categoryName: "RainyDay",
  goalName: "GOAL NAME",
  goalAmount: 0
};

class EditGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newGoalName: "",
      newGoalAmount: 0,
      newDate: undefined,
      showNumPad: false,
      showNameEditor: false
    };

    this.numPadClicked = this.numPadClicked.bind(this);
    this.goalNameSet = this.goalNameSet.bind(this);
  }

  numPadClicked(value: int) {
    let goalAmount = this.state.goalAmount;
    goalAmount = value >= 0 ? goalAmount * 10 + value : Math.floor(goalAmount / 10);

    this.setState({ goalAmount });
  }

  goalNameSet(name: string) {
    this.setState({newGoalName: name});
  }

  render() {
    const { data } = this.props;

    let { categoryName, goalName, goalAmount } = data;
    if (!categoryName) { categoryName = NEW_GOAL_DEFAULTS.categoryName; }
    if (!goalName) { goalName = NEW_GOAL_DEFAULTS.goalName; }
    if (this.state.newGoalName) { goalName = this.state.newGoalName; }

    if (!goalAmount) { goalAmount = NEW_GOAL_DEFAULTS.goalAmount; }
    if (this.state.newGoalAmount) { goalAmount = this.state.newGoalAmount; }
    let goalAmountDollars = goalAmount / 100;
    goalAmountDollars = goalAmountDollars.toFixed(2);
    goalAmountDollars = "$" + goalAmountDollars.toLocaleString("en-US", {style: "currency", currency: "USD"});

    return (
      <View style={styles.container}>
        <Image source={GOAL_CATEGORIES[categoryName].icon} />

        <View style={styles.goalNameContainer}>
          <Text style={styles.goalNameText}>{goalName}</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({showNameEditor: true, showNumPad: false})}>
            <Image source={editIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <View style={styles.fieldRow}>
          <Left>
            <Text style={styles.fieldLabel}>Savings Goal:</Text>
          </Left>
          <Right>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({showNumPad : true, showNameEditor: false})}>
              <Text style={styles.fieldButtonText}>{goalAmountDollars}</Text>
            </TouchableOpacity>
          </Right>
        </View>

        <View style={styles.separator} />

        <View style={styles.fieldRow}>
          <Left>
            <Text style={styles.fieldLabel}>Desired Date:</Text>
          </Left>
          <Right>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.fieldButtonText}>Choose Date</Text>
            </TouchableOpacity>
          </Right>
        </View>

        <View style={styles.separator} />

        <View style={styles.fieldRow}>
          <Left>
            <Text style={styles.fieldLabel}>% of Total Savings:</Text>
          </Left>
          <Right>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.fieldButtonText}>50%</Text>
            </TouchableOpacity>
          </Right>
        </View>

        <Text style={styles.bottomText}>Choose how much of your total savings you want to allocate for this specific goal. </Text>

        <SpecialButton loading={false} state={1} text={"SET MY GOAL"} onClick={this.submit} />

        <ModalTemplate
          show={this.state.showNumPad}
          buttonText={"SUBMIT"}
          content={
            getNumPadModalContent({
              label: "Enter goal amount.",
              value: goalAmountDollars,
              onPress: this.numPadClicked
            })
          }
        />

        <ModalTemplate
          show={this.state.showNameEditor}
          buttonText={"SUBMIT"}
          content={
            getFieldEditorContent({
              label: "Enter goal name.",
              onChange: this.goalNameSet
            })
          }
        />
      </View>
    );
  }
}

EditGoal.propTypes = {
  newGoal: PropTypes.bool,
  data: PropTypes.object
};
EditGoal.defaultProps = {
  newGoal: false,
  data: {}
};

export default EditGoal;
