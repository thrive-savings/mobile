import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import { Svg } from "expo";
import {
  View,
  Text,
  Button,
  Card,
  Grid,
  Col,
  Row
} from "native-base";

import styles from "./styles";

const colors = require("../../../../theme/colors");

const fullTime = require("../../../../../assets/WorkTypes/Fulltime.png");
const partTime = require("../../../../../assets/WorkTypes/Parttime.png");
const sharingEconomy = require("../../../../../assets/WorkTypes/Sharing.png");
const contract = require("../../../../../assets/WorkTypes/Contract.png");

const WORK_TYPES = [
  {text: "FULL-TIME", icon: fullTime},
  {text: "PART-TIME", icon: partTime},
  {text: "CONTRACT", icon: contract},
  {text: "SHARING ECONOMY", icon: sharingEconomy}];

type Props = {
  navigation: () => void
};
class WorkType extends Component {
  state: {
    workType: ""
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      workType: ""
    };
  }

  next() {
    // TODO: save workType
    this.props.changeStep(1);
  }

  typeSelected(type: string) {
    this.setState({ workType: type });
  }

  renderGridElem(type: object) {
    const { text, icon } = type;
    const isSelected = this.state.workType && this.state.workType === text;

    return (
      <TouchableOpacity activeOpacity={0.6} style={styles.gridElem} onPress={() => this.typeSelected(text)}>
        <Image source={icon} style={[styles.workTypeImg, (!isSelected && styles.disabledType)]} />
        <Text style={[styles.workTypeText, (!isSelected && styles.disabledType)]}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Card style={styles.container}>
        <View style={styles.dots}>
          <Svg width={40} height={10}>
            <Svg.Circle cx="4" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={colors.blue} />
            <Svg.Circle cx="20" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={"white"} />
            <Svg.Circle cx="36" cy="4" r={3} stokeWidth={1} stroke={colors.blue} fill={"white"} />
          </Svg>
        </View>

        <Text style={styles.labelText}>WHAT TYPE OF WORK DO YOU DO?</Text>
        <Text style={styles.secondaryText}>Choose your primary income source.</Text>

        <Grid style={styles.grid}>
          <Col style={styles.gridCol}>
            <Row style={styles.gridRow}>
              {this.renderGridElem(WORK_TYPES[0])}
            </Row>
            <Row style={styles.gridRow}>
              {this.renderGridElem(WORK_TYPES[2])}
            </Row>
          </Col>
          <Col style={styles.gridCol}>
            <Row style={styles.gridRow}>
              {this.renderGridElem(WORK_TYPES[1])}
            </Row>
            <Row style={styles.gridRow}>
              {this.renderGridElem(WORK_TYPES[3])}
            </Row>
          </Col>
        </Grid>

        {
          this.state.workType
            ?
              <Button
                block
                onPress={() => this.next()}
              >
                <Text style={styles.disabledButtonText}>
                  CONTINUE
                </Text>
              </Button>
            :
              <Button
                block
                style={styles.disabledButton}
                onPress={() => this.next()}
              >
                <Text style={styles.disabledButtonText}>
                  CONTINUE
                </Text>
              </Button>
        }
      </Card>
    );
  }
}

export default WorkType;
