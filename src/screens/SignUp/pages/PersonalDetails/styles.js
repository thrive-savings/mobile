import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;

const formWidth = deviceWidth - 60;
const formHorizontalPadding = 15;
const formWidthAfterPadding = formWidth - 2 * formHorizontalPadding;
const formSpaceBetween = 10;

export default StyleSheet.create({
  formContainer: {
    alignSelf: "center",
    width: formWidth
  },
  formContent: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    paddingHorizontal: formHorizontalPadding,
    paddingVertical: 20
  },
  brandLogo: {
    marginBottom: 20,
    alignSelf: "center",
    width: 200,
    height: 40
  },
  formLabelText: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 21,
    letterSpacing: 0.2,
    textAlign: "center"
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  names: {
    width: formWidthAfterPadding / 2 - formSpaceBetween / 2
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    paddingLeft: 5
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    borderRadius: 2,
    backgroundColor: "transparent"
  },
  checkboxTick: {
    alignSelf: "center"
  },
  checkboxText: {
    flex: 1,
    paddingLeft: 15,
    color: colors.charcoal,
    fontSize: 12,
    fontFamily: "LatoRegular",
    lineHeight: 20,
    letterSpacing: 0.2
  },
  linkTexts: {
    color: colors.blue,
    fontSize: 12,
    fontFamily: "LatoRegular"
  },
  inputGrp: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    backgroundColor: "transparent",
    marginBottom: 7
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  separator: {
    height: 30
  }
});
