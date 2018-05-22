import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceHeight = screen.height;
const deviceWidth = screen.width;

export default StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center"
  },
  logo: {
    resizeMode: "center",
    alignSelf: "center",
    width: (2 * deviceWidth - 60) / 3,
    height: deviceHeight / 4
  },

  // Form styles
  form: {
    flex: 1,
    paddingHorizontal: deviceWidth / 6
  },
  inputGrp: {
    flexDirection: "row",
    marginBottom: 8,
    borderWidth: 1.5,
    borderColor: colors.lightgrey,
    borderRadius: 8,
    height: 35
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color: "white",
    fontSize: 13,
    fontFamily: "LatoRegular"
  },

  // Login Button styles
  loginBtn: {
    justifyContent: "center",
    marginTop: 20,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.lightgrey
  },
  loginBtnText: {
    color: colors.blue,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    letterSpacing: 1.25
  },

  // Forgot Password styles
  forgotPasswordContainer: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 50
  },
  forgotPasswordBtnText: {
    color: colors.charcoal,
    opacity: 0.5,
    fontSize: Platform.OS === "android" ? 9 : 9,
    textDecorationLine: "underline"
  }
});
