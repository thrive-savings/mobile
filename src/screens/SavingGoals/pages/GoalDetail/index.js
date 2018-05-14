import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Card } from "native-base";
import { connect } from "react-redux";

import ModalTemplate from "../../../../components/ModalTemplate";
import ProgressBar from "../../../../components/ProgressBar";

import { getDollarString, getSplitDollarStrings } from "../../../../globals/helpers";
import GOAL_CATEGORIES from "../../../../globals/goalCategories";

import { deleteGoal } from "../../state/actions";

import styles from "./styles";

const infoIcon = require("../../../../../assets/Icons/Info/information.png");


class GoalDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfoModal: false
    };
  }

  getInfoModalContent() {
    return (
      <View>
        <Text style={[styles.infoContentText, styles.bottomPadder]}>All Thrive users have a default Rainy Day Fund to help reduce their financial anxiety and jumpstart their saving goals!</Text>
        <Text style={styles.infoContentText}>Your Thrive Savings will automatically go here unless you create additional goals.</Text>
      </View>
    );
  }

  renderGoalInfoBox() {
    const { category, name, amount, savedAmount, createdAt } = this.props.data;
    const { beforeDot: savedAmountBD, afterDot: savedAmountAD } = getSplitDollarStrings(savedAmount);
    const createdAtDate = new Date(createdAt);

    return (
      <Card style={styles.infoBox}>
        <Image source={GOAL_CATEGORIES[category].icon} />
        {
          category === "RainyDay" &&
          <TouchableOpacity activeOpacity={0.6} style={styles.infoIconButton} onPress={() => this.setState({showInfoModal: true})}>
            <Image source={infoIcon} />
          </TouchableOpacity>
        }
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.amountTextHolder}>
          <Text style={styles.amountMainText}>{savedAmountBD}</Text>
          <Text style={styles.amountRemainderText}>{savedAmountAD}</Text>
        </View>

        <View style={styles.progressContainer}>
          <ProgressBar progress={savedAmount / amount} />
          <View style={styles.progressTextsHolder}>
            <Text style={styles.progressBarText}>$0</Text>
            <Text style={styles.progressBarText}>{getDollarString(amount)}</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.extraInfoContainer}>
          <View style={styles.extraInfoLeftView}>
            <Text style={styles.extraInfoLabel}>Saving since</Text>
            <Text style={styles.extraInfoText}>{createdAtDate.toDateString().substring(4)}</Text>
          </View>
          <View style={styles.extraInfoRightView}>
            <Text style={styles.extraInfoLabel}>Remaining</Text>
            <Text style={styles.extraInfoText}>{getDollarString(Math.max(0, amount - savedAmount))}</Text>
          </View>
        </View>

        <Card style={styles.editButtonCard}>
          <TouchableOpacity activeOpacity={0.6} style={styles.editButtonContainer} onPress={() => this.props.onEditGoal()}>
            <Text style={styles.editButtonText}>EDIT GOAL</Text>
          </TouchableOpacity>
        </Card>
      </Card>
    );
  }

  render() {
    const isDeleting = this.props.goalsReducer.isDeleting;
    return (
      <View>
        {this.renderGoalInfoBox()}
        {
          this.props.data.category !== "RainyDay" &&
          (isDeleting
            ?
              <View style={styles.deleteContainer}>
                <Text style={styles.deleteBtnText}>Deleting...</Text>
              </View>
            :
              <TouchableOpacity
                activeOpacity={0.6} style={styles.deleteContainer}
                onPress={() => this.props.deleteGoal({goalID: this.props.data.id.toString()})}
              >
                <Text style={styles.deleteBtnText}>Delete Goal</Text>
              </TouchableOpacity>)
        }
        <ModalTemplate
          show={this.state.showInfoModal}
          buttonVisible={false}
          content={this.getInfoModalContent()}
          onClose={() => this.setState({showInfoModal: false})}
        />
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
    deleteGoal: (payload = {}) => dispatch(deleteGoal(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalDetail);
