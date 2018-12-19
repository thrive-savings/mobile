import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Text, TouchableOpacity } from "react-native";

import amplitude from "../../../../globals/amplitude";

import Dots from "../../../../components/Dots";
import SpecialButton from "../../../../components/SpecialButton";
import Accordion from "../../../../components/Accordion";

import globalStyles from "../../../../globals/globalStyles";
import styles from "./styles";

import { ACTION_TYPES } from "../../state/constants";

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

  renderInitialLinkPage() {
    const descExpanded = this.state.descExpanded;
    return (
      <View style={[styles.container, globalStyles.shadow]}>
        <Dots step={1} count={3} />

        <Text style={styles.titleText}>LINK YOUR BANK ACCOUNT</Text>
        <Image source={bankSymbol} style={styles.bankSymbol} />
        <Text style={styles.secondaryTitleText}>
          Why should I link my bank account?
        </Text>
        <Text style={[styles.regularText, styles.descText]}>
          Every week Thrive will transfer a small amount of money into your
          Thrive Savings account.
        </Text>
        {!descExpanded &&
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => this.setState({ descExpanded: !descExpanded })}
          >
            <Text style={[styles.regularText, styles.readMoreText]}>
              Read More
            </Text>
          </TouchableOpacity>}
        {descExpanded &&
          <Text style={[styles.regularText, styles.descText]}>
            Each amount is custom-based on your transactions, income, and
            expenses. We want you to live your best financial life – we will
            never overdraw you.
          </Text>}

        <Accordion
          title={"You're in good hands."}
          description={
            "We use bank-grade 256-bit encryption. Your savings at Thrive are CDIC insured."
          }
        />
        <Accordion
          title={"It's anonymous."}
          description={"We never store your bank login credentials."}
        />
        <Accordion
          title={"Take your money out anytime."}
          description={
            "Text our chatbot and your funds will be sent back to your chequing account."
          }
        />

        <View style={styles.separator} />
        <SpecialButton text={"LINK MY ACCOUNT"} onClick={this.props.next} />
      </View>
    );
  }

  renderRelinkPage() {
    return (
      <View style={[styles.container, globalStyles.shadow]}>
        <Dots step={1} count={3} />

        <Text style={styles.titleText}>RELINK YOUR BANK ACCOUNT</Text>
        <Image source={bankSymbol} style={styles.bankSymbol} />
        <Text style={styles.secondaryTitleText}>Why did this happen?</Text>
        <Text style={[styles.regularText, styles.descText]}>
          Occasionally, Thrive will lose connection to your bank account. This
          is normal as it keeps your account secure.
        </Text>
        <Text style={[styles.regularText, styles.descText]}>
          There are four reasons why this could happen:
        </Text>

        <Accordion
          title={"Your login ID or password has changed."}
          expandable={false}
        />
        <Accordion
          title={
            "Your bank requires us to ask you to answer a security question."
          }
          expandable={false}
        />
        <Accordion
          title={"Your bank has updated their security measures."}
          expandable={false}
        />
        <Accordion
          title={"You travelled outside of Canada."}
          expandable={false}
        />

        <View style={styles.separator} />
        <SpecialButton text={"RELINK MY ACCOUNT"} onClick={this.props.next} />
      </View>
    );
  }

  render() {
    return this.props.actionType === ACTION_TYPES.RELINK
      ? this.renderRelinkPage()
      : this.renderInitialLinkPage();
  }
}

WhyLink.propTypes = {
  actionType: PropTypes.oneOf(Object.values(ACTION_TYPES)),
  next: PropTypes.func
};
WhyLink.defaultProps = {
  actionType: ACTION_TYPES.INITAL,
  next: () => {}
};

export default WhyLink;
