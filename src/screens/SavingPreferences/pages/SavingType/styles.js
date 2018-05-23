import { StyleSheet, Platform } from "react-native";
const colors = require("../../../../theme/colors");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "transparent",
    backgroundColor: "white",
    padding: 20
  },
  topPadder: {
    marginTop: 20
  },

  // Texts
  labelText: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: "LatoBold",
    paddingBottom: 10,
    paddingLeft: 60,
    paddingRight: 60,
    textAlign: "center"
  },
  secondaryText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center",
    paddingBottom: 10
  },

  // Grid styles
  typesContainer: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: "space-between"
  },
  savingTypeContainer: {
    borderRadius: 12
  },
  savingTypeTouchable: {
    margin: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "white"
  },
  borderGradient: {
    borderRadius: 12
  },
  tagGradient: {
    alignSelf: "flex-end",
    position: "absolute",
    paddingRight: 10,
    paddingLeft: 20,
    paddingVertical: 5,
    top: 5,
    right: Platform.OS === "android" ? 0 : -5,
    borderRadius: 5,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: "hidden"
  },
  tagText: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 12,
    fontFamily: "LatoRegular",
    color: "white"
  },
  greenHeader: {
    color: colors.green,
    fontSize: 12,
    fontFamily: "LatoRegular"
  },
  greenFooter: {
    color: colors.green,
    fontSize: 12,
    fontFamily: "LatoItalic"
  },
  blueHeader: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular"
  },
  blueFooter: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoItalic"
  },
  bodyText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    paddingVertical: 10
  },
  disabledType: {
    opacity: 0.6
  }
});
