import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

import amplitude from "../../../../globals/amplitude";

import Dots from "../../../../components/Dots";
import SpecialButton from "../../../../components/SpecialButton";
import Accordion from "../../../../components/Accordion";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

const bankSymbol = require("../../../../../assets/Icons/BankSymbol/bankSymbolGradient.png");


class WhyLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descExpanded: false
    };
  }

  componentDidMount() {
    amplitude.track(amplitude.events.WHY_LINK_VIEW);
  }

  render() {
    const descExpanded = this.state.descExpanded;

    return (
      <ScrollView contentContainerStyle={[styles.container, globalStyles.shadow]} showsVerticalScrollIndicator={false}>
        <Dots step={1} count={3} />

        <Text style={styles.titleText}>LINK YOUR BANK ACCOUNT</Text>
        <Image source={bankSymbol} style={styles.bankSymbol} />
        <Text style={styles.secondaryTitleText}>Why should I link my bank account?</Text>
        <Text style={[styles.regularText, styles.descText]}>Every week Thrive will transfer a small amount of money into your Thrive Savings account.</Text>
        {
          !descExpanded &&
          <TouchableOpacity activeOpacity={0.6} onPress={() => this.setState({descExpanded: !descExpanded})}>
            <Text style={[styles.regularText, styles.readMoreText]}>Read More</Text>
          </TouchableOpacity>
        }
        {
          descExpanded &&
          <Text style={[styles.regularText, styles.descText]}>Each amount is custom-based on your transactions, income, and expenses. We want you to live your best financial life – we will never overdraw you.</Text>
        }

        <Accordion title={"You're in good hands."} description={"We use bank-grade 256-bit encryption. Your savings at Thrive are CDIC insured."} />
        <Accordion title={"It's anonymous."} description={"We never store your bank login credentials."} />
        <Accordion title={"Take your money out anytime."} description={"Text our chatbot and your funds will be sent back to your chequing account."} />

        <View style={styles.separator} />
        <SpecialButton text={"LINK MY ACCOUNT"} onClick={this.props.next} />
      </ScrollView>
    );
  }
}

WhyLink.propTypes = {
  next: PropTypes.func
};
WhyLink.defaultProps = {
  next: () => {}
};

export default WhyLink;
