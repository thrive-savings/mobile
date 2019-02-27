import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  // Subheader styles
  subHeader: {
    flex: 0.25,
    paddingTop: 5,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "space-around"
  },
  balanceLabelText: {
    color: "white",
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.6
  },
  balanceTextHolder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10
  },
  balanceMainText: {
    color: "white",
    fontSize: 35,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2
  },
  balanceRemainderText: {
    color: "white",
    fontSize: 20,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2,
    paddingBottom: 7.5
  },
  subHeaderLabel: {
    width: deviceWidth / 2,
    height: 40,
    borderRadius: 8,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  subHeaderText: {
    color: colors.charcoal,
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.6,
    textAlign: "center"
  },

  // Content styles
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  content: {
    alignItems: "center"
  },

  // CCs styles
  ccHolder: {
    alignSelf: "stretch",
    marginHorizontal: 10,
    marginBottom: 10
  },
  ccCard: {
    borderRadius: 8,
    padding: 15,
    paddingBottom: 10
  },
  ccRow: {
    flexDirection: "row"
  },
  ccTextsContainer: {
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    top: -5
  },
  ccGreyText: {
    color: colors.darkerGrey,
    fontSize: 12,
    fontFamily: "LatoRegular",
    lineHeight: 20,
    letterSpacing: 1
  },
  ccDarkestGreyText: {
    color: colors.darkestGrey,
    fontSize: 13,
    fontFamily: "LatoBold",
    lineHeight: 20,
    letterSpacing: 1.25
  },
  ccBlackText: {
    color: colors.charcoal,
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.5
  },
  ccStatusHolder: {
    marginBottom: -7.5,
    alignItems: "center",
    flexDirection: "row"
  },
  ccStatusText: {
    paddingBottom: 3,
    paddingLeft: 3
  },

  // Add cc styles
  addCcButton: {
    marginHorizontal: 10,
    marginTop: 10
  },

  // Info Button styles
  infoIconButton: {
    alignSelf: "flex-end",
    position: "absolute",
    right: 0,
    top: 0
  },
  infoContentText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    lineHeight: 20,
    letterSpacing: 0.2,
    textAlign: "center"
  },

  // Padders
  textsPadder: {
    paddingBottom: 10
  },
  bottomPadder: {
    paddingBottom: 20
  },

  // Empty state text style
  emptyStateIcon: {
    marginVertical: 20
  },
  emptyStateText: {
    textAlign: "center",
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular",
    letterSpacing: 1.0
  }
});
