import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { connect } from "react-redux";

import amplitude from "../../../../globals/amplitude";

import SpecialButton from "../../../../components/SpecialButton";
import Accordion from "../../../../components/Accordion";

import { acceptPersonal } from "../../state/actions";

import styles from "./styles";

class Pricing extends Component {
  componentDidMount() {
    amplitude.track(amplitude.events.PRICING_VIEW);
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.labelText}>Thrive Personal</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceAmountText}>$1</Text>
          <Text style={styles.priceSuffixText}> / month</Text>
        </View>
        <Text style={styles.subLabelText}>
          Get 4 months free - billed monthly, cancel anytime
        </Text>

        <Accordion
          title={"Automated savings. Thrive will take math out of saving."}
          titleFont={13}
          expandable={false}
        />
        <Accordion
          title={"Save for as many goals. Big or small."}
          titleFont={13}
          expandable={false}
        />
        <Accordion
          title={
            "Chatbot enabled. Your financially savvy friend is only text away."
          }
          titleFont={13}
          expandable={false}
        />

        <View style={styles.spacer} />

        <SpecialButton
          text={"START MY FREE TRIAL"}
          onClick={() => this.props.acceptPersonal()}
        />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    acceptPersonal: (payload = {}) => dispatch(acceptPersonal(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);
