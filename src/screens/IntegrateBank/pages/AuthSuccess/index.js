import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ScrollView, Image, Text } from "react-native";
import { connect } from "react-redux";

import Dots from "../../../../components/Dots";
import SpecialButton from "../../../../components/SpecialButton";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

import { ACTION_TYPES } from "../../state/constants";

const thriveBot = require("../../../../../assets/Icons/ThriveBot/thriveBot.png");

class AuthSuccess extends Component {
  continue() {
    const { actionType } = this.props;
    this.props.updateConnectionsData();
    if (actionType !== ACTION_TYPES.INITAL) {
      this.props.goBack();
    }
  }

  getContent() {
    const {
      actionType,
      integrateBankReducer: { connection: { sync: { status } = {} } = {} }
    } = this.props;

    const content = {
      title: "SUCCESS!",
      description:
        "You’ve successfully linked your Thrive Savings account with your Bank."
    };

    if (actionType !== ACTION_TYPES.SET_DEFAULT) {
      if (!status || ["postponed", "maintenance"].includes(status)) {
        content.title = "...";
        content.description = "Still loading, give us some more time.";
      } else if (status !== "good") {
        content.title = "...";
        content.description = "Additional Information Required";
      }
    }

    return content;
  }

  render() {
    const { actionType } = this.props;
    const { title, description } = this.getContent();

    return (
      <ScrollView
        contentContainerStyle={[styles.container, globalStyles.shadow]}
        showsVerticalScrollIndicator={false}
      >
        <Dots step={3} count={3} />

        <Text style={styles.titleText}>
          {title}
        </Text>
        <Image source={thriveBot} style={styles.botSymbol} />
        <Text style={styles.secondaryTitleText}>
          {description}
        </Text>
        {actionType === ACTION_TYPES.INITAL &&
          <Text style={styles.regularText}>
            You can link more banks later on.
          </Text>}

        <View style={styles.separator} />
        <SpecialButton text="CONTINUE" onClick={this.continue.bind(this)} />
      </ScrollView>
    );
  }
}

AuthSuccess.propTypes = {
  updateConnectionsData: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  actionType: PropTypes.oneOf(Object.values(ACTION_TYPES))
};
AuthSuccess.defaultProps = {
  updateConnectionsData: () => {},
  goBack: () => {},
  actionType: ACTION_TYPES.INITIAL
};

function mapStateToProps(state) {
  return {
    integrateBankReducer: state.integrateBankReducer
  };
}

export default connect(mapStateToProps)(AuthSuccess);
