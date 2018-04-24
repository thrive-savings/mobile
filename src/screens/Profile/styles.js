import { StyleSheet, Dimensions, Platform } from "react-native";
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

  //Header styles
  header: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  backButton: {
    alignSelf: "flex-start",
    position: "absolute",
    left: 20
  },
  titleText: {
    color: "white",
    fontSize: 15,
    fontFamily: "LatoBold",
    textAlign: "center"
  },

  //Content styles
  contentContainer: {
    width: deviceWidth - 40,
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "white"
  },
  photoContainer: {
    alignItems: "center",
    paddingVertical: 20
  },
  photoHolder: {
    width: 100,
    height: 100
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  otherContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  nameText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.5,
    paddingTop: 20
  },
  labelText: {
    color: colors.charcoal
  },
  buttonText: {
    color: colors.blue
  },
  commonText: {
    fontSize: 13,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2
  },

  //Separator style
  separator: {
    height: 1,
    alignSelf: "stretch",
    backgroundColor: colors.mediumGrey
  },

  formErrorText3: {
    fontSize: Platform.OS === "android" ? 12 : 15,
    color: colors.error,
    textAlign: "center",
    top: -10,
    paddingHorizontal: 20
  }
});
