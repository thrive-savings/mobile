const React = require("react-native");
const { Dimensions, Platform } = React;
const commonColor = require("../../../../theme/variables/commonColor");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  contentContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  logoContainer: {
    flex: 0.12
  },
  logo: {
    resizeMode: "center",
    height: deviceHeight / 8,
    width: deviceWidth / 4
  },
  formContainer: {
    flex: 0.8,
    width: deviceWidth - 60,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent"
  },
  formContent: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingRight: 20
  },
  rowView: {
    flexDirection: "row"
  },
  bottomContainer: {
     flex: 0.08,
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
  },
  formLabelText: {
    paddingLeft: 20,
    paddingRight: 20,
    color: commonColor.customColors.charcoal,
    fontSize: 13,
    textAlign: "center"
  },
  inputGrp: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: commonColor.customColors.greyInputBox,
    borderRadius: 8,
    height: 30,
    alignSelf: "center"
  },
  input: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center"
  },
};
