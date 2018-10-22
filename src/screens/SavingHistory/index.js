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
import Dots from "../../components/Dots";
import addStatusBar from "../../components/StatusBar";

// import Chart from "./pages/Chart";
import History from "./pages/History";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

import { fetchHistory } from "./state/actions";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");

class SavingHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historyLimit: 6,
      viewingAll: false
    };

    this.onHeaderButtonPress = this.onHeaderButtonPress.bind(this);
  }

  componentWillMount() {
    const { data } = this.props.savingHistoryReducer;

    const fetchArgs = { fromDate: "-1" };
    if (Object.keys(data).length) {
      const { history } = data;
      if (history.length) {
        fetchArgs.fromDate = history[0].processedDate;
      }
    }

    this.props.fetchHistory(fetchArgs);
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

  renderDots() {
    return <Dots step={2} count={3} />;
  }

  render() {
    const { historyLimit, viewingAll } = this.state;
    const { data: { history } } = this.props.savingHistoryReducer;

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
          contentContainerStyle={styles.contentContainer}
        >
          {!viewingAll && this.renderSubHeader()}
          <History data={history} limit={viewingAll ? -1 : historyLimit} />
          {!viewingAll && this.renderButtons()}
        </ScrollView>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    savingHistoryReducer: state.savingHistoryReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchHistory: (payload = {}) => dispatch(fetchHistory(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(SavingHistory)
);
