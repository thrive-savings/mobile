import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    alignSelf: "center",
    padding: 20,
    borderRadius: 8,
    backgroundColor: "white"
  },

  logosContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  dashLine: {
    width: 30,
    height: 5,
    backgroundColor: colors.blue,
    marginHorizontal: 10
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 10
  },

  // texts
  titleText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    letterSpacing: 1.6,
    textAlign: "center",
    paddingVertical: 10
  },
  infoText: {
    color: colors.charcoal,
    fontSize: 14,
    fontFamily: "LatoRegular",
    lineHeight: 22,
    letterSpacing: 1,
    paddingLeft: 10
  },

  buttonStyle: {
    marginTop: 10
  }
});
