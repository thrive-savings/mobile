import { StyleSheet, Dimensions } from "react-native";
const colors = require("../../../../theme/colors");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 12,
    borderColor: "transparent",
    backgroundColor: colors.grey,
    width: deviceWidth - 80,
    height: ( deviceHeight * 2) / 3
  },
  closeButton: {
    alignSelf: "flex-end",
    position: "absolute",
    right: 20,
    top: 20
  },
  closeIcon: {
    alignSelf: "flex-end",
    resizeMode: "center"
  }
});
