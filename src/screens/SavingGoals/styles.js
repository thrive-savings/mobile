import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    width: null,
    height: null
  },

  //Header styles
  header: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerBackButton: {
    alignSelf: "flex-start",
    position: "absolute",
    left: 20
  },
  headerTitleText: {
    color: "white",
    fontSize: 15,
    fontFamily: "LatoBold",
    textAlign: "center"
  },

  //Content styles
  contentContainer: {
    alignItems: "center"
  },
});
