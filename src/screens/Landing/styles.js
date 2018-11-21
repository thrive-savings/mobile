import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceHeight = screen.height;
const deviceWidth = screen.width;

export default StyleSheet.create({
  // Logo styles
  logoContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logo: {
    resizeMode: "contain",
    alignSelf: "center",
    width: (2 * deviceWidth - 60) / 3,
    height: deviceHeight / 4
  },

  signUpBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
    width: deviceWidth * 2 / 3,
    height: 50
  },

  // Texts
  greenText: {
    color: colors.green
  },
  labelText: {
    color: "white",
    fontFamily: "LatoBold",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 1.5
  },
  descText: {
    fontFamily: "LatoRegular",
    color: "white",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0.75
  },
  buttonText: {
    fontFamily: "LatoRegular",
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 1.5
  },

  // Content styles
  contentContainer: {
    flex: 0.4,
    alignItems: "center"
  },
  contentPadder: {
    paddingTop: 15,
    paddingBottom: 30
  },

  // Bottom styles
  bottomContainer: {
    flex: 0.1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20
  },
  bottomPadder: {
    paddingBottom: 10
  }
});
