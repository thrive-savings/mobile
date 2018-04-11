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
    paddingVertical: 20,
    paddingHorizontal: 50,
    textAlign: "center"
  },
  greyText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center",
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  blueText: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center",
    paddingBottom: 20
  },
  thriveBotIcon: {
    resizeMode: "center"
  }
});
