import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import { Svg } from "expo";

import DatePicker from "react-native-datepicker";

import ModalTemplate from "../../../../components/ModalTemplate";
import Header from "../../../../components/Header";
import SpecialButton from "../../../../components/SpecialButton";
import getNumPadModalContent from "../../../../components/NumPad";

import { getDollarString } from "../../../../globals/helpers";
import GOAL_CATEGORIES from "../../../../globals/goalCategories";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

const bg = require("../../../../../assets/Backgrounds/BackgroundFull.png");

const MIN_ACCELERATE_AMOUNT = 6000;
const MIN_AMOUNT_TO_PAY = 10000;

class DebtDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setNumber: undefined,
      showNumberEditor: false,
      setBalance: undefined, 
      showBalanceEditor: false,
      setDueDate: undefined,
      setAccelerateAmount: undefined,
      showAccelerateAmountEditor: false,
      setAccelerateOn: false
    };
  }

  saveDetails() {
    console.log(this.state);
  }

  numPadClicked(value, field) {
    let newValue;
    switch (field) {      
      case "number":
        newValue = (this.state.setNumber || "") + "" + value;
        this.setState({ setNumber: newValue });
        break;
      case "balance":
        newValue = (this.state.setBalance || 0) / 100;
        newValue =
          value >= 0 ? newValue * 10 + value : Math.floor(newValue / 10);
        newValue *= 100;
        this.setState({ setBalance: newValue });
        break;
      case "accelerateAmount":
        newValue = (this.state.setAccelerateAmount || 0) / 100;
        newValue =
          value >= 0 ? newValue * 10 + value : Math.floor(newValue / 10);
        newValue *= 100;
        this.setState({ setAccelerateAmount: newValue, setAccelerateOn: newValue > 0 });
        break;
      default:
        break;
    }  
  }

  getDynamicValues() {
    const { setNumber, setBalance, setDueDate, setAccelerateAmount, setAccelerateOn } = this.state;
    const { debt: { account: { balance: savedBalance, number: savedNumber, dueDate: savedDueDate } = {}, accelerateAmount: savedAccelerateAmount, accelerateOn: savedAccelerateOn } } = this.props;
     
    const accelerateOn = setAccelerateOn || savedAccelerateOn;
    const accelerateAmount = setAccelerateAmount ? setAccelerateAmount : savedAccelerateAmount ? savedAccelerateAmount : accelerateOn && MIN_ACCELERATE_AMOUNT;
    return {
      number: setNumber || savedNumber,
      balance: setBalance || savedBalance,
      dueDate: setDueDate || savedDueDate,
      accelerateAmount,
      accelerateOn
    };
  }

  render() {
    const { setNumber, showNumberEditor, setBalance, showBalanceEditor, setAccelerateAmount, showAccelerateAmountEditor } = this.state;
    const { debt, onBackPress } = this.props;

    const { amountToPay = MIN_AMOUNT_TO_PAY, account: { name, connection: { sync: { lastGoodSync } = {} } = {} } = {} } = debt;
    const { number, balance, dueDate, accelerateAmount, accelerateOn } = this.getDynamicValues();

    const randomGoalLogo =
      GOAL_CATEGORIES[Object.keys(GOAL_CATEGORIES)[0]].icon;

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header content="text" text="CREDIT CARD DETAILS" button="back" onButtonPress={onBackPress} />
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <Image source={randomGoalLogo} />
            <Text style={[styles.nameText, styles.topPadder]}>{name}</Text>

            <View style={styles.subContent}>
              <Text style={styles.labelText}>DETAILS</Text>
              <View style={styles.separator} />
              <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showNumberEditor: true })} style={styles.detailsRow}>
                <Text style={styles.regularText}>Card Number:</Text>
                <Text style={[styles.regularText, styles.blueText]}>{number ? number : "Set the number"}</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({ showBalanceEditor: true })} style={styles.detailsRow}>
                <Text style={styles.regularText}>Current Balance:</Text>
                <View style={styles.balanceContainer}>
                  <Text style={[styles.regularText, styles.blueText]}>{balance ? getDollarString(Math.abs(balance)) : "---"}</Text>
                  <Text style={styles.lastUpdatedText}>{lastGoodSync ? `Last updated: ${lastGoodSync}` : "Not fetched yet"}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={styles.detailsRow}>
                <Text style={styles.regularText}>Next Due Date:</Text>
                <DatePicker
                  customStyles={{
                    placeholderText: [styles.regularText, styles.blueText],
                    dateText: [styles.regularText, styles.blueText],
                    dateInput: styles.datePickerInput
                  }}
                  date={dueDate}
                  placeholder="Set the date"
                  format="YYYY-MM-DD"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  androidMode="spinner"
                  onDateChange={date => this.setState({ setDueDate: date })}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.subContent}>
              <Text style={[styles.labelText, styles.topPadder]}>YOUR PAYMENT</Text>
              <View style={styles.separator} />
              <Text style={[styles.regularText, styles.largeText]}>{getDollarString(amountToPay + (accelerateOn && accelerateAmount))}</Text>
              <Text style={[styles.regularText, styles.smallText, styles.topPadder]}>This is a suggested monthly payment based on your balances. Thrive will pay this amount every month and you will be debt-free by <Text style={styles.boldText}>March 2023</Text></Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => this.setState({ setAccelerateOn: !accelerateOn })}
                style={[styles.accelerateContainer, globalStyles.shadow, (accelerateOn && styles.accelerateContainerActive)]}
              >
                <View style={styles.accelerateHeader}>
                  <Text style={styles.regularText}>Thrive Accelerate</Text>
                  <View style={styles.accelerateStatusHolder}>
                    <Svg style={styles.svgPadder} width={10} height={10}>
                      <Svg.Circle cx="4" cy="4" r={3} stokeWidth={1} stroke={accelerateOn ? colors.green : colors.darkerGrey} fill={accelerateOn ? colors.green : colors.darkerGrey} />
                    </Svg>
                    <Text style={!accelerateOn ? styles.lastUpdatedText : styles.regularText}>Accelerate is {accelerateOn ? "ON" : "OFF"}</Text>
                  </View>
                </View>
                <View style={styles.accelerateContent}>           
                  <Text style={styles.regularText}>
                    Pay an extra <Text onPress={() => this.setState({ showAccelerateAmountEditor: true })} style={styles.blueText}>{getDollarString(accelerateAmount ? accelerateAmount : MIN_ACCELERATE_AMOUNT, true)}</Text> per month.
                  </Text>
                  <View style={styles.spacer} />
                  <Text style={styles.regularText}>
                    Be debt-free <Text style={styles.boldText}>2 years 9 months faster</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <SpecialButton
            text="CONFIRM"
            onClick={() => this.saveDetails()}
          />
        </ScrollView>  

        <ModalTemplate
          show={showNumberEditor}
          buttonText={"SUBMIT"}
          content={getNumPadModalContent({
            label: "Enter Full Credit Card Number.",
            value: setNumber || "***",
            onPress: value => this.numPadClicked(value, "number")
          })}
          onClose={() => this.setState({ showNumberEditor: false })}
        />   
        <ModalTemplate
          show={showBalanceEditor}
          buttonText={"SUBMIT"}
          content={getNumPadModalContent({
            label: "Enter Credit Card Balance.",
            value: setBalance && getDollarString(setBalance, true),
            onPress: value => this.numPadClicked(value, "balance")
          })}
          onClose={() => this.setState({ showBalanceEditor: false })}
        />
        <ModalTemplate
          show={showAccelerateAmountEditor}
          buttonText={"SUBMIT"}
          content={getNumPadModalContent({
            label: "Enter contribution amount.",
            value: setAccelerateAmount && getDollarString(setAccelerateAmount, true),
            onPress: value => this.numPadClicked(value, "accelerateAmount")
          })}
          onClose={() => this.setState({ showAccelerateAmountEditor: false })}
        /> 
      </ImageBackground>
    );
  }
}

DebtDetails.propTypes = {
  debt: PropTypes.object.isRequired,
  onBackPress: PropTypes.func.isRequired
};

export default DebtDetails;