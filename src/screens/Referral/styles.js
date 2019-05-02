import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  //Content styles
  container: {
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 15
  },

  // Button styles
  shareButton: {
    flexDirection: "row",
    alignSelf: "stretch",
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: colors.blue,
    margin: 30,
    padding: 10
  },
  copyButton: {
    flexDirection: "row",
    alignSelf: "stretch",
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: colors.green,
    marginHorizontal: 30,
    marginTop: 5,
    padding: 10
  },

  // Text styles
  whiteText: {
    color: "white",
    fontFamily: "LatoRegular",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.2
  },
  labelText: {
    fontFamily: "LatoBold",
    fontSize: 16,
    paddingVertical: 10
  },
  buttonText: {
    flex: 1
  },
  boldText: {
    fontFamily: "LatoBold"
  },

  // Toast style
  toastStyle: {
    backgroundColor: colors.darkestGrey,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 60
  }
});
