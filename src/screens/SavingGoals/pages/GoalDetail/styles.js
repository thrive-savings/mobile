import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  infoBox: {
    marginTop: 10,
    width: deviceWidth - 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 20
  },
  nameText: {
    paddingTop: 10,
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.6
  },
  amountTextHolder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  amountMainText: {
    color: colors.blue,
    fontSize: 35,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2
  },
  amountRemainderText: {
    color: colors.blue,
    fontSize: 20,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2,
    paddingBottom: 7.5
  },

  // Progress Bar styles
  progressContainer: {
    alignSelf: "stretch",
    paddingVertical: 10
  },
  progressTextsHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 7.5
  },
  progressBarText: {
    color: colors.charcoal,
    fontSize: 11,
    fontFamily: "LatoRegular",
    letterSpacing: 0.1
  },

  // Extra Info View styles
  extraInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingTop: 10,
    paddingBottom: 20
  },
  extraInfoLeftView: {
    alignItems: "flex-start"
  },
  extraInfoRightView: {
    alignItems: "flex-end"
  },
  extraInfoLabel: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2,
    paddingBottom: 5
  },
  extraInfoText: {
    color: colors.blue,
    fontSize: 18,
    fontFamily: "LatoBold",
    lineHeight: 21,
    letterSpacing: 0.2
  },

  // Edit Button styles
  editButtonCard: {
    height: 40,
    alignSelf: "stretch",
    borderRadius: 8,
    backgroundColor: "white"
  },
  editButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  editButtonText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    letterSpacing: 1.5
  },

  //Separator style
  separator: {
    height: 1,
    marginHorizontal: -20,
    alignSelf: "stretch",
    backgroundColor: colors.mediumGrey
  },
});
