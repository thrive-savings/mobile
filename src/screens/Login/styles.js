const React = require("react-native");
const { Dimensions, Platform } = React;
const commonColor = require("../../theme/variables/commonColor");
const { customColors } = commonColor;

const deviceHeight = Dimensions.get("window").height;

export default {
  background: {
    flex: 1,
    width: null,
    height: deviceHeight,
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  container: {
    flex: 1,
    alignSelf: "center"
  },
  logo: {
    flex: 1,
    resizeMode: "center",
    height: deviceHeight / 4,
    alignSelf: "center"
  },
  form: {
    paddingLeft: 60,
    paddingRight: 60
  },
  inputGrp: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    height: 35
  },
  input: {
    color: "#fff",
    fontSize: 12
  },
  formErrorIcon: {
    color: "#fff",
    marginTop: 5,
    right: 10
  },
  formErrorText1: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: commonColor.brandDanger,
    textAlign: "right",
    top: -5
  },
  formErrorText2: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: "transparent",
    textAlign: "right",
    top: -5
  },
  formErrorText3: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: commonColor.brandDanger,
    textAlign: "center",
    top: -10
  },
  loginBtn: {
    marginTop: 7,
    height: 40,
    borderRadius: 10,
    backgroundColor: "white"
  },
  loginBtnText: {
    color: customColors.blue,
    fontSize: 14,
    top: Platform.OS === "android" ? -7 : 0
  },
  otherLinksContainer: {
    paddingTop: deviceHeight < 600 ? 5 : Platform.OS === "android" ? 10 : 15,
    flexDirection: "row"
  },
  helpBtns: {
    opacity: 0.9,
    fontWeight: "bold",
    color: "#fff",
    fontSize: Platform.OS === "android" ? 12 : 12
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  forgotPasswordBtn: {
    alignSelf: "flex-end"
  },
  forgotPasswordBtnText: {
    opacity: 0.9,
    fontSize: 12,
    color: "white"
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  signUpLabelText: {
    opacity: 0.9,
    fontSize: 12,
    color: customColors.charcoal
  },
  signUpBtnText: {
    color: customColors.blue
  },
  loaderColor: customColors.blue
};
