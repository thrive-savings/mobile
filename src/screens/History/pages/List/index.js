import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

class HistoryList extends Component {
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
    let { data, limit } = this.props;
    let body = [];

    if (data.length) {
      if (limit < 0) {
        limit = data.length;
      }

      data.map(
        (
          {
            date,
            activity: { amountInDollars, color, typeToDisplay },
            totalInDollars,
            withOpacity
          },
          index
        ) => {
          if (index >= limit) {
            return;
          }

          body.push(
            <View
              key={index}
              style={[styles.row, withOpacity && styles.withOpacity]}
            >
              <View style={styles.smallColumn}>
                <Text style={styles.regularText}>
                  {date}
                </Text>
              </View>
              <View style={[styles.activityContent, styles.largeColumn]}>
                <Text style={[styles.regularText, { color }]}>
                  {`${amountInDollars}`}
                </Text>
                <Text style={styles.greyText}>
                  {typeToDisplay.toUpperCase()}
                </Text>
              </View>
              <View style={styles.smallColumn}>
                <Text style={styles.regularText}>
                  {totalInDollars}
                </Text>
              </View>
            </View>
          );

          if (index < Math.min(limit, data.length) - 1) {
            body.push(
              <View style={styles.separator} key={`separator_${index}`} />
            );
          }
        }
      );
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

HistoryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  limit: PropTypes.number
};
HistoryList.defaultProps = {
  data: [],
  limit: 5
};

export default HistoryList;
