import { StyleSheet, Dimensions } from "react-native";
const colors = require("../../../../theme/colors");

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
    fontFamily: "LatoRegular"
  },

  // Grid styl;es
  typesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 20
  },
  typeGradientView: {
    borderRadius: 12,
    margin: 10
  },
  typeRegularView: {
    margin: 10
  },
  typeTouchable: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    width: deviceWidth / 2 - 70,
    paddingVertical: 20,
    margin: 2,
    borderRadius: 12,
    backgroundColor: "white"
  },
  workTypeImg: {
    flex: 0.75,
    resizeMode: "contain"
  },
  workTypeText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    textAlign: "center",
    width: 100,
    paddingTop: 5
  },
  disabledType: {
    opacity: 0.6
  }
});
