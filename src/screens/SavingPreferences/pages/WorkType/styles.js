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
    flexDirection: "column",
    alignItems: "center",
    width: deviceWidth / 2 - 50,
    borderBottomWidth: 1,
    borderColor: colors.grey
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
    bottom: 10,
    paddingHorizontal: 10
  },
  disabledType: {
    opacity: 0.6
  }
});
