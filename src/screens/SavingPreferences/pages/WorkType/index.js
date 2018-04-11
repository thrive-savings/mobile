import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import {
  Text,
  Card,
  Grid,
  Col,
  Row
} from "native-base";

import SpecialButton from "../../../../components/SpecialButton";
import Dots from "../../../../components/Dots";

import styles from "./styles";

const border = require("../../../../../assets/Icons/Borders/box/box.png");
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

    this.next = this.next.bind(this);
  }

  next() {
    // TODO: save workType
    this.props.save({ workType: this.state.workType });
    //this.props.changeStep(1);
  }

  typeSelected(type: string) {
    this.setState({ workType: type });
  }

  renderGridElem(type: object) {
    const { text, icon } = type;

    const anotherOneSelected = this.state.workType && this.state.workType !== text;
    const thisSelected = this.state.workType && this.state.workType === text;

    let body =
      <TouchableOpacity activeOpacity={0.6} style={styles.gridElem} onPress={() => this.typeSelected(text)}>
        <Image source={icon} style={[styles.workTypeImg, (anotherOneSelected && styles.disabledType)]} />
        <Text style={[styles.workTypeText, (anotherOneSelected && styles.disabledType)]}>{text}</Text>
      </TouchableOpacity>;

    if (thisSelected) {
      body =
      <TouchableOpacity activeOpacity={0.6} style={styles.gridElem} onPress={() => this.typeSelected(text)}>
        <Image source={border} style={styles.gridElemGradient}>
          <Image source={icon} style={styles.workTypeImg} />
          <Text style={styles.workTypeText}>{text}</Text>
        </Image>
      </TouchableOpacity>;
    }

    return body;
  }

  render() {
    return (
      <Card style={styles.container}>
        <Dots step={1} />

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

        <SpecialButton loading={this.props.reducer.isLoading} onClick={this.next} state={this.state.workType ? 1 : 0} />
      </Card>
    );
  }
}

export default WorkType;
