import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    width: null,
    height: null
  },

  // Content styles
  contentContainer: {
    flex: 1,
    width: deviceWidth - 40,
    alignSelf: "center",
    paddingVertical: 10,
  },
  contentBox: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingTop: 20,
    marginBottom: 20
  },
  legalBox: {
    paddingTop: 0
  },
  contentTitle: {
    paddingLeft: 20,
    color: colors.darkerGrey,
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.5
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  regularText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2
  },
  blueText: {
    color: colors.blue
  },
  disabledText: {
    color: colors.darkerGrey
  },

  // Linked Bank styles
  linkedBankBox: {
    alignItems: "center",
    padding: 20
  },
  linkedBankLabelText: {
    color: colors.blue,
    fontSize: 18,
    fontFamily: "LatoRegular",
    lineHeight: 30,
    letterSpacing: 0.2,
    paddingTop: 20
  },
  linkedBankDescText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 22,
    letterSpacing: 0.2,
    textAlign: "center",
    padding: 20
  },

  // Separator style
  separator: {
    height: 1,
    alignSelf: "stretch",
    backgroundColor: colors.mediumGrey
  }
});
