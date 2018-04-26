import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerIcon: {
    alignSelf: "flex-start",
    position: "absolute",
    left: 25
  },
  headerIconImage: {
    resizeMode: "center"
  },
  headerLogo: {
    resizeMode: "center"
  },
  contentContainer: {
    flex: 0.7,
    width: deviceWidth - 50,
    alignSelf: "center"
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "transparent",
    backgroundColor: "white",
    padding: 20
  },
  formContainer: {
    flex: 1
  },
  labelText: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: "LatoBold",
    letterSpacing: 1.6
  },
  secondaryText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    textAlign: "center",
    letterSpacing: 0.2,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  resendButton: {
    paddingTop: 10,
    alignSelf: "flex-end"
  },
  resendButtonText: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular"
  },
  inputGrp: {
    height: 30,
    width: deviceWidth - 100,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    backgroundColor: "transparent",
    marginBottom: 10
  },
  input: {
    paddingLeft: 10,
    marginVertical: 10,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  formErrorIcon: {
    color: colors.darkerGrey,
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
