import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  // Overall Layout
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20
  },
  connectButton: {
    flex: 0.1,
    marginHorizontal: 25
  },

  // Account box
  accountArea: {
    backgroundColor: "white",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 8
  },
  accountMain: {
    flexDirection: "row"
  },
  accountInfoContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20
  },
  accountButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },
  accountButton: {
    width: deviceWidth / 2 - 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.blue,
    height: 35
  },
  blueText: {
    paddingHorizontal: 10,
    color: colors.blue,
    fontSize: 13,
    fontFamily: "LatoBold",
    textAlign: "center",
    letterSpacing: 0.5
  },

  // Other styles
  confirmModalContent: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    lineHeight: 20,
    letterSpacing: 0.2,
    textAlign: "center"
  },
  bottomPadder: {
    paddingBottom: 20
  },

  // Text styles
  regularAccountText: {
    color: colors.charcoal,
    fontSize: 14,
    fontFamily: "LatoRegular",
    lineHeight: 20,
    letterSpacing: 0.5
  },
  redText: {
    color: colors.error
  },
  greyText: {
    color: colors.darkestGrey
  },

  // Logo style
  bankLogo: {
    width: 60,
    height: 60
  }
});
