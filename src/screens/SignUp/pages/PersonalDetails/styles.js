import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceHeight = screen.height;
const deviceWidth = screen.width;

const formWidth = deviceWidth - 60;
const formHorizontalPadding = 10;
const formWidthAfterPadding = formWidth - 2 * formHorizontalPadding;
const formSpaceBetween = 10;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logoContainer: {
    flex: 0.12
  },
  logo: {
    resizeMode: "center",
    height: deviceHeight / 8,
    width: deviceWidth / 4
  },
  formContainer: {
    flex: 0.8,
    width: formWidth,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent"
  },
  formContent: {
    flex: 1,
    paddingHorizontal: formHorizontalPadding,
    paddingVertical: 20
  },
  formLabelText: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 21,
    letterSpacing: 0.2,
    textAlign: "center"
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  names: {
    width: formWidthAfterPadding / 2 - formSpaceBetween / 2
  },
  dateOfBirth: {
    width: (formWidthAfterPadding * 2) / 3 - formSpaceBetween / 2,
  },
  gender: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.darkergrey,
    justifyContent: "center",
    width: formWidthAfterPadding / 3 - formSpaceBetween / 2,
    height: 30,
    paddingLeft: 10
  },
  genderDropdownList: {
    height: 80,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.darkergrey
  },
  genderText: {
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  genderPlaceholder: {
    color: colors.darkergrey
  },
  genderSelected: {
    color: colors.charcoal
  },
  unit: {
    width: formWidthAfterPadding / 3 - formSpaceBetween / 2
  },
  dateGenderRowExtra: {
    paddingBottom: 12.5
  },
  datePickerInput: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkergrey,
    backgroundColor: "transparent",
    marginBottom: 10,
    marginLeft: 2
  },
  datePickerPlaceholder: {
    color: colors.darkergrey,
    paddingLeft: 10,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  datePickerText: {
    color: colors.charcoal,
    paddingLeft: 10,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    paddingLeft: 5
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: colors.darkergrey,
    borderRadius: 2,
    backgroundColor: "transparent"
  },
  checkboxTick: {
    alignSelf: "center",
    resizeMode: "center"
  },
  checkboxText: {
    flex: 1,
    paddingLeft: 15,
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    lineHeight: 20,
    letterSpacing: 0.2
  },
  linkTexts: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular"
  },
  inputGrp: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkergrey,
    backgroundColor: "transparent",
    marginBottom: 5
  },
  input: {
    paddingLeft: 10,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  formErrorIcon: {
    color: colors.darkergrey,
    right: 5
  },
  formErrorText1: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: colors.error,
    textAlign: "right",
    top: -7
  },
  formErrorText2: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: "transparent",
    textAlign: "right",
    top: -8
  },
  formErrorText3: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: colors.error,
    textAlign: "center",
    top: -10
  },
  separator: {
    height: 30
  },
  bottomContainer: {
     flex: 0.08,
     alignSelf: "center",
     flexDirection: "row",
     position: "absolute",
     bottom: 5
  },
  bottomLabelText: {
    color: colors.charcoal,
    fontSize: 10
  },
  bottomBtn: {
    top: -11,
    left: -10
  },
  bottomBtnText: {
    color: colors.blue,
    fontSize: 10,
  }
});

const addressFinderStyles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    marginLeft: 2
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: colors.darkergrey,
    borderRadius: 8,
    backgroundColor: "transparent",
    height: 30,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: (formWidthAfterPadding * 2) / 3 - formSpaceBetween / 2
  },
  textInput: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    marginLeft: 0,
    marginBottom: 5,
    height: 25
  },
  listView: {
    width: formWidthAfterPadding - 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkergrey,
    backgroundColor: "transparent",
    paddingHorizontal: 10
  },
  row: {
    paddingHorizontal: 0,
  },
  description: {
    color: colors.darkergrey,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  separator: {
    height: 1,
    backgroundColor: colors.darkergrey
  }
});

export { styles, addressFinderStyles };
