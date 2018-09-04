import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  container: {
    marginTop: 10,
    width: deviceWidth - 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 20
  },

  // Goal Name styles
  nameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20
  },
  nameText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.6,
    paddingRight: 10
  },

  // Content styles
  contentView: {
    marginVertical: 20
  },
  labelText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    letterSpacing: 0.2,
    textAlign: "center"
  },
  descText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2,
    textAlign: "center"
  },
  amountBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.mediumGrey
  },
  amountText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    letterSpacing: 0.2,
    textAlign: "center"
  },

  // Error Text style
  formErrorText: {
    fontSize: 12,
    color: colors.error,
    textAlign: "center",
    top: -10
  },

  //Separator style
  separator: {
    height: 1,
    marginHorizontal: -20,
    alignSelf: "stretch",
    backgroundColor: colors.mediumGrey
  }
});
