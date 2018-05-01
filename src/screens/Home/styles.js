import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceHeight = screen.height;
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
  headerMenuButton: {
    alignSelf: "flex-start",
    position: "absolute",
    left: 25
  },
  logo: {
    resizeMode: "center",
    height: deviceHeight / 8,
    width: deviceWidth / 4
  },

  // Subheader styles
  subHeader: {
    flex: 0.25,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  balanceLabelText: {
    color: "white",
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.6
  },
  balanceTextHolder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10
  },
  balanceMainText: {
    color: "white",
    fontSize: 35,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2
  },
  balanceRemainderText: {
    color: "white",
    fontSize: 20,
    fontFamily: "LatoRegular",
    letterSpacing: 0.2,
    paddingBottom: 7.5
  },
  subHeaderLabel: {
    width: deviceWidth / 2,
    height: 40,
    elevation: 10,
    borderRadius: 8,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  subHeaderText: {
    color: colors.charcoal,
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.6,
    textAlign: "center"
  },

  // Content styles
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 25,
    paddingBottom: 20
  },
  content: {
    alignItems: "center"
  },

  // Notification styles
  notificationHolder: {
    alignSelf: "stretch",
    elevation: 10,
    marginBottom: 20
  },
  notificationContent: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 20
  },
  notificationText: {
    color: "white"
  }
});
