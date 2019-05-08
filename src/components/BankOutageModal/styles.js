import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  // Views
  bankContentHolder: {
    paddingVertical: 30
  },
  bankContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  separator: {
    alignSelf: "stretch",
    height: 1,
    backgroundColor: colors.darkerGrey,
    marginVertical: 10
  },

  // Texts
  regularText: {
    color: colors.charcoal,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "LatoRegular"
  },
  labelText: {
    fontSize: 16,
    fontFamily: "LatoBold",
    marginBottom: 20
  },
  bankLabelText: {
    fontSize: 16
  },
  redText: {
    color: colors.error
  },

  bottomPadder: {
    marginBottom: 10
  }
});
