import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";

export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 0 : Constants.statusBarHeight,
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  leftButton: {
    alignSelf: "flex-start",
    position: "absolute",
    left: 25
  },
  rightButton: {
    alignSelf: "flex-end",
    position: "absolute",
    right: 25
  },
  text: {
    color: "white",
    fontSize: 14,
    fontFamily: "LatoBold",
    letterSpacing: 1
  }
});
