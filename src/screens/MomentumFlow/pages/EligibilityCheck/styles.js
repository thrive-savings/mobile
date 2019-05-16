import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

export default StyleSheet.create({
  // Content styles
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20
  },

  // Input Area styles
  inputHolder: {
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  inputButtonsHolder: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: 10
  },
  inputButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.charcoal,
    marginHorizontal: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30
  },
  inputButtonSelected: {
    backgroundColor: colors.blue,
    borderWidth: 0
  },
  inputButtonWider: {
    width: 80
  },

  // Checkbox Styles
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  checkbox: {
    marginRight: 20,
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    borderRadius: 2
  },
  checkboxTick: {
    alignSelf: "center"
  },

  // Icons
  momentumLogo: {
    marginTop: -40,
    alignSelf: "center"
  },

  // Text styles
  regularText: {
    color: colors.charcoal,
    fontFamily: "LatoRegular",
    textAlign: "center",
    fontSize: 13,
    letterSpacing: 0.2
  },
  faqText: {
    textDecorationLine: "underline"
  },
  boldText: {
    fontFamily: "LatoBold"
  },
  blueText: {
    color: colors.blue
  },
  whiteText: {
    color: "white"
  },
  leftAlignedText: {
    textAlign: "left"
  }
});
