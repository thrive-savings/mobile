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
    height: deviceHeight,
    backgroundColor: "rgba(0,0,0,0.1)"
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
    color: commonColor.brandDanger,
    textAlign: "right",
    top: -8
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
    top: -10,
    right: -10,
    flexDirection: "row"
  },
  forgotPasswordBtnText: {
    color: commonColor.customColors.lightgrey,
    fontSize: Platform.OS === "android" ? 12 : 12
  },
  signUpContainer: {
     flex: 1,
     alignSelf: "center",
     flexDirection: "row",
     position: "absolute",
     bottom: 5
  },
  signUpLabelText: {
    color: commonColor.customColors.charcoal,
    fontSize: 12
  },
  signUpBtn: {
    top: -8
  },
  signUpBtnText: {
    color: commonColor.customColors.blue,
    fontSize: 12,
  }
};
