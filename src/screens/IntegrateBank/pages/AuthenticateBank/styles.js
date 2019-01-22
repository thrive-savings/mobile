import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

export default StyleSheet.create({
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
  titleText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoBold",
    letterSpacing: 1.6,
    textAlign: "center",
    paddingVertical: 10
  },
  webViewContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20
  },
  webViewPadder: {
    marginTop: -20
  }
});
