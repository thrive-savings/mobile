import { StyleSheet, Dimensions } from "react-native";
const colors = require("../../theme/colors");

const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  labelText: {
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    paddingBottom: 20,
    textAlign: "center"
  },
  amountText: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoBold",
    paddingBottom: 20,
    textAlign: "center"
  },
  grid: {
    height: deviceHeight * 0.4,
    justifyContent: "center",
    paddingBottom: 20
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  elem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.darkerGrey
  },
  elemText: {
    color: colors.charcoal
  },
  transparentLeft: {
    borderLeftWidth: 0
  },
  transparentRight: {
    borderRightWidth: 0
  },
  transparentBottom: {
    borderBottomWidth: 0
  },
  transparentTop: {
    borderTopWidth: 0
  },
  deleteIcon: {
    resizeMode: "center"
  }
});
