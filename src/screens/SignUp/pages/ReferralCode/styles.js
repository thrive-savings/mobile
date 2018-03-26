const React = require("react-native");
const { Dimensions, Platform } = React;
const commonColor = require("../../../../theme/variables/commonColor");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    flex: 1,
    paddingTop: deviceHeight / 5,
    paddingBottom: deviceHeight / 5,
    paddingLeft: deviceWidth / 5,
    paddingRight: deviceWidth / 5
  },
  inputGrp: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: commonColor.customColors.lightgrey,
    borderRadius: 8,
    height: 30,
    width: 120,
    alignSelf: "center"
  },
  input: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center"
  },
  logo: {
    resizeMode: "center",
    width: (2 * deviceWidth - 60) / 3,
    height: deviceHeight / 4
  },
  text: {
    color: commonColor.customColors.lightgrey,
    textAlign: "center",
    fontSize: 13,
    paddingBottom: 20
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
  createAccountBtn: {
    marginTop: 7,
    height: 40,
    borderColor: commonColor.customColors.charcoal,
    borderRadius: 8,
    backgroundColor: commonColor.customColors.lightgrey
  },
  createAccountBtnText: {
    color: commonColor.customColors.blue,
    //fontWeight: "bold",
    fontSize: 15,
    textAlign: "center"
  },
  bottomContainer: {
     flex: 1,
     alignSelf: "center",
     flexDirection: "row",
     position: "absolute",
     bottom: 5
  },
  bottomLabelText: {
    color: commonColor.customColors.charcoal,
    fontSize: 10
  },
  bottomBtn: {
    top: -11,
    left: -10
  },
  bottomBtnText: {
    color: commonColor.customColors.blue,
    fontSize: 10,
  }
};
