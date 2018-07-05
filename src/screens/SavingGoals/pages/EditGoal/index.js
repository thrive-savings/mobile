import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Left, Right, Toast } from "native-base";
import { connect } from "react-redux";

import DatePicker from "react-native-datepicker";

import amplitude from "../../../../globals/amplitude";

import SpecialButton from "../../../../components/SpecialButton";
import ModalTemplate from "../../../../components/ModalTemplate";

import getNumPadModalContent from "../../../../components/NumPad";
import getFieldEditorContent from "../../../../components/FieldEditor";

import { getDollarString } from "../../../../globals/helpers";
import GOAL_CATEGORIES from "../../../../globals/goalCategories";

import { addGoal, updateGoal } from "../../state/actions";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

const editIcon = require("../../../../../assets/Icons/PencilEdit/pencilEditButton.png");

const NEW_GOAL_DEFAULTS = {
  category: "RainyDay",
  name: "GOAL NAME",
  amount: 0,
  percentage: 25
};

class EditGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: "",
      newAmount: 0,
      newPercentage: 0,
      newDate: undefined,
      showNumPad: false,
      showNameEditor: false,
      showPercentPad: false
    };

    this.submit = this.submit.bind(this);

    this.numPadClicked = this.numPadClicked.bind(this);
    this.nameSet = this.nameSet.bind(this);
    this.percentagePadClicked = this.percentagePadClicked.bind(this);
  }

  componentDidMount() {
    amplitude.track(amplitude.events.EDIT_GOAL_VIEW, { "New Goal": this.props.newGoal });
  }

  submit() {
    const { newName, newAmount, newPercentage, newDate } = this.state;
    const { id, category, name, amount, percentage, desiredDate } = this.props.data;

    let errorMsg, data;

    if (this.props.newGoal) {
      if (!newName) {
        errorMsg = "Goal Name should be provided.";
      } else if (!newAmount) {
        errorMsg = "Goal Amount should be provided.";
      }

      if (!errorMsg) {
        data = {
          category: category,
          name: newName,
          amount: newAmount.toString(),
          percentage: newPercentage ? newPercentage.toString() : NEW_GOAL_DEFAULTS.percentage.toString(),
          desiredDate: newDate ? newDate : "infinite"
        };
      }
    } else {
      if (!errorMsg) {
        data = {
          category,
          id: id.toString(),
          name: newName ? newName : name,
          amount: newAmount ? newAmount.toString() : amount.toString(),
          percentage: newPercentage ? newPercentage.toString() : percentage.toString(),
          desiredDate: newDate ? newDate : desiredDate ? desiredDate : "infinite"
        };
      }
    }

    if (errorMsg) {
      Toast.show({
        text: errorMsg,
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
    } else {
      this.props.newGoal ? this.props.addGoal(data) : this.props.updateGoal(data);
    }
  }

  percentagePadClicked(value: int) {
    let newPercentage = this.state.newPercentage;
    if ((newPercentage > 10 && value >= 0) || (newPercentage === 10 && value > 0)) {
      Toast.show({
        text: "Percentage value should be in [1, 100] range.",
        duration: 2500,
        position: "top",
        type: "warning",
        textStyle: { textAlign: "center" }
      });
    } else {
      newPercentage = value >= 0 ? newPercentage * 10 + value : Math.floor(newPercentage / 10);
      this.setState({ newPercentage });
    }
  }

  numPadClicked(value: int) {
    let newAmount = this.state.newAmount;
    newAmount = value >= 0 ? newAmount * 10 + value : Math.floor(newAmount / 10);

    this.setState({ newAmount });
  }

  nameSet(name: string) {
    this.setState({newName: name});
  }

  render() {
    const { isAdding, isUpdating, error, errorMessage } = this.props.goalsReducer;
    let errorText = "";
    if (error) {
      const { errors } = errorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    const { data } = this.props;

    let { category, name, amount, percentage } = data;
    if (!category) { category = NEW_GOAL_DEFAULTS.category; }
    if (!name) { name = NEW_GOAL_DEFAULTS.name; }
    if (this.state.newName) { name = this.state.newName; }

    if (!amount) { amount = NEW_GOAL_DEFAULTS.amount; }
    if (this.state.newAmount) { amount = this.state.newAmount; }
    const amountDollars = getDollarString(amount);

    if (!percentage) { percentage = NEW_GOAL_DEFAULTS.percentage; }
    if (this.state.newPercentage) { percentage = this.state.newPercentage; }
    const percentageStr = percentage + "%";

    return (
      <View style={[styles.container, globalStyles.shadow]}>
        <Image source={GOAL_CATEGORIES[category].icon} />

        <TouchableOpacity
          activeOpacity={0.6} style={styles.nameContainer}
          onPress={() => this.setState({ showNameEditor: true, showNumPad: false, showPercentPad: false })}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
        >
          <Text style={styles.nameText}>{name.toUpperCase()}</Text>
          <Image source={editIcon} />
        </TouchableOpacity>

        <View style={styles.separator} />

        <View style={styles.fieldRow}>
          <Left>
            <Text style={styles.fieldLabel}>Savings Goal:</Text>
          </Left>
          <Right>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showNumPad : true, showNameEditor: false, showPercentPad: false })}>
              <Text style={styles.fieldButtonText}>{amountDollars}</Text>
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
              date={this.state.newDate}
              placeholder="Choose Date"
              format="YYYY-MM-DD"
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
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showPercentPad: true, showNumPad: false, showNameEditor: false })} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
              <Text style={styles.fieldButtonText}>{percentageStr}</Text>
            </TouchableOpacity>
          </Right>
        </View>

        <Text style={styles.bottomText}>Choose how much of your total savings you want to allocate for this specific goal. </Text>

        {error && <Text style={styles.formErrorText}>{errorText}</Text>}

        <SpecialButton loading={isAdding || isUpdating} text={"SET MY GOAL"} onClick={this.submit} />

        <ModalTemplate
          show={this.state.showNumPad}
          buttonText={"SUBMIT"}
          onClose={() => this.setState({ showNumPad: false })}
          content={
            getNumPadModalContent({
              label: "Enter goal amount.",
              value: getDollarString(this.state.newAmount),
              onPress: this.numPadClicked
            })
          }
        />

        <ModalTemplate
          show={this.state.showNameEditor}
          buttonText={"SUBMIT"}
          onClose={() => this.setState({ showNameEditor: false })}
          content={
            getFieldEditorContent({
              label: "Enter goal name.",
              onChange: this.nameSet
            })
          }
        />

        <ModalTemplate
          show={this.state.showPercentPad}
          buttonText={"SUBMIT"}
          onClose={() => this.setState({ showPercentPad: false })}
          content={
            getNumPadModalContent({
              label: "Enter saving percentage.",
              value: this.state.newPercentage + "%",
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


function mapStateToProps (state) {
  return {
    goalsReducer: state.goalsReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addGoal: (payload = {}) => dispatch(addGoal(payload)),
    updateGoal: (payload = {}) => dispatch(updateGoal(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGoal);
