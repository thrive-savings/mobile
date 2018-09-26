import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceHeight = screen.height;
const deviceWidth = screen.width;

const LOGO_WIDTH = (2 * deviceWidth - 60) / 3;

export default StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: "center",
    paddingHorizontal: deviceWidth / 6
  },

  // Input styles
  inputGrp: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.lightgrey,
    borderRadius: 8,
    height: 30,
    width: 120,
    alignSelf: "center",
    marginBottom: 10
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color: "#fff",
    fontSize: 13,
    textAlign: "center"
  },

  // Logo style
  logo: {
    resizeMode: "contain",
    width: LOGO_WIDTH,
    height: deviceHeight / 4,
    marginBottom: 20
  },
  smallerLogo: {
    resizeMode: "contain",
    width: LOGO_WIDTH,
    marginBottom: 20
  },

  // Text styles
  textAbove: {
    fontSize: 13,
    paddingHorizontal: 20
  },
  textBelow: {
    fontSize: 12,
    marginHorizontal: -20
  },
  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "LatoRegular",
    paddingBottom: 20,
    letterSpacing: 0.2,
    lineHeight: 22
  },
  requestOneText: {
    fontFamily: "LatoBold"
  },
  formErrorText1: {
    fontSize: 12,
    color: colors.error,
    textAlign: "center",
    top: -7
  },

  // Create Account Button styles
  createAccountBtn: {
    alignSelf: "stretch",
    justifyContent: "center",
    marginTop: 7,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.lightgrey
  },
  createAccountBtnText: {
    color: colors.blue,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "LatoBold"
  }
});
