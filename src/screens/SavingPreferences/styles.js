import { StyleSheet, Dimensions, Platform } from "react-native";
const colors = require("../../theme/colors");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  headerIcon: {
    color: "white",
    top: 5
  },
  headerText: {
    color: "white",
    fontSize: 14,
    paddingLeft: deviceWidth / 6
  },
  contentContainer: {
    flex: 0.7,
    width: deviceWidth - 50,
    alignSelf: "center"
  }
});
