import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";

import SpecialButton from "../../../../components/SpecialButton";
import Dots from "../../../../components/Dots";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

import SAVING_TYPES from "./constants";

class SavingType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savingType: ""
    };

    this.next = this.next.bind(this);
    this.renderType = this.renderType.bind(this);
  }

  next() {
    this.props.save({savingType: this.state.savingType});
  }

  typeSelected(savingType) {
    this.setState({ savingType });
  }

  renderType(type, index) {
    const { name, displayName, tag, description, footer, styles: { headerStyle, footerStyle } } = type;
    const { savingType } = this.state;

    const notSelected = savingType && savingType !== name;

    let body =
      <TouchableOpacity style={styles.savingTypeTouchable} activeOpacity={0.6} onPress={() => this.typeSelected(name)}>
        <Text style={[headerStyle, (notSelected && styles.disabledType)]}>{displayName}</Text>
        <Text style={[styles.bodyText, (notSelected && styles.disabledType)]}>{description}</Text>
        <Text style={[footerStyle, (notSelected && styles.disabledType)]}>{footer}</Text>
      </TouchableOpacity>;

    if (savingType === name) {
      body =
      <LinearGradient colors={colors.blueGreenGradient.colors} style={styles.borderGradient}>
        {body}
      </LinearGradient>;
    }

    return (
      <View style={[styles.savingTypeContainer, globalStyles.shadow, (index && styles.topPadder)]} key={name}>
        {body}
        <LinearGradient colors={colors.blueGreenGradient.colors} style={[styles.tagGradient, (notSelected && styles.disabledType)]}>
          <Text style={styles.tagText}>{tag}</Text>
        </LinearGradient>
      </View>
    );
  }

  renderSavingTypes() {
    return SAVING_TYPES.map(this.renderType);
  }

  render() {
    const { showDots, reducer: { isLoading } } = this.props;

    return (
      <View style={[styles.container, globalStyles.shadow]}>
        {showDots && <Dots step={2} />}

        <Text style={[styles.labelText, (showDots && styles.topPadder)]}>HOW WOULD YOU LIKE TO SAVE?</Text>
        <Text style={styles.secondaryText}>You can come back and update this later.</Text>

        <View style={styles.typesContainer}>
          {this.renderSavingTypes()}
        </View>

        <SpecialButton loading={isLoading} onClick={this.next} enabled={this.state.savingType ? true : false} />
      </View>
    );
  }
}

SavingType.propTypes = {
  navigation: PropTypes.object,
  showDots: PropTypes.bool
};
SavingType.defaultProps = {
  navigation: {},
  showDots: true
};

function mapStateToProps(state) {
  return {
    reducer: state.savingPreferencesReducer
  };
}

export default connect(mapStateToProps)(SavingType);
