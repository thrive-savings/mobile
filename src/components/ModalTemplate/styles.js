import { StyleSheet, Dimensions } from "react-native";
const colors = require("../../theme/colors");

const deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    alignSelf: "center",
    borderRadius: 12,
    borderColor: "transparent",
    backgroundColor: colors.grey,
    width: deviceWidth - 80
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
  closeButton: {
    alignSelf: "flex-end",
    position: "absolute",
    right: 15,
    top: 15
  },
  closeIcon: {
    alignSelf: "flex-end",
    resizeMode: "center"
  },
  contentPlaceholderText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular"
  }
});
