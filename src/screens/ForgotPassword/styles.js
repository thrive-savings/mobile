import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  // Content styles
  contentContainer: {
    width: deviceWidth - 50,
    alignSelf: "center"
  },
  contentView: {
    alignItems: "center",
    borderRadius: 10,
    borderColor: "transparent",
    backgroundColor: "white",
    padding: 20
  },

  // Texts
  labelText: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: "LatoBold",
    letterSpacing: 1.6
  },
  secondaryText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    textAlign: "center",
    letterSpacing: 0.2,
    paddingVertical: 20,
    paddingHorizontal: 20
  },

  // Resend Button styles
  resendButton: {
    paddingTop: 10,
    alignSelf: "flex-end"
  },
  resendButtonText: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular"
  },

  // Input styles
  inputGrp: {
    height: 30,
    width: deviceWidth - 100,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    backgroundColor: "transparent",
    marginBottom: 10
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular"
  }
});
