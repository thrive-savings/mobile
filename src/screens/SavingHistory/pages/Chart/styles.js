import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  //Container
  container: {
    flex: 1,
    width: deviceWidth - 50,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 20
  },
  placeholder: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    letterSpacing: 0.5
  }
});
