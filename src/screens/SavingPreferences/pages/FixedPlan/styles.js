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

  // Texts
  labelText: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: "LatoBold",
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center"
  },
  secondaryText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    paddingBottom: 10
  },
  planNameText: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular"
  },
  promiseText: {
    color: color(colors.grey).darken(0.35).hex(),
    fontSize: 10,
    fontFamily: "LatoRegular",
    paddingTop: 15,
    paddingBottom: 30
  },

  // Input styles
  inputContainer: {
    flexDirection: "row"
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
  inputText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular"
  }
});
