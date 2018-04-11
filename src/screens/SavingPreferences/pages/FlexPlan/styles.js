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
  labelText: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: "LatoBold",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center"
  },
  greyText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center"
  },
  blueText: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center"
  },
  desc1: {
    paddingBottom: 15
  },
  desc2: {
    paddingBottom: 15,
    paddingHorizontal: 30
  },
  separator: {
    alignSelf: "stretch",
    height: 2,
    backgroundColor: color(colors.grey).darken(0.005).hex(),
    marginVertical: 15
  }
});
