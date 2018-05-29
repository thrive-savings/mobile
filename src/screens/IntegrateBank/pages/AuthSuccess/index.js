import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  ScrollView,
  Image,
  Text
} from "react-native";
import { connect } from "react-redux";

import Dots from "../../../../components/Dots";
import SpecialButton from "../../../../components/SpecialButton";

import { updateUserAccount } from "../../state/actions";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

const thriveBot = require("../../../../../assets/Icons/ThriveBot/thriveBot.png");

class AuthSuccess extends Component {
  continue() {
    this.props.updateUserAccount(this.props.integrateBankReducer.defaultAccountData);
    this.props.next();
  }

  render() {
    return (
      <ScrollView contentContainerStyle={[styles.container, globalStyles.shadow]} showsVerticalScrollIndicator={false}>
        <Dots step={3} count={3} />

        <Text style={styles.titleText}>SUCCESS!</Text>
        <Image source={thriveBot} style={styles.botSymbol} />
        <Text style={styles.secondaryTitleText}>You’ve successfully linked your Thrive Savings account with your Bank.</Text>
        <Text style={styles.regularText}>Now that your account is all set up, you can create custom saving goals and choose how you prefer to save!</Text>

        <View style={styles.separator} />
        <SpecialButton text={"GO TO ACCOUNT"} onClick={this.continue.bind(this)} />
      </ScrollView>
    );
  }
}

AuthSuccess.propTypes = {
  next: PropTypes.func
};
AuthSuccess.defaultProps = {
  next: () => {}
};

function mapStateToProps (state) {
  return {
    integrateBankReducer: state.integrateBankReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    updateUserAccount: (payload = {}) => dispatch(updateUserAccount(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSuccess);
