import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20
  },
  contentContainer: {
    borderRadius: 8,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 20
  },

  subContent: {
    alignSelf: "stretch",
    paddingTop: 10
  },
  detailsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  balanceContainer: {
    justifyContent: "center",
    alignItems: "flex-end"
  },
  separator: {
    alignSelf: "stretch",
    height: 2,
    backgroundColor: colors.grey,
    marginVertical: 10,
    marginHorizontal: -20
  },
  spacer: {
    height: 20
  },

  // Accelerator styles
  accelerateContainer: {
    borderRadius: 5,
    marginTop: 20
  },
  accelerateContainerActive: {
    borderWidth: 2,
    borderColor: colors.green
  },
  accelerateHeader: {
    backgroundColor: "#CCE7F5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderTopLeftRadius: 8, 
    borderTopRightRadius: 8
  },
  accelerateStatusHolder: {
    flexDirection: "row",
    alignItems: "center"
  },
  accelerateContent: {
    backgroundColor: "white",
    borderBottomLeftRadius: 8, 
    borderBottomRightRadius: 8,
    justifyContent: "center",
    padding: 20
  },

  // Text styles
  nameText: {
    color: colors.charcoal,
    fontSize: 15,
    fontFamily: "LatoRegular",
    letterSpacing: 1.5
  },
  labelText: {
    color: colors.darkerGrey,
    fontSize: 13,
    fontFamily: "LatoBold",
    letterSpacing: 1.0,
  },
  regularText: {
    color: colors.charcoal,
    fontSize: 13,
    fontFamily: "LatoRegular",
    letterSpacing: 1.0
  }, 
  lastUpdatedText: {
    color: colors.darkerGrey,
    fontSize: 12,
    fontFamily: "LatoRegular",
    letterSpacing: 1
  },  
  largeText: {
    fontSize: 18
  },
  blueText: {
    color: colors.blue
  },
  boldText: {
    fontFamily: "LatoBold"
  },
  smallText: {
    fontSize: 12
  },

  // Padders
  topPadder: {
    marginTop: 10
  },
  svgPadder: {
    marginTop: 3,
    marginRight: 3
  },

  // DatePicker styles
  datePickerInput: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderColor: "transparent",
    backgroundColor: "transparent"
  },
  datePickerPlaceholder: {
    color: colors.darkerGrey,
    paddingLeft: 10,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
  datePickerText: {
    color: colors.charcoal,
    paddingLeft: 10,
    fontSize: 13,
    fontFamily: "LatoRegular"
  },
});
