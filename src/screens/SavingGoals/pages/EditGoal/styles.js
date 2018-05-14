import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  container: {
    marginTop: 10,
    width: deviceWidth - 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 20
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20
  },
  nameText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.6,
    paddingRight: 10
  },
  fieldRow: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 5
  },
  fieldLabel: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2
  },
  fieldButtonText: {
    color: colors.blue,
    fontSize: 13,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2
  },
  bottomText: {
    color: colors.darkerGrey,
    fontSize: 11,
    lineHeight: 17.5,
    letterSpacing: 0.1,
    paddingBottom: 20
  },

  // Date Picker styles
  datePickerContainer: {
    marginVertical: -10
  },
  datePickerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderWidth: 0,
    backgroundColor: "transparent"
  },
  datePickerPlaceholder: {
    color: colors.blue,
    paddingLeft: 10,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  datePickerText: {
    color: colors.blue,
    paddingLeft: 10,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },

  // Error Text style
  formErrorText: {
    fontSize: 12,
    color: colors.error,
    textAlign: "center",
    top: -10
  },

  //Separator style
  separator: {
    height: 1,
    marginHorizontal: -20,
    alignSelf: "stretch",
    backgroundColor: colors.mediumGrey
  },
});
