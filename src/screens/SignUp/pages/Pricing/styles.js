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

  // Text styles
  labelText: {
    color: colors.blue,
    fontFamily: "LatoBold",
    letterSpacing: 0.5,
    fontSize: 20
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15
  },
  priceAmountText: {
    color: colors.blue,
    fontFamily: "LatoBold",
    fontSize: 30
  },
  priceSuffixText: {
    color: colors.blue,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2,
    fontSize: 13
  },
  subLabelText: {
    color: colors.blue,
    fontFamily: "LatoRegular",
    fontSize: 13,
    textAlign: "center",
    letterSpacing: 0.2,
    paddingBottom: 15
  },
  blackText: {
    color: colors.charcoal,
    fontFamily: "LatoBold",
    letterSpacing: 0.5,
    fontSize: 25,
    paddingBottom: 15
  },

  infoContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 15,
    paddingHorizontal: 10
  },
  infoText: {
    color: colors.charcoal,
    fontFamily: "LatoRegular",
    letterSpacing: 0.5,
    fontSize: 15,
    paddingLeft: 10
  },
  infoIcon: {
    width: 30,
    height: 30
  },

  spacer: {
    height: 15
  }
});
