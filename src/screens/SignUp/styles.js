import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null
  },
  bottomContainer: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    left: (deviceWidth) / 4 + 20
  },
  bottomLabelText: {
    color: colors.charcoal,
    fontSize: 10
  },
  bottomBtn: {
    top: -11,
    left: -10
  },
  bottomBtnText: {
    color: colors.blue,
    fontSize: 10,
  }
});
