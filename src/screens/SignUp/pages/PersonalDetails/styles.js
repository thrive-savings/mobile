import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceHeight = screen.height;
const deviceWidth = screen.width;

export default StyleSheet.create({
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
    paddingBottom: 20
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
  },
  formLabelText: {
    paddingLeft: 20,
    paddingRight: 20,
    color: colors.charcoal,
    fontSize: 13,
    textAlign: "center"
  },
  inputGrp: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.greyInputBox,
    borderRadius: 8,
    height: 30,
    alignSelf: "center"
  },
  input: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center"
  },
});
