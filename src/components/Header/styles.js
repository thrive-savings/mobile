import { StyleSheet, Platform } from "react-native";
import { Constants } from "expo";

export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 0 : Constants.statusBarHeight,
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignSelf: "flex-start",
    position: "absolute",
    left: 25
  },
  text: {
    color: "white",
    fontSize: 14,
    fontFamily: "LatoRegular"
  }
});
