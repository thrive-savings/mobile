import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  //Content styles
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 25,
    paddingBottom: 10
  },

  // subHeader styles
  subHeader: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between"
  },
  subHeaderTexts: {
    justifyContent: "center",
    alignItems: "flex-start"
  },
  subHeaderLabelText: {
    color: "white",
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.6
  },
  subHeaderAmountTextHolder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10
  },
  subHeaderAmountMainText: {
    color: "white",
    fontSize: 35,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2
  },
  subHeaderAmountRemainderText: {
    color: "white",
    fontSize: 20,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2,
    paddingBottom: 7.5
  },

  // Footer buttons
  footerButtons: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  whiteButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: (deviceWidth - 50) / 2 - 10,
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 10
  },
  whiteButtonText: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "LatoBold",
    color: colors.blue
  },
  gradientButton: {
    height: 40,
    width: (deviceWidth - 50) / 2 - 10,
    justifyContent: "center",
    borderRadius: 12,
    paddingHorizontal: 10
  },
  gradientButtonText: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "LatoBold",
    color: "white"
  }
});
