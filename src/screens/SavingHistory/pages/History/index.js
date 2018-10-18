import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import { getDollarString } from "../../../../globals/helpers";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

const FAKE_DATA = [
  {
    date: "04/11",
    activity: {
      type: "debit",
      amount: 10000
    },
    total: 190500
  },
  {
    date: "04/08",
    activity: {
      type: "credit",
      amount: 80000
    },
    total: 180500
  },
  {
    date: "04/07",
    activity: {
      type: "bonus",
      amount: 10000
    },
    total: 260500
  }
];

class History extends Component {
  renderLabel() {
    return (
      <View style={styles.row}>
        <View style={styles.smallColumn}>
          <Text style={styles.regularText}>DATE</Text>
        </View>
        <View style={styles.largeColumn}>
          <Text style={styles.regularText}>ACTIVITY</Text>
        </View>
        <View style={styles.smallColumn}>
          <Text style={styles.regularText}>TOTAL</Text>
        </View>
      </View>
    );
  }

  renderData() {
    const { data, limit } = this.props;

    let body = [];

    if (data.length) {
      data.map(({ date, activity: { type, amount }, total }, index) => {
        if (index >= limit) {
          return;
        }

        let activityTypeColor = colors.blue;
        let activityAmountSign = "+";
        let activityName = "DEPOSIT";

        if (type === "bonus") {
          activityTypeColor = colors.green;
          activityName = "EMPLOYER BONUS";
        } else if (type === "credit") {
          activityTypeColor = colors.error;
          activityAmountSign = "-";
          activityName = "WITHDRAWAL";
        }

        body.push(
          <View key={index} style={styles.row}>
            <View style={styles.smallColumn}>
              <Text style={styles.regularText}>
                {date}
              </Text>
            </View>
            <View style={[styles.activityContent, styles.largeColumn]}>
              <Text style={[styles.regularText, { color: activityTypeColor }]}>
                {`${activityAmountSign} ${getDollarString(amount)}`}
              </Text>
              <Text style={styles.greyText}>
                {activityName}
              </Text>
            </View>
            <View style={styles.smallColumn}>
              <Text style={styles.regularText}>
                {getDollarString(total)}
              </Text>
            </View>
          </View>
        );

        if (index < Math.min(limit, data.length) - 1) {
          body.push(
            <View style={styles.separator} key={`separator_${index}`} />
          );
        }
      });
    } else {
      body = (
        <View style={[styles.row, styles.centerItems]}>
          <Text style={styles.regularText}>No data available.</Text>
        </View>
      );
    }

    return body;
  }

  render() {
    return (
      <View style={[styles.container, globalStyles.shadow]}>
        {this.renderLabel()}
        <View style={styles.separator} />
        {this.renderData()}
      </View>
    );
  }
}

History.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  limit: PropTypes.number
};
History.defaultProps = {
  data: [],
  limit: 5
};

export default History;
