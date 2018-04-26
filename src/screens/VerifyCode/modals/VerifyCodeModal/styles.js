import { StyleSheet, Platform } from "react-native";
import colors from "../../../../theme/colors";


export default StyleSheet.create({
  container: {
    alignItems: "center"
  },
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 20
  },
  labelText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center"
  },
  enabledButton: {
    alignSelf: "center",
    paddingLeft: 15
  },
  enabledButtonGradient: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  enabledButtonIcon: {
    resizeMode: "center"
  },
  resendText: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular"
  },
  inputGrp: {
    height: 30,
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    backgroundColor: "transparent",
    paddingLeft: 35
  },
  input: {
    flex: 1,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoBold"
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
