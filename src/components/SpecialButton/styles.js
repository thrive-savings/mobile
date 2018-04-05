import { StyleSheet } from "react-native";
const colors = require("../../theme/colors");

export default StyleSheet.create({
  disabledButton: {
    backgroundColor: colors.grey,
    borderRadius: 12
  },
  disabledButtonText: {
    fontSize: 15,
    fontFamily: "LatoBold",
    color: colors.disabledButtonText
  },
  enabledButton: {
    alignSelf: "stretch",
  },
  enabledButtonGradient: {
    height: 40,
    justifyContent: "center",
    borderRadius: 12
  },
  enabledButtonText: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "LatoBold",
    color: "white"
  }
});
