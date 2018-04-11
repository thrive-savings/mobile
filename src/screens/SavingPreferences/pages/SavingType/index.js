import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import { Svg, LinearGradient } from "expo";
import {
  View,
  Text,
  Card
} from "native-base";

import SpecialButton from "../../../../components/SpecialButton";

import styles from "./styles";

const colors = require("../../../../theme/colors");

const tagAutoBg = require("../../../../../assets/Icons/Tags/auto.png");
const tagManualBg = require("../../../../../assets/Icons/Tags/manual.png");

const SAVING_TYPES = [
  {
    name: "flex",
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
    name: "fixed",
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

type Props = {
  navigation: () => void
};
class SavingType extends Component {
  state: {
    savingType: ""
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      savingType: ""
    };

    this.next = this.next.bind(this);
    this.renderSavingType = this.renderSavingType.bind(this);
  }

  next() {
    // TODO: connect api here
    this.props.changeStep(2);
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
        <View style={styles.dots}>
          <Svg width={40} height={10}>
            <Svg.Circle cx="4" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={"white"} />
            <Svg.Circle cx="20" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={colors.blue} />
            <Svg.Circle cx="36" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={"white"} />
          </Svg>
        </View>

        <Text style={styles.labelText}>HOW WOULD YOU LIKE TO SAVE?</Text>
        <Text style={styles.secondaryText}>You can come back and update this later.</Text>

        <View style={styles.typesContainer}>
          {body}
        </View>

        <SpecialButton onClick={this.next} state={this.state.savingType ? 1 : 0} />
      </Card>
    );
  }
}

export default SavingType;
