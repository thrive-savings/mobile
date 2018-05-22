import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import { Content, Icon, Toast } from "native-base";
import DatePicker from "react-native-datepicker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import ModalDropdown from "react-native-modal-dropdown";
import CheckBox from "react-native-check-box";

import { Field, reduxForm } from "redux-form";

import SpecialButton from "../../../../components/SpecialButton";

import globalStyles from "../../../../globals/globalStyles";
import { styles, addressFinderStyles } from "./styles";
import colors from "../../../../theme/colors";

import { required, minLength8, alphaNumeric, email } from "../../../../globals/validators";

import { signUpUser } from "../../state/actions";

import { GooglePlacesApiKey } from "../../../../../config";

const tick = require("../../../../../assets/Icons/Checkbox/tick.png");

import INPUT_FIELDS from "./constants";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
    this.fastSubmit = this.fastSubmit.bind(this);

    this.addressSelected = this.addressSelected.bind(this);
    this.genderSelected = this.genderSelected.bind(this);

    this.state = {
      date: "",
      gender: undefined,
      didAgree: false,
      address: {}
    };
  }

  submit() {
    if (this.props.valid) {
      //Check if other inputs fields are provided
      const { email: userEmail, password, firstName, lastName, unit } = this.props.values;
      const { date, gender, didAgree, address } = this.state;
      if (date && gender && didAgree && Object.keys(address).length > 0) {
        this.props.signUpUser({
          email: userEmail, firstName, lastName, password, date, gender,
          companyID: this.props.signUpReducer.companyID.toString(),
          address: {
            ...address,
            unit
          }
        });
        return;
      }
    }

    Toast.show({
      text: "All the fields are compulsory!",
      duration: 2500,
      position: "top",
      type: "danger",
      textStyle: { textAlign: "center" }
    });
  }

  fastSubmit() {
    const data = {
      "email": "naib@thrivesavings.com",
      "firstName": "Naib",
      "lastName": "Baghirov",
      "password": "naibferide8",
      "date": "1993-10-05",
      "gender": "Male",
      "companyID": "1",
      "address": {
        "city": "Toronto",
        "country": "Canada",
        "postalCode": "M5J 3A3",
        "state": "Ontario",
        "streetName": "Grand Trunk Crescent",
        "streetNumber": "19",
        "unit": "3708",
      }
    };

    this.props.signUpUser(data);
  }


  // "details" is provided when fetchDetails = true
  addressSelected(data, details) {
    let streetNumber, streetName, city, state, country, postalCode;
    details.address_components.forEach(component => {
      const { long_name, types } = component;
      if (types.indexOf("street_number") > -1) {
        streetNumber = long_name;
      } else if (types.indexOf("route") > -1) {
        streetName = long_name;
      } else if (types.indexOf("locality") > -1) {
        city = long_name;
      } else if (types.indexOf("administrative_area_level_1") > -1) {
        state = long_name;
      } else if (types.indexOf("country") > -1) {
        country = long_name;
      } else if (types.indexOf("postal_code") > -1) {
        postalCode = long_name;
      }
    });
    this.setState({ address: { streetNumber, streetName, city, state, country, postalCode } });
  }

  genderSelected(index, gender) {
    this.setState({ gender });
  }

  textInput;
  renderInput({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <View>
        <View style={[styles.inputGrp, INPUT_FIELDS[input.name].extraStyle]}>
          <TextInput
            ref={c => (this.textInput = c)}
            placeholderTextColor={colors.darkerGrey}
            style={styles.input}
            placeholder={INPUT_FIELDS[input.name].placeholder}
            secureTextEntry={INPUT_FIELDS[input.name].secureEntry}
            underlineColorAndroid="transparent"
            {...input}
          />
          {touched && error
            ? <Icon
                active
                style={globalStyles.formErrorIcon}
                onPress={() => this.textInput._root.clear()}
                name="close"
              />
            : <Text />}
        </View>
        {touched && error
          ? <Text style={globalStyles.formErrorText1}>
              {error}
            </Text>
          : <Text style={globalStyles.formErrorText2}> error here</Text>}
      </View>
    );
  }

  render() {
    const navigation = this.props.navigation;
    const { isLoading, error, errorMessage } = this.props.signUpReducer;

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
      <Content showsVerticalScrollIndicator={false} style={[styles.formContainer, globalStyles.shadow]}>
        <View style={styles.formContent}>
          <Text style={styles.formLabelText}>
            Please use your legal name as it appears on your bank statements.
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
          <View style={[styles.inputRow, styles.dateGenderRowExtra]}>
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
              androidMode="spinner"
              onDateChange={date => this.setState({ date })}
            />
            <ModalDropdown
              options={["Male", "Female", "Neutral"]}
              defaultValue="Gender"
              style={styles.gender}
              dropdownStyle={styles.genderDropdownList}
              textStyle={[styles.genderText, this.state.gender ? styles.genderSelected : styles.genderPlaceholder]}
              dropdownTextStyle={[styles.genderText, styles.genderSelected]}
              dropdownTextHighlightStyle={[styles.genderText, styles.genderSelected]}
              onSelect={this.genderSelected}
            />
          </View>

          <View style={styles.inputRow}>
            <GooglePlacesAutocomplete
              placeholder="Address"
              placeholderTextColor={colors.darkerGrey}
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
              onPress={this.addressSelected}
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
            validate={[required, email]}
          />
          <Field
            name="password"
            component={this.renderInput}
            type="password"
            validate={[required, minLength8, alphaNumeric]}
          />

          <View style={styles.checkboxRow}>
            <CheckBox
              onClick={()=>this.setState({didAgree: !this.state.didAgree})}
              isChecked={this.state.didAgree}
              unCheckedImage={<View style={styles.checkbox} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}/>}
              checkedImage={<View style={styles.checkbox} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}><Image source={tick} style={styles.checkboxTick}/></View>}
            />
            <Text style={styles.checkboxText}>
              By creating an account you are agreeing to our
              <Text style={styles.linkTexts} onPress={() => navigation.navigate("TOS")} suppressHighlighting> Terms of Service</Text> and
              <Text style={styles.linkTexts} onPress={() => navigation.navigate("PP")} suppressHighlighting> Privacy Policy.</Text>
            </Text>
          </View>

          {error && <Text style={globalStyles.formErrorText3}>{errorText}</Text>}

          <SpecialButton loading={isLoading} enabled={this.state.didAgree} text={"CREATE MY ACCOUNT"} onClick={this.submit} />
        </View>
      </Content>
    );
  }
}

function mapStateToProps (state) {
  return {
    values: state.form && state.form.signup && state.form.signup.values ? state.form.signup.values : undefined,
    signUpReducer: state.signUpReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    signUpUser: (payload = {}) => dispatch(signUpUser(payload))
  };
}

export default reduxForm({
  form: "signup"
})(connect(mapStateToProps, mapDispatchToProps)(PersonalDetails));
