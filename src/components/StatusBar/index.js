import React from "react";
import { StatusBar, Platform, View } from "react-native";

import globalStyles from "../../globals/globalStyles";
import colors from "../../theme/colors";

export default function addStatusBar(WrappedComponent) {
  return Platform.OS === "android"
    ? class extends React.Component {
        render() {
          return (
            <View style={globalStyles.container}>
              <StatusBar
                barStyle="light-content"
                backgroundColor={colors.statusbar}
              />
              <WrappedComponent {...this.props} />
            </View>
          );
        }
      }
    : WrappedComponent;
}
