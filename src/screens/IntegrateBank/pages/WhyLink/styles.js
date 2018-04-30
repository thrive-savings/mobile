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
  titleText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    letterSpacing: 1.6,
    textAlign: "center",
    paddingVertical: 10
  },
  secondaryTitleText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    lineHeight: 24,
    letterSpacing: 0.2,
    textAlign: "center",
    paddingTop: 10,
  },
  bankSymbol: {
    width: 80,
    height: 80
  },
  regularText: {
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 21,
    letterSpacing: 0.2,
    textAlign: "center"
  },
  descText: {
    color: colors.charcoal,
    paddingVertical: 10
  },
  readMoreText: {
    color: colors.darkerGrey,
    textDecorationLine: "underline",
    paddingBottom: 10
  },

  separator: {
    height: 10
  }
});
