import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;
const deviceHeight = screen.height;

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
  categoryHolder: {
    width: deviceWidth / 3 - 10,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10,
    elevation: 5
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
