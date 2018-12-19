import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Spinner, Toast } from "native-base";
import { connect } from "react-redux";
import { Svg } from "expo";

import globalErrorMessage from "../../../../globals/errorMessage";

import amplitude from "../../../../globals/amplitude";

import Dots from "../../../../components/Dots";

import { setDefaultAccount, changeBankStep } from "../../state/actions";
import {
  LINK_STEPS,
  LOADING_STATES,
  ACTION_TYPES
} from "../../state/constants";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

import BANK_ICONS from "../../../../globals/bankIcons";

class ChooseAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccountID: undefined
    };
  }

  componentDidMount() {
    amplitude.track(amplitude.events.CHOOSE_DEFAULT_ACCOUNT_VIEW);
  }

  setDefaultAccount() {
    if (
      [ACTION_TYPES.INITAL, ACTION_TYPES.SET_DEFAULT].includes(
        this.props.actionType
      )
    ) {
      const { selectedAccountID } = this.state;
      if (selectedAccountID) {
        this.props.setDefaultAccount({
          accountID: selectedAccountID
        });
      } else {
        Toast.show({
          text: "Choose Default Account",
          duration: 2500,
          position: "top",
          type: "danger",
          textStyle: { textAlign: "center" }
        });
      }
    } else {
      this.props.changeBankStep({ step: LINK_STEPS.SUCCESS });
    }
  }

  renderError(bank) {
    const bankColor = colors.banks[bank];
    const bankIcon = BANK_ICONS[bank];

    return (
      <View
        style={[
          styles.bankBox,
          { borderColor: bankColor },
          globalStyles.shadow
        ]}
      >
        <Image source={bankIcon} />
        <Text
          style={[styles.errorText, { paddingHorizontal: 25, paddingTop: 20 }]}
        >
          {globalErrorMessage} Please contact support to get help.
        </Text>
      </View>
    );
  }

  renderAccounts(bank, accounts) {
    const { integrateBankReducer: { loadingState }, actionType } = this.props;

    const letUserSetDefault = [
      ACTION_TYPES.INITAL,
      ACTION_TYPES.SET_DEFAULT
    ].includes(actionType);

    const accountsView = accounts.map(({ id, name, nickname }) => {
      const isSelected = this.state.selectedAccountID === id;
      return (
        <TouchableOpacity
          key={id}
          activeOpacity={0.6}
          style={styles.accountRow}
          onPress={() => {
            if (letUserSetDefault) {
              this.setState({ selectedAccountID: id });
            }
          }}
        >
          {letUserSetDefault &&
            (isSelected
              ? <Svg width={16} height={16}>
                  <Svg.Circle
                    cx="8"
                    cy="8"
                    r={7}
                    stokeWidth={1}
                    stroke={colors.darkerGrey}
                    fill={"white"}
                  />
                  <Svg.Circle cx="8" cy="8" r={5} fill={colors.charcoal} />
                </Svg>
              : <Svg width={16} height={16}>
                  <Svg.Circle
                    cx="8"
                    cy="8"
                    r={7}
                    stokeWidth={1}
                    stroke={colors.darkerGrey}
                    fill={"white"}
                  />
                </Svg>)}
          <Text
            style={[
              styles.accountTitleText,
              (isSelected || !letUserSetDefault) && styles.selectedTitleText
            ]}
          >
            {nickname + " - " + name}
          </Text>
        </TouchableOpacity>
      );
    });

    const bankColor = colors.banks[bank];
    const bankIcon = BANK_ICONS[bank];

    return (
      <View
        style={[
          styles.bankBox,
          { borderColor: bankColor },
          globalStyles.shadow
        ]}
      >
        <Image source={bankIcon} />
        <Text style={styles.bankBoxLabel}>
          {letUserSetDefault
            ? "Please select your primary chequing account. This is where you perform your everyday banking."
            : "We have fetched the following accounts from your bank."}
        </Text>
        {accountsView}
        {loadingState === LOADING_STATES.SETTING_DEFAULT_ACCOUNT
          ? <Spinner color={colors.blue} />
          : <TouchableOpacity
              onPress={this.setDefaultAccount.bind(this)}
              activeOpacity={0.6}
              style={[styles.continueButton, { backgroundColor: bankColor }]}
            >
              <Text style={styles.continueButtonText}>CONTINUE</Text>
            </TouchableOpacity>}
      </View>
    );
  }

  renderContent() {
    const {
      integrateBankReducer: {
        connection: { bank = "ThriveBank", accounts: accountsFromNew = [] } = {}
      },
      accounts: accountsFromExisting
    } = this.props;

    let accounts = accountsFromExisting
      ? accountsFromExisting
      : accountsFromNew;
    if (accounts.length > 0) {
      return this.renderAccounts(bank, accounts);
    } else {
      return this.renderError(bank);
    }
  }

  render() {
    const { loadingState, error } = this.props.integrateBankReducer;

    let errorText = "";
    if (error) {
      const { errors } = error;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = globalErrorMessage;
      }
    }

    return (
      <View style={styles.container}>
        <Dots step={2} count={3} />
        <Text style={styles.titleText}>LINK YOUR BANK ACCOUNT</Text>
        {loadingState === LOADING_STATES.FETCHING_ACCOUNTS
          ? <View>
              <Text style={styles.bankBoxLabel}>Fetching Accounts ...</Text>
              <Spinner color={colors.blue} />
            </View>
          : this.renderContent()}
        {error &&
          <Text style={styles.errorText}>
            {errorText}
          </Text>}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    integrateBankReducer: state.integrateBankReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDefaultAccount: (payload = {}) => dispatch(setDefaultAccount(payload)),
    changeBankStep: (payload = {}) => dispatch(changeBankStep(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAccount);
