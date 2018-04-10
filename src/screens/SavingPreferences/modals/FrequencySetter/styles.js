import { StyleSheet } from "react-native";
const colors = require("../../../../theme/colors");

export default StyleSheet.create({
  labelText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center"
  },
  optionsContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
    paddingVertical: 10
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  optionText: {
    color: colors.charcoal,
    paddingVertical: 10,
    fontSize: 12,
    fontFamily: "LatoRegular"
  },
  enabledText: {
    color: colors.blue
  },
  tickIcon: {
    resizeMode: "cover"
  },
  separator: {
    alignSelf: "stretch",
    height: 2,
    backgroundColor: colors.grey,
    marginVertical: 10
  }
});
