import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    width: null,
    height: null
  },

  //Header styles
  header: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerIcon: {
    alignSelf: "flex-start",
    position: "absolute",
    left: 25
  },
  headerText: {
    color: "white",
    fontSize: 14,
    fontFamily: "LatoRegular"
  },

  // Content styles
  contentContainer: {
    width: deviceWidth - 40,
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 20
  },
  regularText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2,
    lineHeight: 20,
    paddingBottom: 10
  },
  blueText: {
    color: colors.blue
  },
  boldText: {
    fontFamily: "LatoBold"
  }
});
