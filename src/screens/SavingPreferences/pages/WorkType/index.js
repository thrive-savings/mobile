import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";

import amplitude from "../../../../globals/amplitude";

import SpecialButton from "../../../../components/SpecialButton";
import Dots from "../../../../components/Dots";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";
import colors from "../../../../theme/colors";

import WORK_TYPES from "./constants";

class WorkType extends Component {
  constructor(props: Props) {
    super(props);

    this.state = {
      workType: ""
    };

    this.next = this.next.bind(this);
  }

  componentDidMount() {
    amplitude.track(amplitude.events.WORK_TYPE_VIEW);
  }

  next() {
    this.props.save({ workType: this.state.workType });
  }

  typeSelected(type) {
    this.setState({ workType: type });
  }

  renderType(type) {
    const { text, displayText, icon } = type;

    const anotherOneSelected = this.state.workType && this.state.workType !== text;
    const thisSelected = this.state.workType && this.state.workType === text;

    let body =
      <TouchableOpacity key={text} activeOpacity={0.6} style={styles.typeTouchable} onPress={() => this.typeSelected(text)}>
        <Image source={icon} style={[styles.workTypeImg, (anotherOneSelected && styles.disabledType)]} />
        <Text style={[styles.workTypeText, (anotherOneSelected && styles.disabledType)]}>{displayText}</Text>
      </TouchableOpacity>;

    if (thisSelected) {
      body =
        <LinearGradient
          key={text}
          colors={colors.blueGreenGradient.colors}
          style={styles.typeGradientView}
        >
          {body}
        </LinearGradient>;
    } else {
      body =
        <View key={text} style={[styles.typeRegularView, globalStyles.shadow]}>
          {body}
        </View>;
    }

    return body;
  }

  renderWorkTypes() {
    return WORK_TYPES.map(this.renderType.bind(this));
  }

  render() {
    const { showDots, reducer: { isLoading } } = this.props;

    return (
      <View style={styles.container}>
        {this.props.showDots && <Dots step={1} />}

        <Text style={[styles.labelText, (showDots && styles.topPadder)]}>WHAT TYPE OF WORK DO YOU DO?</Text>
        <Text style={styles.secondaryText}>Choose your primary income source.</Text>

        <View style={styles.typesContainer}>
          {this.renderWorkTypes()}
        </View>

        <SpecialButton loading={isLoading} onClick={this.next} enabled={this.state.workType ? true : false} />
      </View>
    );
  }
}

WorkType.propTypes = {
  navigation: PropTypes.object,
  showDots: PropTypes.bool
};
WorkType.defaultProps = {
  navigation: {},
  showDots: true
};

function mapStateToProps(state) {
  return {
    reducer: state.savingPreferencesReducer
  };
}

export default connect(mapStateToProps)(WorkType);
