import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Left, Right, Toast } from "native-base";

import DatePicker from "react-native-datepicker";

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
  goalAmount: 0,
  goalPercentage: 30
};

class EditGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newGoalName: "",
      newGoalAmount: 0,
      newGoalPercentage: 0,
      newDate: undefined,
      showNumPad: false,
      showNameEditor: false,
      showPercentPad: false
    };

    this.numPadClicked = this.numPadClicked.bind(this);
    this.goalNameSet = this.goalNameSet.bind(this);
    this.percentagePadClicked = this.percentagePadClicked.bind(this);
  }

  percentagePadClicked(value: int) {
    let newGoalPercentage = this.state.newGoalPercentage;
    if ((newGoalPercentage > 10 && value >= 0) || (newGoalPercentage === 10 && value > 0)) {
      Toast.show({
        text: "Percentage value should be in [1, 100] range.",
        duration: 2500,
        position: "top",
        type: "warning",
        textStyle: { textAlign: "center" }
      });
    } else {
      newGoalPercentage = value >= 0 ? newGoalPercentage * 10 + value : Math.floor(newGoalPercentage / 10);
      this.setState({ newGoalPercentage });
    }
  }

  numPadClicked(value: int) {
    let newGoalAmount = this.state.newGoalAmount;
    newGoalAmount = value >= 0 ? newGoalAmount * 10 + value : Math.floor(newGoalAmount / 10);

    this.setState({ newGoalAmount });
  }

  goalNameSet(name: string) {
    this.setState({newGoalName: name});
  }

  render() {
    const { data } = this.props;

    let { categoryName, goalName, goalAmount, goalPercentage } = data;
    if (!categoryName) { categoryName = NEW_GOAL_DEFAULTS.categoryName; }
    if (!goalName) { goalName = NEW_GOAL_DEFAULTS.goalName; }
    if (this.state.newGoalName) { goalName = this.state.newGoalName; }

    if (!goalAmount) { goalAmount = NEW_GOAL_DEFAULTS.goalAmount; }
    if (this.state.newGoalAmount) { goalAmount = this.state.newGoalAmount; }
    let newGoalAmountDollars = this.state.newGoalAmount / 100;
    newGoalAmountDollars = newGoalAmountDollars.toFixed(2);
    newGoalAmountDollars = "$" + newGoalAmountDollars.toLocaleString("en-US", {style: "currency", currency: "USD"});
    let goalAmountDollars = goalAmount / 100;
    goalAmountDollars = goalAmountDollars.toFixed(2);
    goalAmountDollars = "$" + goalAmountDollars.toLocaleString("en-US", {style: "currency", currency: "USD"});

    if (!goalPercentage) { goalPercentage = NEW_GOAL_DEFAULTS.goalPercentage; }
    if (this.state.newGoalPercentage) { goalPercentage = this.state.newGoalPercentage; }
    const goalPercentageStr = goalPercentage + "%";

    return (
      <View style={styles.container}>
        <Image source={GOAL_CATEGORIES[categoryName].icon} />

        <View style={styles.goalNameContainer}>
          <Text style={styles.goalNameText}>{goalName}</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showNameEditor: true, showNumPad: false, showPercentPad: false })}>
            <Image source={editIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <View style={styles.fieldRow}>
          <Left>
            <Text style={styles.fieldLabel}>Savings Goal:</Text>
          </Left>
          <Right>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showNumPad : true, showNameEditor: false, showPercentPad: false })}>
              <Text style={styles.fieldButtonText}>{goalAmountDollars}</Text>
            </TouchableOpacity>
          </Right>
        </View>

        <View style={styles.separator} />

        <View style={[styles.fieldRow, styles.datePickerContainer]}>
          <Left>
            <Text style={styles.fieldLabel}>Desired Date:</Text>
          </Left>
          <Right>
            <DatePicker
              customStyles={{
                placeholderText: styles.datePickerPlaceholder,
                dateText: styles.datePickerText,
                dateInput: styles.datePickerInput
              }}
              style={styles.dateOfBirth}
              date={this.state.date}
              placeholder="Choose Date"
              format="YYYY-MM-DD"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              androidMode="spinner"
              onDateChange={date => this.setState({ newDate: date })}
            />
          </Right>
        </View>

        <View style={styles.separator} />

        <View style={styles.fieldRow}>
          <Left>
            <Text style={styles.fieldLabel}>% of Total Savings:</Text>
          </Left>
          <Right>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showPercentPad: true, showNumPad: false, showNameEditor: false })}>
              <Text style={styles.fieldButtonText}>{goalPercentageStr}</Text>
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
              value: newGoalAmountDollars,
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

        <ModalTemplate
          show={this.state.showPercentPad}
          buttonText={"SUBMIT"}
          content={
            getNumPadModalContent({
              label: "Enter saving percentage.",
              value: this.state.newGoalPercentage + "%",
              onPress: this.percentagePadClicked
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
