import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Spinner, Toast } from "native-base";
import { connect } from "react-redux";
import { Svg } from "expo";
import { Field, reduxForm } from "redux-form";

import amplitude from "../../../../globals/amplitude";

import Dots from "../../../../components/Dots";

import { answerMFAQuestions, setDefault } from "../../state/actions";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

import { required } from "../../../../globals/validators";

import BANK_ICONS from "../../bankIcons";

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

  answerMFAQuestions() {
    if (this.props.valid && this.props.values) {
      // this.props.authUser(this.props.values);
      const fieldPrefix = "MFAquestion";
      const data = this.props.integrateBankReducer.questions.map(
        (obj, index) => {
          obj.Answer = this.props.values[`${fieldPrefix}_${index}`];
          return obj;
        }
      );
      this.props.answerMFAQuestions({ questions: data });
    } else {
      Toast.show({
        text: "Enter Answers for MFA Questions",
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
    }
  }

  setDefault() {
    const selectedAccountID = this.state.selectedAccountID;
    if (selectedAccountID) {
      this.props.setDefault({ accountID: selectedAccountID });
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
          Server Error. Please contact support to get help.
        </Text>
      </View>
    );
  }

  renderAccounts(bank, accounts) {
    const { isSetting } = this.props.integrateBankReducer;

    const accountsView = accounts.map(({ id, title, number }) => {
      const isSelected = this.state.selectedAccountID === id;
      return (
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
            {title + " ***" + number.substr(Math.max(0, number.length - 4))}
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
          Please select your primary chequing account. This is where you perform
          your everyday banking.
        </Text>
        {accountsView}
        {isSetting
          ? <Spinner color={colors.blue} />
          : <TouchableOpacity
              onPress={this.setDefault.bind(this)}
              activeOpacity={0.6}
              style={[styles.continueButton, { backgroundColor: bankColor }]}
            >
              <Text style={styles.continueButtonText}>CONTINUE</Text>
            </TouchableOpacity>}
      </View>
    );
  }

  renderMFAAnswerField({ input, label, meta: { touched, error } }) {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          {label}
        </Text>
        <View style={styles.inputGrp}>
          <TextInput
            placeholder="Answer goes here"
            placeholderTextColor={colors.darkerGrey}
            style={styles.input}
            underlineColorAndroid="transparent"
            {...input}
          />
        </View>
        {touched && error
          ? <Text style={globalStyles.formErrorText1}>
              {error}
            </Text>
          : <Text style={globalStyles.formErrorText2}>error here</Text>}
      </View>
    );
  }

  renderMFAQuestions(bank, questions) {
    const { isAnswering } = this.props.integrateBankReducer;

    const bankColor = colors.banks[bank];
    const bankIcon = BANK_ICONS[bank];

    const questionsView = questions.map(({ Question }, index) =>
      <Field
        key={`MFAquestion_${index}`}
        name={`MFAquestion_${index}`}
        label={Question}
        component={this.renderMFAAnswerField}
        type={`MFAquestion_${index}`}
        validate={[required]}
      />
    );

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
          Please answer the security questions.
        </Text>
        {questionsView}
        {isAnswering
          ? <Spinner color={colors.blue} />
          : <TouchableOpacity
              onPress={this.answerMFAQuestions.bind(this)}
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
      bank = "ThriveBank",
      accounts = [],
      questions = []
    } = this.props.integrateBankReducer;

    if (
      questions.length > 0 &&
      questions[0].Question !== "Enter Security Code" // special case for TD
    ) {
      return this.renderMFAQuestions(bank, questions);
    } else if (accounts.length > 0) {
      return this.renderAccounts(bank, accounts);
    } else {
      return this.renderError(bank);
    }
  }

  render() {
    const { isFetching, error, errorMessage } = this.props.integrateBankReducer;

    let errorText = "";
    if (error) {
      const { errors } = errorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Dots step={2} count={3} />
        <Text style={styles.titleText}>LINK YOUR BANK ACCOUNT</Text>
        {isFetching
          ? <View>
              <Text style={styles.bankBoxLabel}>Fetching Accounts ...</Text>
              <Spinner color={colors.blue} />
            </View>
          : this.renderContent()}
        {error &&
          <Text style={styles.errorText}>
            {errorText}
          </Text>}
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state) {
  return {
    values:
      state.form && state.form.mfaAnswers && state.form.mfaAnswers.values
        ? state.form.mfaAnswers.values
        : undefined,
    integrateBankReducer: state.integrateBankReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    answerMFAQuestions: (payload = {}) => dispatch(answerMFAQuestions(payload)),
    setDefault: (payload = {}) => dispatch(setDefault(payload))
  };
}

export default reduxForm({
  form: "mfaAnswers"
})(connect(mapStateToProps, mapDispatchToProps)(ChooseAccount));
