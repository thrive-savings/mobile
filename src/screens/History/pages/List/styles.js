import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

export default StyleSheet.create({
  //Container
  container: {
    borderRadius: 8,
    backgroundColor: "white",
    padding: 20
  },
  separator: {
    alignSelf: "stretch",
    height: 1,
    backgroundColor: colors.grey,
    marginVertical: 10,
    marginHorizontal: -20
  },

  // Content styles
  row: {
    flexDirection: "row"
  },
  withOpacity: {
    opacity: 0.3
  },
  centerItems: {
    alignItems: "center",
    justifyContent: "center"
  },
  smallColumn: {
    flex: 0.3,
    alignSelf: "flex-start"
  },
  largeColumn: {
    flex: 0.4,
    alignSelf: "flex-start"
  },
  regularText: {
    textAlign: "left",
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    letterSpacing: 0.5
  },
  greyText: {
    textAlign: "left",
    color: colors.darkerGrey,
    fontSize: 10,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2
  },
  activityContent: {
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
