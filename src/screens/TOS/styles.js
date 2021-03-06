import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  // Content styles
  scrollViewsContainer: {
    width: deviceWidth - 40,
    alignSelf: "center"
  },
  contentContainer: {
    width: deviceWidth - 40,
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 20
  },
  noBottomBorder: {
    paddingBottom: -10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  noTopBorder: {
    paddingTop: -10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  listContainer: {
    paddingHorizontal: 20
  },
  listRow: {
    flexDirection: "row",
    justifyContent: "flex-start"
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
    color: colors.blue,
    fontFamily: "LatoBold",
    paddingTop: 10
  },
  blueInnerText: {
    color: colors.blue
  },
  boldText: {
    fontFamily: "LatoBold"
  }
});
