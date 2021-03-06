import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Toast } from "native-base";
import { connect } from "react-redux";
import CheckBox from "react-native-check-box";

import amplitude from "../../../../globals/amplitude";

import SpecialButton from "../../../../components/SpecialButton";
import ModalTemplate from "../../../../components/ModalTemplate";

import getNumPadModalContent from "../../../../components/NumPad";
import getFieldEditorContent from "../../../../components/FieldEditor";

import globalErrorMessage from "../../../../globals/errorMessage";
import { getDollarString, convertWeeks } from "../../../../globals/helpers";
import GOAL_CATEGORIES from "../../../../globals/goalCategories";

import { addGoal, updateGoal } from "../../state/actions";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

const tick = require("../../../../../assets/Icons/Checkbox/tick.png");
const editIcon = require("../../../../../assets/Icons/PencilEdit/pencilEditButton.png");

const NEW_GOAL_DEFAULTS = {
  category: "RainyDay",
  amount: 0,
  boost: false
};

class EditGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: "",
      newAmount: 0,
      boostSet: false,
      boostValue: props.newGoal ? false : props.data.boosted,
      showNumPad: false,
      showNameEditor: false
    };

    this.submit = this.submit.bind(this);

    this.numPadClicked = this.numPadClicked.bind(this);
    this.nameSet = this.nameSet.bind(this);
  }

  componentDidMount() {
    amplitude.track(amplitude.events.EDIT_GOAL_VIEW, {
      "New Goal": this.props.newGoal
    });
  }

  submit() {
    const { newName, newAmount, boostSet, boostValue } = this.state;
    const { id, category, name, amount, boosted } = this.props.data;

    let errorMsg, data;

    if (this.props.newGoal) {
      if (!newAmount) {
        errorMsg = "Goal Amount should be provided.";
      }

      if (!errorMsg) {
        data = {
          category: category,
          name: newName || GOAL_CATEGORIES[category].name,
          amount: newAmount.toString(),
          boosted: boostValue
        };
      }
    } else {
      if (!errorMsg) {
        data = {
          category,
          id: id.toString(),
          name: newName ? newName : name,
          amount: newAmount ? newAmount.toString() : amount.toString(),
          boosted: boostSet ? boostValue : boosted
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
      this.props.newGoal
        ? this.props.addGoal(data)
        : this.props.updateGoal(data);
    }
  }

  numPadClicked(value) {
    let newAmount = this.state.newAmount / 100;
    newAmount =
      value >= 0 ? newAmount * 10 + value : Math.floor(newAmount / 10);
    newAmount *= 100;

    this.setState({ newAmount });
  }

  nameSet(name) {
    this.setState({ newName: name });
  }

  render() {
    const {
      isAdding,
      isUpdating,
      error,
      errorMessage
    } = this.props.goalsReducer;
    let errorText = "";
    if (error) {
      const { errors } = errorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = globalErrorMessage;
      }
    }

    const { newGoal, data } = this.props;

    let { category, name, amount, weeksLeft, boosted: boost } = data;
    if (!category) {
      category = NEW_GOAL_DEFAULTS.category;
    }
    if (!name) {
      name = GOAL_CATEGORIES[category].name;
    }
    if (this.state.newName) {
      name = this.state.newName;
    }
    if (!boost) {
      boost = NEW_GOAL_DEFAULTS.boost;
    }
    if (this.state.boostSet) {
      boost = this.state.boostValue;
    }
    if (!amount) {
      amount = NEW_GOAL_DEFAULTS.amount;
    }
    if (this.state.newAmount) {
      amount = this.state.newAmount;
    }
    const amountDollars = getDollarString(amount, true);

    return (
      <View style={[styles.container, globalStyles.shadow]}>
        {
          newGoal
            ? <Image source={GOAL_CATEGORIES[category].icon} />
            : <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.onCategoryEdit()}>
                <Image source={GOAL_CATEGORIES[category].icon} />
              </TouchableOpacity>
        }

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.nameContainer}
          onPress={() =>
            this.setState({
              showNameEditor: true,
              showNumPad: false
            })}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Text style={styles.nameText}>
            {name.toUpperCase()}
          </Text>
          <Image source={editIcon} />
        </TouchableOpacity>

        <View style={styles.separator} />

        <View style={styles.contentView}>
          <Text style={styles.regularText}>I want to save</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.amountBox}
            onPress={() =>
              this.setState({
                showNumPad: true,
                showNameEditor: false
              })}
          >
            <Text style={styles.amountText}>
              {amountDollars}
            </Text>
          </TouchableOpacity>
          <View style={styles.checkboxRow}>
            <Text style={styles.checkboxText}>
              Do you want to prioritize the goal?
            </Text>
            <CheckBox
              onClick={() =>
                this.setState({
                  boostValue: !this.state.boostValue,
                  boostSet: true
                })}
              isChecked={boost}
              unCheckedImage={
                <View
                  style={styles.checkbox}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                />
              }
              checkedImage={
                <View
                  style={styles.checkbox}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                  <Image source={tick} style={styles.checkboxTick} />
                </View>
              }
            />
          </View>
          {weeksLeft && weeksLeft >= 0
            ? <Text style={styles.regularText}>
                Based on how you save, you will reach your goal in
                <Text style={styles.blueText}>{` ${convertWeeks(
                  weeksLeft
                )}`}</Text>
              </Text>
            : <Text style={styles.regularText}>
                We calculate how long it'll take to reach your goal after your
                next save
              </Text>}
        </View>

        {error &&
          <Text style={styles.formErrorText}>
            {errorText}
          </Text>}

        <SpecialButton
          loading={isAdding || isUpdating}
          text={"SET MY GOAL"}
          onClick={this.submit}
        />

        <ModalTemplate
          show={this.state.showNumPad}
          buttonText={"SUBMIT"}
          onClose={() => this.setState({ showNumPad: false })}
          content={getNumPadModalContent({
            label: "Enter goal amount.",
            value: getDollarString(this.state.newAmount, true),
            onPress: this.numPadClicked
          })}
        />

        <ModalTemplate
          show={this.state.showNameEditor}
          buttonText={"SUBMIT"}
          onClose={() => this.setState({ showNameEditor: false })}
          content={getFieldEditorContent({
            label: "Enter goal name.",
            onChange: this.nameSet
          })}
        />
      </View>
    );
  }
}

EditGoal.propTypes = {
  newGoal: PropTypes.bool,
  data: PropTypes.object,
  onCategoryEdit: PropTypes.func
};
EditGoal.defaultProps = {
  newGoal: false,
  data: {},
  onCategoryEdit: () => {}
};

function mapStateToProps(state) {
  return {
    goalsReducer: state.goalsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addGoal: (payload = {}) => dispatch(addGoal(payload)),
    updateGoal: (payload = {}) => dispatch(updateGoal(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGoal);
