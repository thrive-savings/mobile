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
    justifyContent: "center",
    alignItems: "center"
  },
  headerIcon: {
    alignSelf: "flex-start",
    position: "absolute",
    left: 25
  },
  headerIconImage: {
    resizeMode: "center"
  },
  headerText: {
    color: "white",
    fontSize: 14
  },
  contentContainer: {
    flex: 0.7,
    width: deviceWidth - 50,
    alignSelf: "center"
  }
});
