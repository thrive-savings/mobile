import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  // Content styles
  contentContainer: {
    flex: 1,
    width: deviceWidth - 40,
    alignSelf: "center",
    paddingVertical: 10,
  },
  contentBox: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20
  },

  // Categories styles
  labelText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 21,
    letterSpacing: 0.2,
    textAlign: "center"
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: "center"
  },
  categoryHolderNew: {
    alignSelf: "center",
    alignItems: "center",
    width: deviceWidth / 2 - 70,
    paddingVertical: 20,
    borderRadius: 12,
    backgroundColor: "white"
  },
  categoryHolder: {
    width: deviceWidth / 2 - 70,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10
  },
  categoryName: {
    paddingTop: 10,
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    letterSpacing: 1.2,
    textAlign: "center"
  },
});
