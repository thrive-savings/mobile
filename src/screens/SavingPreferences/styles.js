import { StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null
  },
  contentContainer: {
    flex: 0.7,
    width: deviceWidth - 50,
    alignSelf: "center"
  }
});
