import { StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const deviceHeight = screen.height;
const deviceWidth = screen.width;

export default StyleSheet.create({
  //Container
  container: {
    width: deviceWidth - 50,
    height: deviceHeight / 3,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 20
  }
});
