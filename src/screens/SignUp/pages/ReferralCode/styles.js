import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceHeight = screen.height;
const deviceWidth = screen.width;

export default StyleSheet.create({
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
    borderColor: colors.lightgrey,
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
    color: colors.lightgrey,
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
  },
  bottomContainer: {
     flex: 1,
     alignSelf: "center",
     flexDirection: "row",
     position: "absolute",
     bottom: 5
  },
  bottomLabelText: {
    color: colors.charcoal,
    fontSize: 10
  },
  bottomBtn: {
    top: -11,
    left: -10
  },
  bottomBtnText: {
    color: colors.blue,
    fontSize: 10,
  }
});
