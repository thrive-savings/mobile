import { StyleSheet, Dimensions } from "react-native";
const colors = require("../../../../theme/colors");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "transparent",
    backgroundColor: "white",
    padding: 20
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  labelText: {
    color: colors.blue,
    fontSize: 14,
    fontFamily: "LatoBold",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 60,
    paddingRight: 60,
    textAlign: "center"
  },
  secondaryText: {
    color: colors.charcoal,
    fontSize: 10,
    fontFamily: "LatoRegular",
    paddingBottom: 10
  },
  typesContainer: {
    height: deviceHeight / 2,
    paddingVertical: 10
  },
  savingTypeCard: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  greenHeader: {
    color: colors.green,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center"
  },
  greenFooter: {
    color: colors.green,
    fontSize: 12,
    fontFamily: "LatoItalic",
    textAlign: "center"
  },
  blueHeader: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center"
  },
  blueFooter: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoItalic",
    textAlign: "center"
  },
  bodyText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center",
    paddingVertical: 10
  },
  disabledType: {
    opacity: 0.6
  },
  disabledButton: {
    backgroundColor: colors.grey,
    borderRadius: 12,
    height: 40
  },
  disabledButtonText: {
    fontSize: 14,
    fontFamily: "LatoBold",
    color: colors.disabledButtonText
  }
});
