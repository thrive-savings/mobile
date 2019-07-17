import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import {
  ImageBackground,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import { Field, reduxForm } from "redux-form";

import DatePicker from "react-native-datepicker";
import moment from "moment";

import addStatusBar from "../../components/StatusBar";

import Header from "../../components/Header";
import SpecialButton from "../../components/SpecialButton";
import UploadPhotoModal from "../../components/UploadPhotoModal";

import { required, email } from "../../globals/validators";
// import globalErrorMessage from "../../globals/errorMessage";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

import { submitDocumentData } from "./state/actions";

import INPUT_FIELDS from "./constants";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

const DOB_FORMAT = "YYYY-MM-DD";
const FAKE_ADDRESS = {
  address_street: "1 Market St.",
  address_city: "San Francisco",
  address_subdivision: "CA",
  address_postal_code: "94114",
  address_country_code: "US"
};

class CompleteProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      legalName: "",
      email: "",
      phone: "",
      dob: "",

      city: "",
      street: "",
      zipCode: "",
      subdivision: "",

      ssn: "",
      govID: "",

      showPhotoUploader: false
    };
  }

  onSubmit() {
    const dumbValues = {
      legalName: "Naib Baghirov",
      email: "naib@thrivesavings.com",
      phone: "+16476763323",
      address: {
        street: FAKE_ADDRESS.address_street,
        city: FAKE_ADDRESS.address_city,
        subdivision: FAKE_ADDRESS.address_subdivision,
        zipCode: FAKE_ADDRESS.address_postal_code,
        countryCode: FAKE_ADDRESS.address_country_code
      },
      dob: "1994-10-05",
      ssn: "2222",
      govID: "data:image/gif;base64,SUQs=="
    };

    this.props.submitDocumentData(dumbValues);
  }

  legalNameInput;
  emailInput;
  phoneInput;
  streetInput;
  cityInput;
  zipCodeInput;
  subdivisionInput;
  ssnInput;
  renderInput({ input, meta: { touched, error } }) {
    const {
      placeholder,
      secureEntry,
      autoCapitalize,
      returnKeyType,
      extraStyle
    } = INPUT_FIELDS[input.name];
    return (
      <React.Fragment>
        <View style={[styles.inputBox, extraStyle]}>
          <TextInput
            ref={c => {
              switch (input.name) {
                case "legalName":
                  this.legalNameInput = c;
                  break;
                case "email":
                  this.emailInput = c;
                  break;
                case "phone":
                  this.phoneInput = c;
                  break;
                case "street":
                  this.streetInput = c;
                  break;
                case "city":
                  this.cityInput = c;
                  break;
                case "zipCode":
                  this.zipCode = c;
                  break;
                case "subdivision":
                  this.subdivisionInput = c;
                  break;
                case "ssn":
                  this.ssnInput = c;
                  break;
              }
            }}
            placeholderTextColor={colors.darkerGrey}
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureEntry}
            autoCapitalize={autoCapitalize || "none"}
            returnKeyType={returnKeyType || "next"}
            onSubmitEditing={() => {
              switch (input.name) {
                case "legalName":
                  this.emailInput.focus();
                  break;
                case "email":
                  this.phoneInput.focus();
                  break;
                case "phone":
                  this.streetInput.focus();
                  break;
                case "street":
                  this.cityInput.focus();
                  break;
                case "city":
                  this.zipCodeInput.focus();
                  break;
                case "zipCode":
                  this.subdivisionInput.focus();
                  break;
                case "subdivision":
                  this.ssnInput.focus();
                  break;
              }
            }}
            underlineColorAndroid="transparent"
            {...input}
          />
        </View>
        {touched &&
          error &&
          <Text style={globalStyles.formErrorText1}>
            {error}
          </Text>}
      </React.Fragment>
    );
  }

  render() {
    const { navigation, completeProfileReducer: { isLoading } } = this.props;
    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header button="back" navigation={navigation} />
        <ScrollView
          style={globalStyles.container}
          contentContainerStyle={[styles.container, globalStyles.shadow]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            <Text style={[styles.regularText, styles.marginBottom]}>
              All the fields will be verified.
            </Text>

            <Field
              name="legalName"
              component={this.renderInput}
              validate={[required]}
            />
            <Field
              name="email"
              component={this.renderInput}
              validate={[required, email]}
            />
            <Field
              name="phone"
              component={this.renderInput}
              validate={[required]}
            />

            <DatePicker
              style={styles.datePickerContainer}
              customStyles={{
                placeholderText: [styles.regularText, styles.placeholderText],
                dateText: [styles.regularText],
                dateInput: styles.datePickerInput
              }}
              date={this.state.dob}
              placeholder="Date of birth"
              format={DOB_FORMAT}
              minDate={moment().subtract(100, "years").format(DOB_FORMAT)}
              maxDate={moment().subtract(18, "years").format(DOB_FORMAT)}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              showIcon={false}
              androidMode="spinner"
              onDateChange={date =>
                this.setState({ dob: moment(date).format(DOB_FORMAT) })}
            />

            <Text style={[styles.regularText, styles.marginBottomSmall]}>
              Address Fields:
            </Text>
            <Field
              name="street"
              component={this.renderInput}
              validate={[required]}
            />
            <Field
              name="city"
              component={this.renderInput}
              validate={[required]}
            />
            <View style={styles.inputRow}>
              <Field name="zipCode" component={this.renderInput} />
              <View style={styles.spacer} />
              <Field name="subdivision" component={this.renderInput} />
            </View>

            <Text style={[styles.regularText, styles.marginBottomSmall]}>
              Government Documents:
            </Text>
            <Field
              name="ssn"
              component={this.renderInput}
              validate={[required]}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                this.setState({ showPhotoUploader: true });
              }}
              style={[
                styles.inputBox,
                styles.padderLeft,
                styles.marginBottomLarge
              ]}
            >
              <Text style={[styles.regularText, styles.placeholderText]}>
                Photo ID:
              </Text>
              <View style={styles.uploadButton}>
                <Text
                  style={[
                    styles.regularText,
                    styles.blueText,
                    styles.rightAlignedText
                  ]}
                >
                  Upload
                </Text>
              </View>
            </TouchableOpacity>

            <SpecialButton
              isLoading={isLoading}
              text="SUBMIT"
              onClick={this.onSubmit.bind(this)}
            />

            <UploadPhotoModal
              title="Upload Photo ID"
              uploadPhoto={() => {}}
              deletePhoto={() => {}}
              removeOption={false}
              show={this.state.showPhotoUploader}
              onClose={() => this.setState({ showPhotoUploader: false })}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    values:
      state.form &&
      state.form.completeProfile &&
      state.form.completeProfile.values
        ? state.form.completeProfile.values
        : undefined,
    completeProfileReducer: state.completeProfileReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitDocumentData: (payload = {}) => dispatch(submitDocumentData(payload))
  };
}

export default reduxForm({
  form: "completeProfile"
})(connect(mapStateToProps, mapDispatchToProps)(addStatusBar(CompleteProfile)));
