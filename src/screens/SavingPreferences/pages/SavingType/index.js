import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo";
import {
  View,
  Text,
  Card
} from "native-base";

import SpecialButton from "../../../../components/SpecialButton";
import Dots from "../../../../components/Dots";

import styles from "./styles";

const colors = require("../../../../theme/colors");

const tagAutoBg = require("../../../../../assets/Icons/Tags/auto.png");
const tagManualBg = require("../../../../../assets/Icons/Tags/manual.png");

const SAVING_TYPES = [
  {
    name: "Thrive Flex",
    displayName: "THRIVE FLEX",
    tag: "AUTOMATIC",
    tagBgImage: tagAutoBg,
    description: "We will automatically find spare change based on your income/spending and save for you.",
    footer: "Optimal for freelance/part-time workers",
    styles: {
      headerStyle: styles.blueHeader,
      footerStyle: styles.blueFooter
    }
  },
  {
    name: "Thrive Fixed",
    displayName: "THRIVE FIXED",
    tag: "MANUAL",
    tagBgImage: tagManualBg,
    description: "You set a recurring amount that will be withdrawn on a regular basis.",
    footer: "Optimal for steady earners",
    styles: {
      headerStyle: styles.greenHeader,
      footerStyle: styles.greenFooter
    }
  }
];


class SavingType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savingType: ""
    };

    this.next = this.next.bind(this);
    this.renderSavingType = this.renderSavingType.bind(this);
  }

  next() {
    this.props.save({savingType: this.state.savingType});
  }

  typeSelected(savingType: string) {
    this.setState({ savingType });
  }

  renderSavingType(type: object) {
    const { name, displayName, tag, tagBgImage, description, footer, styles: { headerStyle, footerStyle } } = type;
    const { savingType } = this.state;

    const notSelected = savingType && savingType !== name;

    let body =
      <TouchableOpacity
        style={styles.savingTypeTouchable}
        activeOpacity={0.6}
        onPress={() => this.typeSelected(name)}
      >
        <Text style={[headerStyle, (notSelected && styles.disabledType)]}>{displayName}</Text>
        <Text style={[styles.bodyText, (notSelected && styles.disabledType)]}>{description}</Text>
        <Text style={[footerStyle, (notSelected && styles.disabledType)]}>{footer}</Text>
      </TouchableOpacity>;

    if (savingType === name) {
      body =
        <LinearGradient
          colors={colors.blueGreenGradient.colors}
          style={styles.borderGradient}
        >
          {body}
        </LinearGradient>;
    }

    return (
      <Card style={styles.savingTypeCard} key={name}>
        {body}
        <Image source={tagBgImage} style={[styles.tagGradient, (notSelected && styles.disabledType)]}>
          <Text style={styles.tagText}>{tag}</Text>
        </Image>
      </Card>
    );
  }

  render() {
    const body = SAVING_TYPES.map(this.renderSavingType);

    return (
      <Card style={styles.container}>
        {this.props.showDots && <Dots step={2} />}

        <Text style={styles.labelText}>HOW WOULD YOU LIKE TO SAVE?</Text>
        <Text style={styles.secondaryText}>You can come back and update this later.</Text>

        <View style={styles.typesContainer}>
          {body}
        </View>

        <SpecialButton loading={this.props.reducer.isLoading} onClick={this.next} enabled={this.state.savingType ? true : false} />
      </Card>
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

export default SavingType;
