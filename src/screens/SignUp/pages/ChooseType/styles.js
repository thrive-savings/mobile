import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40
  },
  logoContainer: {
    flex: 0.4,
    justifyContent: "center"
  },
  contentContainer: {
    flex: 0.6,
    alignSelf: "stretch",
    paddingTop: 20
  },

  buttonStyle: {
    justifyContent: "center",
    marginTop: 7,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.lightgrey
  },

  // Texts
  buttonText: {
    color: colors.blue,
    fontFamily: "LatoBold",
    fontSize: 15,
    textAlign: "center"
  },
  greenText: {
    color: colors.green
  },
  regularText: {
    paddingTop: 30,
    paddingBottom: 10,
    color: "white",
    fontFamily: "LatoRegular",
    fontSize: 14,
    textAlign: "center"
  }
});
