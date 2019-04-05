import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";
import { Toast } from "native-base";
import { connect } from "react-redux";

import moment from "moment";
import DatePicker from "react-native-datepicker";

import amplitude from "../../../../globals/amplitude";

import SpecialButton from "../../../../components/SpecialButton";
import ModalTemplate from "../../../../components/ModalTemplate";
import Dots from "../../../../components/Dots";

import getNumPadModalContent from "../../../../components/NumPad";
import getFrequencySetterModalContent from "../../../../components/OptionSetter";

import { getDollarString } from "../../../../globals/helpers";

import styles from "./styles";
import { FREQUENCY_TYPES, getFrequencyIndex } from "./constants";

import { LOADING_STATES } from "../../state/constants";

const MIN_FIXED_CONTRIBUTION = 500;
const MAX_FIXED_CONTRIBUTION = 100000;

const DATE_DISPLAY_FORMAT = "MMM D, YYYY";

class SavingDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextSaveDate: undefined,
      contribution: undefined,
      frequencyIndex: undefined,
      showContributionSetter: false,
      showFrequencySetter: false
    };

    this.getData = this.getData.bind(this);
    this.next = this.next.bind(this);
    this.numPadClicked = this.numPadClicked.bind(this);
    this.frequencySelected = this.frequencySelected.bind(this);
  }

  componentDidMount() {
    amplitude.track(amplitude.events.SAVING_DETAILS_VIEW);
  }

  next() {
    const { nextSaveDate, contribution, frequencyIndex } = this.state;

    if (
      contribution &&
      (contribution < MIN_FIXED_CONTRIBUTION || contribution > MAX_FIXED_CONTRIBUTION)
    ) {
      Toast.show({
        text: `Contribution amount should be between ${getDollarString(
          MIN_FIXED_CONTRIBUTION,
          true
        )} and ${getDollarString(MAX_FIXED_CONTRIBUTION, true)}`,
        duration: 2500,
        position: "top",
        type: "warning",
        textStyle: { textAlign: "center" }
      });
    } else {
      this.props.save({
        nextSaveDate,
        fixedContribution: contribution,
        frequency: frequencyIndex && FREQUENCY_TYPES[frequencyIndex].identifier
      });
    }
  }

  numPadClicked(value) {
    let contribution = this.getData().contribution / 100;
    contribution =
      value >= 0
        ? contribution * 10 + value
        : Math.floor(contribution / 10);
    contribution *= 100;

    this.setState({ contribution });
  }

  frequencySelected(value) {
    this.setState({ frequencyIndex: value });
  }

  getData() {
    const { nextSaveDate, contribution, frequencyIndex } = this.state;
    const {
      savingType,
      nextSaveDate: savedNextSaveDate,
      savingDetails: {
        fetchFrequency: savedFrequency,
        fixedContribution: savedContribution
      }
    } = this.props.userData.savingPreferences;

    return {
      savingType,
      nextSaveDate: nextSaveDate || moment(savedNextSaveDate).format(DATE_DISPLAY_FORMAT),
      frequencyIndex: frequencyIndex ? frequencyIndex : savedFrequency && getFrequencyIndex(savedFrequency),
      contribution: typeof contribution !== "undefined" ? contribution : savedContribution
    };
  }

  render() {
    const { savingType, nextSaveDate, frequencyIndex, contribution } = this.getData();

    const { showContributionSetter, showFrequencySetter } = this.state;
    const { reducer: { loadingState }, showDots } = this.props;
    const isFlex = savingType === "Thrive Flex";

    return (
      <View style={styles.container}>
        {showDots && <Dots step={3} />}

        <Text
          style={[styles.labelText, showDots && styles.topPadder]}
        >
          {
            isFlex ? "WHEN WOULD YOU LIKE TO START SAVING?" : "HOW MUCH WOULD YOU LIKE TO SAVE?"
          }
        </Text>
        <Text style={styles.regularText}>
          You are currently on the{" "}
          <Text style={styles.blueText}>{savingType}</Text> plan
        </Text>

        <View style={styles.separator} />
        <View style={[styles.inputRow, styles.verticalPadder]}>
          <Text style={styles.inputLabel}>Next Save Date:</Text>
          <DatePicker
            customStyles={{
              placeholderText: [styles.inputLabel, styles.blueText],
              dateText: [styles.inputLabel, styles.blueText],
              dateInput: styles.datePickerInput
            }}
            date={nextSaveDate}
            minDate={moment().add(1, "d").format(DATE_DISPLAY_FORMAT)}
            maxDate={moment().add(1, "M").format(DATE_DISPLAY_FORMAT)}
            placeholder="Set the date"
            format={DATE_DISPLAY_FORMAT}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            androidMode="spinner"
            onDateChange={date => this.setState({ nextSaveDate: date, showContributionSetter: false, showFrequencySetter: false })}
          />
        </View>

        <View style={styles.separator} />
        <TouchableOpacity
          activeOpacity={isFlex ? 1 : 0.6}
          onPress={() => !isFlex &&
            this.setState({
              showContributionSetter: true,
              showFrequencySetter: false
            })}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          style={styles.inputRow}
        >
          <Text style={styles.inputLabel}>Amount:</Text>
          {
            isFlex ?
              <Text style={styles.inputLabel}>
                Automated
              </Text> :
              <Text style={styles.inputButtonText}>
                {getDollarString(contribution, true)}
              </Text>
          }
        </TouchableOpacity>

        <View style={styles.separator} />
        <TouchableOpacity
          activeOpacity={isFlex ? 1 : 0.6}
          onPress={() => !isFlex &&
            this.setState({
              showContributionSetter: false,
              showFrequencySetter: true
            })}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          style={styles.inputRow}
        >
          <Text style={styles.inputLabel}>Frequency:</Text>
          {
            isFlex ?
              <Text style={styles.inputLabel}>
                Automated
              </Text> :
              <Text style={styles.inputButtonText}>
                {FREQUENCY_TYPES[frequencyIndex].displayName}
              </Text>
          }
        </TouchableOpacity>

        {isFlex && <View style={styles.separator} />}
        {
          isFlex &&
          <Text style={[styles.regularText, styles.smallerText]}>
            We’ll automatically transfer a small amount of money into your Thrive Savings account.{"\n\n"}
            <Text style={styles.blueText}>Don’t worry, we will never overdraft you</Text>
          </Text>
        }

        <SpecialButton
          loading={loadingState !== LOADING_STATES.NONE}
          onClick={this.next}
          style={styles.topPadder}
        />

        <ModalTemplate
          show={showContributionSetter}
          buttonText={"SUBMIT"}
          content={getNumPadModalContent({
            label: "Enter contribution amount.",
            value: contribution && getDollarString(contribution, true),
            onPress: this.numPadClicked
          })}
        />

        <ModalTemplate
          show={showFrequencySetter}
          buttonText={"SAVE"}
          content={getFrequencySetterModalContent({
            label: "Frequency",
            types: FREQUENCY_TYPES,
            selectedIndex: frequencyIndex,
            onPress: this.frequencySelected
          })}
        />
      </View>
    );
  }
}

SavingDetails.propTypes = {
  next: PropTypes.func,
  showDots: PropTypes.bool
};
SavingDetails.defaultProps = {
  next: () => {},
  showDots: true
};

function mapStateToProps(state) {
  return {
    userData: state.authReducer.data.authorized,
    reducer: state.savingPreferencesReducer
  };
}

export default connect(mapStateToProps)(SavingDetails);
