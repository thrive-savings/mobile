import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    width: null,
    height: null
  },

  // Content styles
  contentContainer: {
    flex: 1,
    width: deviceWidth - 40,
    alignSelf: "center"
  },
  content: {
    marginTop: 10,
    padding: 30,
    borderRadius: 8,
    backgroundColor: "white",
    alignItems: "center",
    elevation: 5
  },
  descText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 22,
    letterSpacing: 0.2,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  boldText: {
    fontFamily: "LatoBold"
  },
  helpButtonsContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center"
  },
  helpButton: {
    width: deviceWidth / 2 - 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.blue,
    height: 40
  },
  blueText: {
    paddingLeft: 10,
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoRegular",
    textAlign: "center"
  }
});
