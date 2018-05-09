import { StyleSheet, Platform } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  labelText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 22,
    letterSpacing: 0.2,
    textAlign: "center"
  },
  inputGrp: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.charcoal,
    backgroundColor: "transparent",
    paddingLeft: 10,
    marginVertical: 20
  },
  input: {
    flex: 1,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  formErrorText1: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: colors.error,
    textAlign: "center",
    top: -7
  },
  formErrorText2: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: "transparent",
    textAlign: "center",
    top: -7
  },
  formErrorText3: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: colors.error,
    textAlign: "center",
    top: -10
  }
});
