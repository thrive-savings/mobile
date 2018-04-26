import React, { Component } from "react";
import {
  View,
  Image,
  StatusBar
} from "react-native";

import styles from "./styles";
import colors from "../../theme/colors";

import WhyLink from "./pages/WhyLink";
import AuthenticateBank from "./pages/AuthenticateBank";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const logo = require("../../../assets/Logo/white.png");


class IntegrateBank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };
  }

  renderContent() {
    switch (this.state.step) {
      case 0:
        return <WhyLink next={() => this.setState({step: 1})} />;
      case 1:
        return <AuthenticateBank />;
      default:
        return <WhyLink next={() => this.setState({step: 1})} />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <Image source={bg} style={styles.background}>
          <View style={styles.header}>
            <Image source={logo} style={styles.headerLogo} />
          </View>
          <View style={{flex: 1}}>
            {this.renderContent()}
          </View>
        </Image>
      </View>
    );
  }
}

export default IntegrateBank;
