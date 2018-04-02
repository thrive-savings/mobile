const React = require("react-native");
const { Dimensions, Platform } = React;
const commonColor = require("../../theme/variables/commonColor");

const screen = Dimensions.get("window");
const deviceHeight = screen.height;
const deviceWidth = screen.width;

export default {
  background: {
    flex: 1,
    width: null,
    height: deviceHeight
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center"
  },
  logo: {
    resizeMode: "center",
    width: (2 * deviceWidth - 60) / 3,
    height: deviceHeight / 4,
    alignSelf: "center"
  },
  form: {
    flex: 1,
    paddingLeft: deviceWidth / 6,
    paddingRight: deviceWidth / 6
  },
  inputGrp: {
    flexDirection: "row",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: commonColor.customColors.lightgrey,
    borderRadius: 8,
    height: 40
  },
  input: {
    paddingLeft: 10,
    color: "#fff",
    fontSize: 13
  },
  formErrorIcon: {
    color: "#fff",
    right: 6
  },
  formErrorText1: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: commonColor.customColors.error,
    textAlign: "right",
    top: -7
  },
  formErrorText2: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: "transparent",
    textAlign: "right",
    top: -8
  },
  loginBtn: {
    marginTop: 7,
    height: 40,
    borderColor: commonColor.customColors.charcoal,
    borderRadius: 8,
    backgroundColor: commonColor.customColors.lightgrey
  },
  loginBtnText: {
    color: commonColor.customColors.blue,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center"
  },
  forgotPasswordContainer: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 40
  },
  forgotPasswordBtnText: {
    color: commonColor.customColors.charcoal,
    opacity: 0.5,
    fontSize: Platform.OS === "android" ? 9 : 9
  },
  signUpContainer: {
     flex: 1,
     alignSelf: "center",
     flexDirection: "row",
     position: "absolute",
     bottom: 5,
     left: (deviceWidth) / 4 + 20
  },
  signUpLabelText: {
    color: commonColor.customColors.charcoal,
    fontSize: 10
  },
  signUpBtn: {
    top: -11,
    left: -10
  },
  signUpBtnText: {
    color: commonColor.customColors.blue,
    fontSize: 10,
  }
};
