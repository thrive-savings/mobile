import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceHeight = screen.height;
const deviceWidth = screen.width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: deviceHeight / 6,
    paddingHorizontal: deviceWidth / 6
  },
  inputGrp: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.lightgrey,
    borderRadius: 8,
    height: 30,
    width: 120,
    alignSelf: "center"
  },
  input: {
    color: "#fff",
    fontSize: 13
  },
  logo: {
    resizeMode: "center",
    width: (2 * deviceWidth - 60) / 3,
    height: deviceHeight / 4,
    marginBottom: 20
  },
  textAbove: {
    fontSize: 13,
    paddingHorizontal: 20
  },
  textBelow: {
    fontSize: 12
  },
  text: {
    color: colors.lightgrey,
    textAlign: "center",
    fontFamily: "LatoRegular",
    paddingBottom: 20
  },
  formErrorIcon: {
    color: "#fff",
    right: 6
  },
  formErrorText1: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: colors.error,
    textAlign: "right",
    top: -8
  },
  formErrorText2: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: "transparent",
    textAlign: "right",
    top: -8
  },
  formErrorText3: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: colors.error,
    textAlign: "center",
    top: -10
  },
  createAccountBtn: {
    marginTop: 7,
    height: 40,
    borderColor: colors.charcoal,
    borderRadius: 8,
    backgroundColor: colors.lightgrey
  },
  createAccountBtnText: {
    color: colors.blue,
    fontSize: 15,
    textAlign: "center"
  }
});
