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
    marginBottom: 20,
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

  // Set Default styles
  accountsHolder: {
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.green,
    justifyContent: "space-between",
    alignItems: "center"
  },
  accountsLabelText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 21,
    letterSpacing: 0.2,
    paddingVertical: 20,
    textAlign: "center"
  },
  continueButton: {
    borderRadius: 8,
    backgroundColor: colors.green,
    marginHorizontal: 20,
    height: 40,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  continueButtonText: {
    color: "white",
    fontSize: 15,
    fontFamily: "LatoRegular"
  },

  // Accounts View styles
  accountRow: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    paddingBottom: 10
  },
  accountTitleText: {
    color: colors.darkerGrey,
    fontSize: 12,
    fontFamily: "LatoRegular",
    lineHeight: 21,
    letterSpacing: 0.2,
    paddingLeft: 10,
    paddingBottom: 5
  },
  selectedTitleText: {
    color: colors.charcoal
  },

  // Error Text style
  errorText: {
    fontSize: 12,
    color: colors.error,
    textAlign: "center"
  },
});
