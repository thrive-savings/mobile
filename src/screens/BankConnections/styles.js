import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

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
    marginTop: 10,
    marginHorizontal: -10
  },
  accountButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.blue,
    height: 30,
    marginHorizontal: 5
  },
  blueButtonText: {
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
  greyText: {
    color: colors.darkestGrey
  },
  redText: {
    color: colors.error
  },
  blueText: {
    color: colors.blue
  },
  readMoreSecurityText: {
    textAlign: "center",
    color: "white",
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 22,
    letterSpacing: 1,
    textDecorationLine: "underline",
    paddingBottom: 10
  },

  // Logo style
  bankLogo: {
    width: 60,
    height: 60
  },

  // Empty state styles
  emptyStateContainer: {
    margin: 10,
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyStateLabel: {
    textAlign: "center",
    color: "white",
    fontFamily: "LatoBold",
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: 1.6,
    paddingTop: 30,
    paddingBottom: 20
  },
  emptyStateDesc: {
    textAlign: "center",
    color: "white",
    fontFamily: "LatoRegular",
    fontSize: 13,
    lineHeight: 22,
    letterSpacing: 1.6
  }
});
