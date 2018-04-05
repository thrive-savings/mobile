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
  signupContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop:
      deviceWidth < 330
        ? Platform.OS === "android"
          ? deviceHeight / 9 - 20
          : deviceHeight / 10 - 20
        : Platform.OS === "android"
          ? deviceHeight / 9 - 20
          : deviceHeight / 8 - 20
  },
  signupHeader: {
    alignSelf: "center",
    fontSize: 22,
    padding: 5,
    fontWeight: "bold",
    color: "#FFF",
    marginTop:
      Platform.OS === "android" ? deviceHeight / 15 : deviceHeight / 15 + 10
  },
  formErrorIcon: {
    color: "#fff",
    marginTop: 5,
    right: 10
  },
  formErrorText1: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: colors.error,
    textAlign: "right",
    top: -10
  },
  formErrorText2: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: "transparent",
    textAlign: "right",
    top: -10
  },
  formErrorText3: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: colors.error,
    textAlign: "center",
    top: -10
  },
  inputGrp: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    borderWidth: 0,
    borderColor: "transparent"
  },
  input: {
    paddingLeft: 10,
    color: "#FFF"
  },
  signupBtn: {
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  otherLinkText: {
    alignSelf: "center",
    opacity: 0.8,
    fontSize: 14,
    fontWeight: "bold",
    color: "#EFF"
  },
  otherLinksContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  helpBtns: {
    opacity: 0.9,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF"
  }
});
