import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  container: {
    width: deviceWidth - 40,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "white"
  },
  inputGrp: {
    height: 30,
    width: deviceWidth - 90,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkergrey,
    backgroundColor: "transparent",
    marginBottom: 10,
    paddingLeft: 10
  },
  input: {
    flex: 1,
    color: colors.charcoal,
    fontSize: 13,
    width: 100,
    fontFamily: "LatoBold"
  },
  formErrorIcon: {
    color: colors.darkergrey,
    right: 5
  },
  formErrorText1: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: colors.error,
    textAlign: "right",
    top: -7
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
  }
});
