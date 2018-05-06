import { StyleSheet } from "react-native";
import colors from "../../theme/colors";


export default StyleSheet.create({
  progressContainer: {
    height: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: 12,
    borderWidth: 0.75,
    borderColor: colors.darkerGrey,
    backgroundColor: colors.grey
  },
  progressFill: {
    borderRadius: 12
  }
});
