import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const getModalContent = () => {
  return (
    <React.Fragment>
      <Text style={[styles.regularText, styles.labelText]}>
        Bank Service Outage
      </Text>
      <Text style={[styles.regularText]}>
        Thrive connects to 90+ banks and credit unions across Canada. {"\n\n"}
        Unfortunately, the following banks are unable to connect to the Thrive
        platform.
      </Text>
      <View style={styles.bankContentHolder}>
        <View style={styles.bankContent}>
          <Text style={[styles.regularText, styles.bankLabelText]}>TD</Text>
          <Text style={[styles.regularText, styles.redText]}>Unavailable</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.bankContent}>
          <Text style={[styles.regularText, styles.bankLabelText]}>BMO</Text>
          <Text style={[styles.regularText, styles.redText]}>Unavailable</Text>
        </View>
      </View>
      <Text style={[styles.regularText, styles.bottomPadder]}>
        You can contact your bank directly to request connection to Thrive
        Savings.
      </Text>
    </React.Fragment>
  );
};

export default getModalContent;
