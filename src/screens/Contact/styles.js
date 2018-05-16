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
    flex: 1,
    width: deviceWidth - 40,
    alignSelf: "center"
  },
  content: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "white",
    alignItems: "center"
  },
  descText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 22,
    letterSpacing: 0.2,
    textAlign: "center",
    padding: 20,
    paddingBottom: 0
  },
  helpButton: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.blue,
    height: 40,
    marginTop: 20
  },
  blueText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoRegular",
    textAlign: "center"
  }
});
