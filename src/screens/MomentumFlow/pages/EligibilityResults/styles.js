import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  container: {
    width: deviceWidth - 40,
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
    backgroundColor: "white"
  },
  momentumLogo: {
    marginTop: 10,
    alignSelf: "center"
  },

  // Text styles
  regularText: {
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 20,
    letterSpacing: 0.2,
    textAlign: "center",
    color: colors.charcoal,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  lessPaddedText: {
    paddingVertical: 10
  },
  boldText: {
    fontFamily: "LatoBold"
  },
  leftAlignedText: {
    paddingHorizontal: 0,
    textAlign: "left"
  },
  blueText: {
    color: colors.blue
  },

  // Checkbox Styles
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20
  },
  checkbox: {
    marginRight: 20,
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    borderRadius: 2
  },
  checkboxTick: {
    alignSelf: "center"
  }
});
