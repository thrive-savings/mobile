import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: deviceWidth - 50,
    alignSelf: "center"
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "transparent",
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 40
  },
  smsIcon: {
    marginLeft: -20
  },

  // Text styles
  labelText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    letterSpacing: 1.6,
    paddingBottom: 20,
  },
  secondaryText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0.2,
    paddingVertical: 20
  },

  // Phone Field styles
  phoneInputGrp: {
    height: 30,
    width: deviceWidth - 140,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    backgroundColor: "transparent",
    marginBottom: 10,
    paddingLeft: 20
  },
  inputLabel: {
    fontSize: 13,
    fontFamily: "LatoBold",
    color: colors.darkerGrey,
    paddingRight: 20
  },
  phoneInput: {
    flex: 1,
    color: colors.charcoal,
    fontSize: 13,
    width: 100,
    fontFamily: "LatoBold"
  },

  // Code Field styles
  codeInputGrp: {
    height: 30,
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    backgroundColor: "transparent",
    paddingLeft: 35,
    marginBottom: 5
  },
  codeInput: {
    flex: 1,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoBold"
  },
  formErrorText: {
    fontSize: 12,
    color: colors.error,
    textAlign: "center",
    top: -7
  },

  // Resend Button styles
  resendText: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular",
    paddingTop: 10
  }
});
