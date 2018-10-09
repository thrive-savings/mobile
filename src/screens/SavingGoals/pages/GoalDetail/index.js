import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { connect } from "react-redux";

import amplitude from "../../../../globals/amplitude";

import ModalTemplate from "../../../../components/ModalTemplate";
import ProgressBar from "../../../../components/ProgressBar";

import {
  getDollarString,
  getSplitDollarStrings,
  convertWeeks
} from "../../../../globals/helpers";
import GOAL_CATEGORIES from "../../../../globals/goalCategories";

import { deleteGoal, withdrawGoal } from "../../state/actions";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

const filledStarIcon = require("../../../../../assets/Icons/Star/Blue/star.png");
const emptyStarIcon = require("../../../../../assets/Icons/Star/Empty/star.png");

class GoalDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfoModal: false,
      showConfirmationModal: false
    };
  }

  componentDidMount() {
    amplitude.track(amplitude.events.GOAL_DETAIL_VIEW);
  }

  getInfoModalContent() {
    return (
      <View>
        <Text style={[styles.infoContentText, styles.bottomPadder]}>
          Prioritizing a goal increases the amount Thrive will set aside towards
          that specific goal.
        </Text>
        <Text style={styles.infoContentText}>
          You can prioritize a goal by editing your goal.
        </Text>
      </View>
    );
  }

  getConfirmationModalContent() {
    return (
      <View>
        <Text style={[styles.infoContentText, styles.bottomPadder]}>
          Congratulations!! You've hit GOAL! Funds will be sent back to your
          linked back account in 1 business day.
        </Text>
        <Text style={[styles.infoContentText, styles.bottomPadder]}>
          Please confirm.
        </Text>
      </View>
    );
  }

  renderGoalInfoBox() {
    const {
      category,
      name,
      amount,
      progress,
      weeksLeft,
      boosted
    } = this.props.data;
    const {
      beforeDot: progressBD,
      afterDot: progressAD
    } = getSplitDollarStrings(progress);

    const isWithdrawing = this.props.goalsReducer.isWithdrawing;
    return (
      <View style={[styles.infoBox, globalStyles.shadow]}>
        <Image source={GOAL_CATEGORIES[category].icon} />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.infoIconButton}
          onPress={() => this.setState({ showInfoModal: true })}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Image source={boosted ? filledStarIcon : emptyStarIcon} />
        </TouchableOpacity>
        <Text style={styles.nameText}>
          {name}
        </Text>
        <View style={styles.amountTextHolder}>
          <Text style={styles.amountMainText}>
            {progressBD}
          </Text>
          <Text style={styles.amountRemainderText}>
            {progressAD}
          </Text>
        </View>

        <View style={styles.progressContainer}>
          <ProgressBar progress={progress / amount} />
          <View style={styles.progressTextsHolder}>
            <Text style={styles.progressBarText}>$0</Text>
            <Text style={styles.progressBarText}>
              {getDollarString(amount, true)}
            </Text>
          </View>
        </View>

        <View style={styles.separator} />

        {progress < amount
          ? <View style={styles.extraInfoContainer}>
              <View style={styles.extraInfoLeftView}>
                <Text style={styles.extraInfoLabel}>Time till goal</Text>
                <Text style={styles.extraInfoText}>
                  {weeksLeft && weeksLeft >= 0
                    ? convertWeeks(weeksLeft)
                    : ". . ."}
                </Text>
              </View>
              <View style={styles.extraInfoRightView}>
                <Text style={styles.extraInfoLabel}>Remaining</Text>
                <Text style={styles.extraInfoText}>
                  {getDollarString(Math.max(0, amount - progress))}
                </Text>
              </View>
            </View>
          : <View style={styles.extraInfoContainer}>
              <View style={styles.extraInfoLeftView}>
                <Text style={styles.extraInfoLabel}>Goal Completed:</Text>
              </View>
              {isWithdrawing
                ? <View style={styles.extraInfoRightView}>
                    <Text style={styles.extraInfoText}>Withdrawing...</Text>
                  </View>
                : <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.extraInfoRightView}
                    onPress={() =>
                      this.setState({ showConfirmationModal: true })}
                  >
                    <Text style={styles.extraInfoText}>Withdraw</Text>
                  </TouchableOpacity>}
            </View>}

        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.editButtonContainer, globalStyles.shadow]}
          onPress={() => this.props.onEditGoal()}
        >
          <Text style={styles.editButtonText}>EDIT GOAL</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const isDeleting = this.props.goalsReducer.isDeleting;
    return (
      <View>
        {this.renderGoalInfoBox()}
        {this.props.data.category !== "RainyDay" &&
          (isDeleting
            ? <View style={styles.deleteContainer}>
                <Text style={styles.deleteBtnText}>Deleting...</Text>
              </View>
            : <TouchableOpacity
                activeOpacity={0.6}
                style={styles.deleteContainer}
                onPress={() =>
                  this.props.deleteGoal({
                    goalID: this.props.data.id.toString()
                  })}
              >
                <Text style={styles.deleteBtnText}>Delete Goal</Text>
              </TouchableOpacity>)}
        <ModalTemplate
          show={this.state.showInfoModal}
          buttonVisible={false}
          content={this.getInfoModalContent()}
          onClose={() => this.setState({ showInfoModal: false })}
        />
        <ModalTemplate
          show={this.state.showConfirmationModal}
          buttonText={"YES"}
          onButtonClick={() => {
            this.props.withdrawGoal({
              goalID: this.props.data.id.toString()
            });
            this.setState({ showConfirmationModal: false });
          }}
          content={this.getConfirmationModalContent()}
          onClose={() => this.setState({ showConfirmationModal: false })}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    goalsReducer: state.goalsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteGoal: (payload = {}) => dispatch(deleteGoal(payload)),
    withdrawGoal: (payload = {}) => dispatch(withdrawGoal(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalDetail);
