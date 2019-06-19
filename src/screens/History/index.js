import React, { Component } from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";

import Header from "../../components/Header";
import addStatusBar from "../../components/StatusBar";

import amplitude from "../../globals/amplitude";

// import HistoryChart from "./pages/Chart";
import HistoryList from "./pages/List";

import { getSplitDollarStrings } from "../../globals/helpers";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

import { fetchHistory } from "./state/actions";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historyLimit: 8,
      viewingAll: false
    };

    this.onHeaderButtonPress = this.onHeaderButtonPress.bind(this);
  }

  componentDidMount() {
    amplitude.track(amplitude.events.SAVING_HISTORY_VIEW);
  }

  componentWillMount() {
    this.props.fetchHistory({ fromDate: "-1" });
  }

  onHeaderButtonPress() {
    const { viewingAll } = this.state;
    if (viewingAll) {
      this.setState({ viewingAll: false });
    } else {
      this.props.navigation.openDrawer();
    }
  }

  renderSubHeader() {
    const { beforeDot: balanceBD, afterDot: balanceAD } = getSplitDollarStrings(
      this.props.historyReducer.data.totalSavings
    );
    return (
      <View style={styles.subHeader}>
        <View style={styles.subHeaderTexts}>
          <Text style={styles.subHeaderLabelText}>TOTAL SAVINGS</Text>
          <View style={styles.subHeaderAmountTextHolder}>
            <Text style={styles.subHeaderAmountMainText}>
              {balanceBD}
            </Text>
            <Text style={styles.subHeaderAmountRemainderText}>
              {balanceAD}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  renderButtons() {
    const { historyLimit } = this.state;
    return (
      <View style={styles.footerButtons}>
        <TouchableOpacity
          style={[styles.whiteButtonContainer, globalStyles.shadow]}
          activeOpacity={0.6}
          onPress={() => this.setState({ historyLimit: historyLimit + 5 })}
        >
          <Text style={styles.whiteButtonText}>LOAD 5 MORE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => this.setState({ viewingAll: true })}
        >
          <LinearGradient
            colors={colors.blueGreenGradient.colors}
            style={styles.gradientButton}
          >
            <Text style={styles.gradientButtonText}>VIEW ALL</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { historyLimit, viewingAll } = this.state;
    const { data: { history } } = this.props.historyReducer;

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header
          navigation={this.props.navigation}
          button={viewingAll ? "back" : "menu"}
          onButtonPress={this.onHeaderButtonPress}
          content="text"
          text="SAVING HISTORY"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={globalStyles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <HistoryList data={history} limit={viewingAll ? -1 : historyLimit} />
          {!viewingAll && this.renderButtons()}
        </ScrollView>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    historyReducer: state.historyReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchHistory: (payload = {}) => dispatch(fetchHistory(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(History)
);
