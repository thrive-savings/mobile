import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

const formWidth = deviceWidth - 60;
const formHorizontalPadding = 15;
const formWidthAfterPadding = formWidth - 2 * formHorizontalPadding;
const formSpaceBetween = 10;

const styles = StyleSheet.create({
  formContainer: {
    flex: 0.8,
    alignSelf: "center",
    width: formWidth
  },
  formContent: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
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
    width: (formWidthAfterPadding * 2) / 3 - formSpaceBetween / 2 + 2,
    marginLeft: -2
  },
  gender: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.darkerGrey,
    justifyContent: "center",
    width: formWidthAfterPadding / 3 - formSpaceBetween / 2,
    height: 30,
    paddingLeft: 10
  },
  genderDropdownList: {
    height: 80,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.darkerGrey
  },
  genderText: {
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  genderPlaceholder: {
    color: colors.darkerGrey
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
    borderColor: colors.darkerGrey,
    backgroundColor: "transparent",
    marginBottom: 10,
    marginLeft: 2
  },
  datePickerPlaceholder: {
    color: colors.darkerGrey,
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
    borderColor: colors.darkerGrey,
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
    borderColor: colors.darkerGrey,
    backgroundColor: "transparent",
    marginBottom: 7
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  separator: {
    height: 30
  }
});

const addressFinderStyles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderBottomWidth: 1.2,
    borderColor: colors.darkerGrey,
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
    marginBottom: 7,
    height: 25
  },
  listView: {
    width: formWidthAfterPadding,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    backgroundColor: "transparent",
    paddingHorizontal: 10
  },
  row: {
    paddingHorizontal: 0,
  },
  description: {
    color: colors.darkerGrey,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  separator: {
    height: 1,
    backgroundColor: colors.darkerGrey
  }
});

export { styles, addressFinderStyles };
