import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;
const deviceHeight = screen.height;

const ROW_HEIGHT = 30;

export const MAX_ROW_COUNT = Math.floor(deviceHeight / 2.5 / ROW_HEIGHT);

export default StyleSheet.create({
  //Container
  container: {
    width: deviceWidth - 50,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 20
  },
  separator: {
    alignSelf: "stretch",
    height: 1,
    backgroundColor: colors.grey,
    marginVertical: 10,
    marginHorizontal: -20
  },

  // Content styles
  row: {
    flex: 1,
    flexDirection: "row",
    height: ROW_HEIGHT
  },
  centerItems: {
    alignItems: "center",
    justifyContent: "center"
  },
  smallColumn: {
    flex: 0.3,
    alignSelf: "flex-start"
  },
  largeColumn: {
    flex: 0.4,
    alignSelf: "flex-start"
  },
  regularText: {
    textAlign: "left",
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    letterSpacing: 0.5
  },
  greyText: {
    textAlign: "left",
    color: colors.darkerGrey,
    fontSize: 10,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2
  },
  activityContent: {
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
