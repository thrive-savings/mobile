import { StyleSheet, Dimensions } from "react-native";
import colors from "../../theme/colors";

const screen = Dimensions.get("window");
const deviceWidth = screen.width;
const formWidth = deviceWidth - 70;

export default StyleSheet.create({
  // Container styles
  container: {
    alignSelf: "stretch",
    marginHorizontal: 20
  },
  formContainer: {
    alignItems: "stretch",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "white"
  },

  // Text styles
  regularText: {
    fontSize: 13,
    fontFamily: "LatoRegular",
    lineHeight: 20,
    letterSpacing: 0.2,
    textAlign: "center",
    color: colors.charcoal
  },
  blueText: {
    color: colors.blue
  },
  placeholderText: {
    color: colors.darkerGrey
  },
  rightAlignedText: {
    textAlign: "right"
  },

  // Input Styles
  inputRow: {
    flexDirection: "row"
  },
  inputBox: {
    flex: 1,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkerGrey,
    marginBottom: 7,
    marginTop: 3
  },
  input: {
    paddingLeft: 10,
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },

  // DatePicker styles
  datePickerContainer: {
    width: formWidth,
    marginTop: -3,
    marginBottom: 1
  },
  datePickerInput: {
    height: 30,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 10,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.darkerGrey
  },

  // Photo Uploader styles
  uploadButton: {
    flex: 1,
    marginRight: 10
  },

  // Padders
  spacer: {
    width: 10
  },
  marginBottomLarge: {
    marginBottom: 20
  },
  marginBottom: {
    marginBottom: 10
  },
  marginBottomSmall: {
    marginBottom: 5
  },
  padderLeft: {
    paddingLeft: 10
  }
});
