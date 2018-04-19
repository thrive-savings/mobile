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
  headerLogo: {
    resizeMode: "center"
  },
  contentContainer: {
    flex: 1,
    width: deviceWidth - 50,
    alignSelf: "center"
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "transparent",
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 40
  },
  smsIcon: {
    resizeMode: "center",
    marginLeft: -20
  },
  labelText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    letterSpacing: 1.6,
    paddingBottom: 20,
  },
  secondaryText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0.2,
    paddingVertical: 20
  },
  inputGrp: {
    height: 30,
    width: deviceWidth - 140,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkergrey,
    backgroundColor: "transparent",
    marginBottom: 10,
    paddingLeft: 20
  },
  inputLabel: {
    fontSize: 13,
    fontFamily: "LatoBold",
    color: colors.darkergrey,
    paddingRight: 20
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
