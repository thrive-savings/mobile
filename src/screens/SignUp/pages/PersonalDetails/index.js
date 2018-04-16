import React, { Component } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import {
  Card,
  View,
  Item,
  Input,
  Icon,
  Text,
  Button,
  CheckBox,
  Spinner
} from "native-base";
import DatePicker from "react-native-datepicker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { Field, reduxForm } from "redux-form";

import { styles, addressFinderStyles } from "./styles";
import { required, maxLength15, minLength8, alphaNumeric, email } from "../../../../globals/validators";

import SpecialButton from "../../../../components/SpecialButton";

import { GooglePlacesApiKey } from "../../../../../config";

import colors from "../../../../theme/colors";

const logo = require("../../../../../assets/Logo/white.png");

const INPUT_FIELDS = {
  firstName: {
    placeholder: "First Name",
    extraStyle: styles.names
  },
  lastName: {
    placeholder: "Last Name",
    extraStyle: styles.names
  },
  dateOfBirth: {
    placeholder: "Date of Birth",
    extraStyle: styles.dateOfBirth
  },
  gender: {
    placeholder: "Gender",
    extraStyle: styles.gender
  },
  address: {
    placeholder: "Address",
    extraStyle: styles.address
  },
  unit: {
    placeholder: "Unit",
    extraStyle: styles.unit
  },
  email: {
    placeholder: "Email",
    extraStyle: styles.email
  },
  password: {
    placeholder: "Password",
    secureEntry: true,
    extraStyle: styles.password
  }
};

class PersonalDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: ""
    };
  }

  textInput: any;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <Item error={error && touched} rounded style={[styles.inputGrp, INPUT_FIELDS[input.name].extraStyle]}>
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor={colors.darkergrey}
            style={styles.input}
            placeholder={INPUT_FIELDS[input.name].placeholder}
            secureTextEntry={INPUT_FIELDS[input.name].secureEntry}
            {...input}
          />
          {touched && error
            ? <Icon
                active
                style={styles.formErrorIcon}
                onPress={() => this.textInput._root.clear()}
                name="close"
              />
            : <Text />}
        </Item>
        {touched && error
          ? <Text style={styles.formErrorText1}>
              {error}
            </Text>
          : <Text style={styles.formErrorText2}> error here</Text>}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.contentContainerStyle}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
        </View>
        <View style={styles.formContainer}>
          <ScrollView style={styles.formContent} showsVerticalScrollIndicator={false}>
            <Text style={styles.formLabelText}>
              Please use your legal name as it appears on your bank statements, so that we can verify your account.
            </Text>
            <View style={styles.inputRow}>
              <Field
                name="firstName"
                component={this.renderInput}
                type="firstName"
                validate={[required]}
              />
              <Field
                name="lastName"
                component={this.renderInput}
                type="lastName"
                validate={[required]}
              />
            </View>
            <View style={styles.inputRow}>
              <DatePicker
                customStyles={{
                  placeholderText: styles.datePickerPlaceholder,
                  dateText: styles.datePickerText,
                  dateInput: styles.datePickerInput
                }}
                style={styles.dateOfBirth}
                date={this.state.date}
                placeholder="Date of birth"
                format="YYYY-MM-DD"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                onDateChange={(date) => {this.setState({date: date});}}
              />
              <Field
                name="gender"
                component={this.renderInput}
                type="gender"
                validate={[required]}
              />
            </View>
            <View style={styles.inputRow}>
              <GooglePlacesAutocomplete
                placeholder="Address"
                placeholderTextColor={colors.darkergrey}
                minLength={2}
                autoFocus={false}
                returnKeyType={"default"}
                fetchDetails={true}
                listUnderlayColor={colors.grey}
                query={{
                  key: GooglePlacesApiKey,
                  language: "en",
                  types: "address",
                  components: "country:us|country:ca"
                }}
                styles={addressFinderStyles}
                currentLocation={false}
                onPress={(data, details = null) => { // "details" is provided when fetchDetails = true
                  console.log(data, details);
                }}
              />
              <Field
                name="unit"
                component={this.renderInput}
                type="unit"
                validate={[required]}
              />
            </View>

            <Field
              name="email"
              component={this.renderInput}
              type="email"
              validate={[required]}
            />
            <Field
              name="password"
              component={this.renderInput}
              type="password"
              validate={[required, minLength8, alphaNumeric]}
            />

            <View style={styles.checkboxRow}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxText}>
                By creating an account you are agreeing to our
                <Text style={styles.linkTexts}>Terms of Service</Text> and
                <Text style={styles.linkTexts}> Privacy Policy.</Text>
              </Text>
            </View>

            <SpecialButton loading={false} state={0} text={"CREATE MY ACCOUNT"} onClick={this.submit} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default PersonalDetails;
