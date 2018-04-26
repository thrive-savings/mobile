import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    borderRadius: 8,
    alignSelf: "stretch",
    marginBottom: 10
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10
  },
  titleText: {
    paddingHorizontal: 10,
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    letterSpacing: 1.6
  },
  rightIcon: {
    alignSelf: "flex-end",
    textAlign: "right",
    color: colors.blue,
    fontSize: 15
  },
  rightIconRotated: {
    transform: [{ rotate: "90deg"}]
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  descText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    lineHeight: 21,
    letterSpacing: 0.2
  }
});
