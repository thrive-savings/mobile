import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

export default StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "white"
  },
  webViewContainer: {
    flex: 1,
    overflow: "hidden",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  // Text styles
  titleText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    letterSpacing: 1.6,
    textAlign: "center",
    paddingVertical: 10
  }
});
