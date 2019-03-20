import color from "color";

import { StyleSheet } from "react-native";
const colors = require("../../../../theme/colors");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "transparent",
    backgroundColor: "white",
    padding: 20
  },
  separator: {
    alignSelf: "stretch",
    height: 2,
    backgroundColor: color(colors.grey).darken(0.005).hex(),
    marginVertical: 15,
    marginHorizontal: -20
  },
  topPadder: {
    marginTop: 20
  },
  verticalPadder: {
    marginVertical: -10
  },

  // Texts
  labelText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    paddingBottom: 10,
    paddingHorizontal: 20,
    textAlign: "center",
    letterSpacing: 1.3
  },
  regularText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    paddingBottom: 10,
    letterSpacing: 0.2
  },
  blueText: {
    color: colors.blue
  },
  smallerText: {
    fontSize: 12
  },

  // Input styles
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch"
  },
  inputLabel: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular"
  },
  inputButtonText: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular"
  },
  datePickerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderColor: "transparent"
  }
});
