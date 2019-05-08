import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  // Content styles
  contentContainer: {
    alignItems: "center",
    padding: 10
  },

  // Icons
  momentumLogo: {
    marginTop: 20,
    alignSelf: "center"
  },
  tourIcon: {
    marginVertical: 20
  },

  // Texts
  tourLabelText: {
    color: "white",
    fontFamily: "LatoBold",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 0.2,
    padding: 20
  },
  tourDescText: {
    fontFamily: "LatoRegular",
    color: "white",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 1,
    paddingHorizontal: 35
  },
  regularText: {
    color: colors.charcoal,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "LatoRegular"
  },
  boldText: {
    fontFamily: "LatoBold"
  },
  blueText: {
    color: colors.blue
  },
  textPadder: {
    margin: 20
  },
  modalButtonStyle: {
    marginHorizontal: 20,
    marginVertical: 5
  },

  // Bottom styles
  buttonsContainer: {
    flex: 0.3,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10
  },
  specialButton: {
    marginHorizontal: 50,
    marginBottom: 10
  },
  otherButtonText: {
    fontFamily: "LatoRegular",
    color: colors.blue,
    textAlign: "center",
    fontSize: 13,
    letterSpacing: 1
  }
});
