import { StyleSheet } from "react-native";
const colors = require("../../theme/colors");

export default StyleSheet.create({
  labelText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center"
  },
  row: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
});
