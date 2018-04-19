import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey
  },
  padder: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },

  //Header styles
  header:{
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white"
  },
  avatar: {
    resizeMode: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  headerTexts: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20
  },
  nameText: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "LatoRegular"
  },
  balanceText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },

  //Body styles
  body: {
    flex: 0.6,
    justifyContent: "flex-start"
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  menuItemActive: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.grey
  },
  menuItemIcon: {
    resizeMode: "center"
  },
  menuItemIconActive: {
    tintColor: colors.blue,
  },
  menuItemText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    letterSpacing: 1.5,
    paddingLeft: 20
  },
  menuItemTextActive: {
    color: colors.blue
  },

  //Footer styles
  footer: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  logoutText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    textDecorationLine: "underline"
  },
  footerLogo: {
    resizeMode: "center"
  }
});
