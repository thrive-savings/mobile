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
    fontFamily: "LatoRegular"
  },
  grid: {
    height: deviceHeight / 2,
    paddingTop: 30,
    paddingBottom: 40
  },
  gridCol: {
    justifyContent: "space-around"
  },
  gridRow: {
    flex: 0.45
  },
  gridElem: {
    alignItems: "center",
    width: deviceWidth / 2 - 50
  },
  gridElemGradient: {
    flex: 1,
    resizeMode: "contain",
    alignItems: "center"
  },
  workTypeImg: {
    flex: 0.75,
    resizeMode: "center"
  },
  workTypeText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    textAlign: "center",
    position: "absolute",
    width: 100,
    bottom: 10
  },
  disabledType: {
    opacity: 0.6
  }
});
