import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Spinner, Toast } from "native-base";
import { connect } from "react-redux";
import { Svg } from "expo";

import globalErrorMessage from "../../../../globals/errorMessage";

import amplitude from "../../../../globals/amplitude";

import { setDefaultAccount, changeBankStep } from "../../state/actions";
import { LOADING_STATES } from "../../state/constants";

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
    const { selectedAccountID } = this.state;
    if (selectedAccountID) {
      this.props.setDefaultAccount({
        accountID: selectedAccountID
      });
      this.props.goBack();
    } else {
      Toast.show({
        text: "Choose Default Account",
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
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
    const { integrateBankReducer: { loadingState } } = this.props;

    const selectableAccountsView = [];
    const unselectableAccountsView = [];

    accounts.forEach(({ id, name, nickname, type }) => {
      if (["Checking", "Savings"].includes(type)) {
        const isSelected = this.state.selectedAccountID === id;
        selectableAccountsView.push(
          <TouchableOpacity
            key={id}
            activeOpacity={0.6}
            style={styles.accountRow}
            onPress={() => this.setState({ selectedAccountID: id })}
          >
            {isSelected
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
                </Svg>}
            <Text
              style={[
                styles.accountTitleText,
                isSelected && styles.selectedTitleText
              ]}
            >
              {type + " - " + nickname + " - " + name}
            </Text>
          </TouchableOpacity>
        );
      } else {
        unselectableAccountsView.push(
          <View
            key={id}
            style={styles.accountRow}
          >
            <Text style={styles.accountTitleText}>
              {type + " - " + nickname + " - " + name}
            </Text>
          </View>
        );
      }
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
          Please select your primary bank account. This is where Thrive will pull your savings from.
        </Text>
        {selectableAccountsView}
        {unselectableAccountsView.length > 0 && (
          <React.Fragment>
            <Text style={styles.bankBoxLabel}>
              You can only set Chequing or Savings account as your primary.
            </Text>
            {unselectableAccountsView}
          </React.Fragment>
        )}
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
        connection: {
          accounts: accountsFromNew = [],
          institution: { logoFolder: bankLogo = "ThriveBank" } = {}
        } = {}
      },
      accounts: accountsFromExisting
    } = this.props;

    let accounts = accountsFromExisting
      ? accountsFromExisting
      : accountsFromNew;
    if (accounts.length > 0) {
      return this.renderAccounts(bankLogo, accounts);
    } else {
      return this.renderError(bankLogo);
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
        <Text style={styles.titleText}>SET PRIMARY ACCOUNT</Text>
        {loadingState === LOADING_STATES.FETCHING_CONNECTION
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
