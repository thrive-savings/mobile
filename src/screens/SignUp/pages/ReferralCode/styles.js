import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 30,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  // Input styles
  inputGrp: {
    height: 30,
    width: 120,
    paddingHorizontal: 5,
    flexDirection: "row",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    backgroundColor: "transparent",
    marginBottom: 7
  },
  input: {
    flex: 1,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    textAlign: "center"
  },

  // Text styles
  formLabelText: {
    paddingBottom: 20,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 21,
    letterSpacing: 0.2,
    textAlign: "center"
  },
  formErrorText1: {
    fontSize: 12,
    color: colors.error,
    textAlign: "center",
    top: -7
  }
});
