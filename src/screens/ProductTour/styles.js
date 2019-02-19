import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  // Content styles
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },

  // Texts
  tourLabelText: {
    color: "white",
    fontFamily: "LatoBold",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 40,
    letterSpacing: 0.2,
    paddingTop: 10
  },
  tourDescText: {
    fontFamily: "LatoRegular",
    color: "white",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 1
  },
  loginButtonText: {
    fontFamily: "LatoBold",
    color: colors.blue,
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1
  },

  // Bottom styles
  buttonsContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10
  },
  buttonStyle: {
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    height: 40,
    marginHorizontal: 2.5
  },
  nextButton: {
    flex: 0.6
  },
  loginButton: {
    flex: 0.4
  }
});
