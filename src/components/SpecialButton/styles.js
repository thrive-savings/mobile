import { StyleSheet } from "react-native";
const colors = require("../../theme/colors");

export default StyleSheet.create({
  // Disabled Button styles
  disabledButton: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: colors.grey,
    borderRadius: 12
  },
  disabledButtonText: {
    fontSize: 15,
    fontFamily: "LatoBold",
    color: colors.darkerGrey,
    letterSpacing: 0.5
  },

  // Gradient Button Styles
  enabledButton: {
    alignSelf: "stretch"
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
    color: "white",
    letterSpacing: 1
  },

  // White Button styles
  whiteButton: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "white",
    borderRadius: 12
  },
  whiteButtonText: {
    fontSize: 13,
    fontFamily: "LatoRegular",
    color: colors.blue,
    letterSpacing: 0.5
  }
});
