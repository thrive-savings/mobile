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
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center",
    paddingBottom: 10
  },
  typesContainer: {
    height: deviceHeight / 2,
    width: deviceWidth - 100,
    paddingVertical: 10
  },
  savingTypeCard: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  savingTypeGradient: {
    height: deviceHeight / 4 - 20,
    width: deviceWidth - 100,
    resizeMode: "stretch",
    justifyContent: "center",
    paddingHorizontal: 22.5
  },
  tagGradient: {
    alignSelf: "flex-end",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    top: -20,
    right: -20
  },
  tagText: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 10,
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
