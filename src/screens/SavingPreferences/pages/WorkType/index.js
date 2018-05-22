import React, { Component } from "react";
import PropTypes from "prop-types";
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
  {text: "Full Time", displayText: "FULL-TIME", icon: fullTime},
  {text: "Part Time", displayText: "PART-TIME", icon: partTime},
  {text: "Contract", displayText: "CONTRACT", icon: contract},
  {text: "Sharing Economy", displayText: "SHARING ECONOMY", icon: sharingEconomy}];


class WorkType extends Component {
  constructor(props: Props) {
    super(props);

    this.state = {
      workType: ""
    };

    this.next = this.next.bind(this);
  }

  next() {
    this.props.save({ workType: this.state.workType });
  }

  typeSelected(type: string) {
    this.setState({ workType: type });
  }

  renderGridElem(type: object) {
    const { text, displayText, icon } = type;

    const anotherOneSelected = this.state.workType && this.state.workType !== text;
    const thisSelected = this.state.workType && this.state.workType === text;

    let body =
      <TouchableOpacity activeOpacity={0.6} style={styles.gridElem} onPress={() => this.typeSelected(text)}>
        <Image source={icon} style={[styles.workTypeImg, (anotherOneSelected && styles.disabledType)]} />
        <Text style={[styles.workTypeText, (anotherOneSelected && styles.disabledType)]}>{displayText}</Text>
      </TouchableOpacity>;

    if (thisSelected) {
      body =
      <TouchableOpacity activeOpacity={0.6} style={styles.gridElem} onPress={() => this.typeSelected(text)}>
        <Image source={border} style={styles.gridElemGradient}>
          <Image source={icon} style={styles.workTypeImg} />
          <Text style={styles.workTypeText}>{displayText}</Text>
        </Image>
      </TouchableOpacity>;
    }

    return body;
  }

  render() {
    return (
      <Card style={styles.container}>
        {this.props.showDots && <Dots step={1} />}

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

        <SpecialButton loading={this.props.reducer.isLoading} onClick={this.next} enabled={this.state.workType ? true : false} />
      </Card>
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

export default WorkType;
