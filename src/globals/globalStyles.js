import { StyleSheet, Dimensions } from "react-native";
import colors from "../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    width: null,
    height: null
  },

  // Shadow style
  shadow: {
    // Android
    elevation: 2.5,
    // IOS
    shadowColor: colors.charcoal,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  // Form Error styles
  formErrorIcon: {
    color: "#fff",
    right: 6
  },
  formErrorText1: {
    fontSize: 12,
    color: colors.error,
    textAlign: "right",
    top: -7
  },
  formErrorText2: {
    fontSize: 12,
    color: "transparent",
    textAlign: "right",
    top: -8
  },
  formErrorText3: {
    fontSize: 12,
    color: colors.error,
    textAlign: "center",
    top: -10
  },

  // Bottom Container styles
  bottomContainer: {
     flex: 1,
     alignSelf: "center",
     flexDirection: "row",
     position: "absolute",
     bottom: 20,
     left: (deviceWidth) / 4 + 20
  },
  bottomLabelText: {
    color: colors.charcoal,
    fontSize: 10,
    fontFamily: "LatoRegular",
    paddingRight: 5
  },
  bottomBtnText: {
    color: colors.blue,
    fontSize: 10,
    fontFamily: "LatoRegular"
  }
});
