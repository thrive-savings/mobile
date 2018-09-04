import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Toast } from "native-base";
import { connect } from "react-redux";

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
  amount: 0
};

class EditGoal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: "",
      newAmount: 0,
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
    const { newName, newAmount } = this.state;
    const { id, category, name, amount } = this.props.data;

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
          amount: newAmount.toString()
        };
      }
    } else {
      if (!errorMsg) {
        data = {
          category,
          id: id.toString(),
          name: newName ? newName : name,
          amount: newAmount ? newAmount.toString() : amount.toString()
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
        errorText = "Server Error!";
      }
    }

    const { data } = this.props;

    let { category, name, amount } = data;
    if (!category) {
      category = NEW_GOAL_DEFAULTS.category;
    }
    if (!name) {
      name = NEW_GOAL_DEFAULTS.name;
    }
    if (this.state.newName) {
      name = this.state.newName;
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
        <Image source={GOAL_CATEGORIES[category].icon} />

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
          <Text style={styles.labelText}>I want to save</Text>
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
          <Text style={styles.descText}>
            We calculate how long it'll take to reach your goal after your first
            save.
          </Text>
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
  data: PropTypes.object
};
EditGoal.defaultProps = {
  newGoal: false,
  data: {}
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
