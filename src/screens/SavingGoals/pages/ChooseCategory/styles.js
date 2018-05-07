import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 10,
    justifyContent: "space-around",
    alignItems: "center"
  },
  categoryHolder: {
    width: deviceWidth / 2 - 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    paddingTop: 15,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: "white"
  },
  categoryName: {
    paddingTop: 10,
    color: colors.charcoal,
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.6
  },
});
