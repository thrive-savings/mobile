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

  // Save More styles
  saveMoreContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 22.5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10
  },
  saveMoreText: {
    color: colors.charcoal,
    fontSize: 16,
    fontFamily: "LatoRegular",
    paddingBottom: 2
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

  // Notification styles
  notificationAnimationholder: {
    alignSelf: "stretch"
  },
  notificationHolder: {
    alignSelf: "stretch",
    marginHorizontal: 10,
    marginBottom: 20
  },
  notificationContent: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 15,
    paddingBottom: 10
  },
  notificationTextsContainer: {
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    top: -5
  },
  notificationTitle: {
    color: "white",
    fontSize: 15,
    fontFamily: "LatoBold",
    lineHeight: 22,
    letterSpacing: 1.6
  },
  notificationDescription: {
    color: "white",
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 22,
    letterSpacing: 0.2
  },

  // Goals styles
  goalHolder: {
    alignSelf: "stretch",
    marginHorizontal: 10,
    marginBottom: 10
  },
  goalCard: {
    borderRadius: 8,
    padding: 15,
    paddingBottom: 10
  },
  goalRow: {
    flexDirection: "row"
  },
  goalTextsContainer: {
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    top: -5
  },
  goalLabelText: {
    color: colors.darkerGrey,
    fontSize: 12,
    fontFamily: "LatoRegular",
    lineHeight: 20,
    letterSpacing: 1
  },
  goalNameText: {
    color: colors.charcoal,
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.5
  },
  goalAmountText: {
    color: colors.blue,
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 22,
    letterSpacing: 0.2
  },
  goalProgressContainer: {
    paddingTop: 10
  },
  goalProgressTextsHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 7.5
  },
  goalProgressBarText: {
    color: colors.charcoal,
    fontSize: 11,
    fontFamily: "LatoRegular",
    letterSpacing: 0.1
  },

  // Add Goal styles
  addGoalButton: {
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
  bottomPadder: {
    paddingBottom: 20
  }
});
