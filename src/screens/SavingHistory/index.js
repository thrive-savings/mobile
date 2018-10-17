import React, { Component } from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { LinearGradient } from "expo";
import { Spinner } from "native-base";
import { connect } from "react-redux";

import Header from "../../components/Header";
import addStatusBar from "../../components/StatusBar";

import Chart from "./pages/Chart";
import History from "./pages/History";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class SavingHistory extends Component {
  renderSubHeader() {
    return (
      <View style={styles.subHeader}>
        <View style={styles.subHeaderTexts}>
          <Text style={styles.subHeaderLabelText}>TOTAL SAVINGS</Text>
          <View style={styles.subHeaderAmountTextHolder}>
            <Text style={styles.subHeaderAmountMainText}>$1,411</Text>
            <Text style={styles.subHeaderAmountRemainderText}>.67</Text>
          </View>
        </View>
      </View>
    );
  }

  renderButtons() {
    return (
      <View style={styles.footerButtons}>
        <TouchableOpacity
          style={[styles.whiteButtonContainer, globalStyles.shadow]}
          activeOpacity={0.6}
          onPress={() => console.log("load 5 more clicked")}
        >
          {false
            ? <Spinner color={colors.blue} />
            : <Text style={styles.whiteButtonText}>LOAD 5 MORE</Text>}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => console.log("view all clicked")}
        >
          <LinearGradient
            colors={colors.blueGreenGradient.colors}
            style={styles.gradientButton}
          >
            {false
              ? <Spinner color="white" />
              : <Text style={styles.gradientButtonText}>VIEW ALL</Text>}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header
          navigation={this.props.navigation}
          button="menu"
          content="text"
          text="SAVING HISTORY"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          {this.renderSubHeader()}
          <Chart />
          <History />
          {this.renderButtons()}
        </ScrollView>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(SavingHistory)
);
