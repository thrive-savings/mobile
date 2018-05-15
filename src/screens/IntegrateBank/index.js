import React, { Component } from "react";
import {
  View,
  Image,
  ImageBackground,
  StatusBar
} from "react-native";
import { connect } from "react-redux";

import styles from "./styles";
import colors from "../../theme/colors";

import WhyLink from "./pages/WhyLink";
import AuthenticateBank from "./pages/AuthenticateBank";
import ChooseAccount from "./pages/ChooseAccount";
import AuthSuccess from "./pages/AuthSuccess";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const logo = require("../../../assets/Logo/white.png");


class IntegrateBank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      loginId: undefined,
      institution: undefined
    };
  }

  authedBank( loginId, institution) {
    this.setState({ loginId, institution });
  }

  renderContent() {
    const reducerStep = this.props.integrateBankReducer.step;
    const step = reducerStep ? reducerStep : this.state.step;
    switch (step) {
      case 0:
        return <WhyLink next={() => this.setState({step: 1})} />;
      case 1:
        const { loginId, institution } = this.state;
        if (loginId && institution) {
          return <ChooseAccount loginId={loginId} institution={institution} />;
        } else {
          return <AuthenticateBank next={this.authedBank.bind(this)} />;
        }
      case 2:
        return <AuthSuccess />;
      default:
        return <WhyLink next={() => this.setState({step: 1})} />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusbar}/>
        <ImageBackground source={bg} style={styles.background}>
          <View style={styles.header}>
            <Image source={logo} style={styles.headerLogo} />
          </View>
          <View style={{flex: 1}}>
            {this.renderContent()}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    integrateBankReducer: state.integrateBankReducer
  };
}

export default connect(mapStateToProps)(IntegrateBank);
