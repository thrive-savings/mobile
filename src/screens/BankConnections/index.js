import React, { Component } from "react";
import {
  ImageBackground,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";
import { Spinner } from "native-base";
import { connect } from "react-redux";

import Header from "../../components/Header";
import ModalTemplate from "../../components/ModalTemplate";
import SpecialButton from "../../components/SpecialButton";
import addStatusBar from "../../components/StatusBar";

import { LINK_STEPS, LOADING_STATES } from "../IntegrateBank/state/constants";
import { unlinkConnection } from "../IntegrateBank/state/actions";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const botIcon = require("../../../assets/Icons/ThriveBotSmaller/thriveBot.png");

class BankConnections extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedConnectionID: -1,
      showConfirmationModalForID: -1
    };

    this.onConnectionClick = this.onConnectionClick.bind(this);
  }

  onConnectionClick(connectionID) {
    const { expandedConnectionID: curExpandedConnectionID } = this.state;

    let expandedConnectionID = -1;
    if (
      curExpandedConnectionID < 0 ||
      curExpandedConnectionID !== connectionID
    ) {
      expandedConnectionID = connectionID;
    }

    this.setState({
      expandedConnectionID
    });
  }

  getConfirmationModalContent(connectionID) {
    const { connections = [] } = this.props.userData;
    let institutionName;
    connections.forEach(connection => {
      if (connection.id === connectionID) {
        institutionName = connection.institutionName;
        return;
      }
    });

    return (
      <View>
        <Text style={[styles.confirmModalContent, styles.bottomPadder]}>
          {`You are about to unlink Thrive's connection to ${institutionName}. You need to be linked to at least one of your active bank account for Thrive to save for you.`}
        </Text>
        <Text style={[styles.confirmModalContent, styles.bottomPadder]}>
          Do you confirm?
        </Text>
      </View>
    );
  }

  sortConnections(connections) {
    let defaultConnectionIndex;
    connections.forEach(({ isDefault }, index) => {
      if (isDefault) {
        defaultConnectionIndex = index;
        return;
      }
    });
    if (defaultConnectionIndex) {
      const [defaultConnection] = connections.splice(defaultConnectionIndex, 1);
      connections.unshift(defaultConnection);
    }
  }

  renderConnections() {
    const {
      userData: { connections = [] },
      integrateBankReducer: { loadingState }
    } = this.props;

    this.sortConnections(connections);

    return connections.map(
      ({ id, isDefault, quovoConnectionID, institutionName, sync, accounts }) =>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.accountArea, globalStyles.shadow]}
          key={id}
          onPress={() => this.onConnectionClick(id)}
        >
          <View style={styles.accountMain}>
            <Image source={botIcon} />
            <View style={styles.accountInfoContainer}>
              {sync.status === "good"
                ? <Text style={[styles.regularAccountText, styles.greyText]}>
                    Status: Good
                  </Text>
                : <Text style={[styles.regularAccountText, styles.redText]}>
                    Status: Disconnected
                  </Text>}
              <Text style={styles.regularAccountText}>
                {institutionName}
              </Text>
              {isDefault &&
                accounts.map(
                  ({ id: accountID, isDefault: isDefaultAccount, name }) => {
                    if (isDefaultAccount) {
                      return (
                        <Text key={accountID} style={styles.regularAccountText}>
                          {`Primary Account: ${name}`}
                        </Text>
                      );
                    }
                  }
                )}
            </View>
          </View>

          {this.state.expandedConnectionID === id &&
            (loadingState === LOADING_STATES.NONE
              ? <View style={styles.accountButtonsContainer}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.accountButton}
                    onPress={() =>
                      this.setState({ showConfirmationModalForID: id })}
                  >
                    <Text style={styles.blueText}>UNLINK</Text>
                  </TouchableOpacity>
                  {sync.status === "good"
                    ? <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.accountButton}
                        onPress={() =>
                          this.props.navigation.navigate("IntegrateBank", {
                            step: LINK_STEPS.ACCOUNT,
                            accounts
                          })}
                      >
                        <Text style={styles.blueText}>SET AS PRIMARY</Text>
                      </TouchableOpacity>
                    : <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.accountButton}
                        onPress={() =>
                          this.props.navigation.navigate("IntegrateBank", {
                            step: LINK_STEPS.INFO,
                            connection: { quovoConnectionID }
                          })}
                      >
                        <Text style={styles.blueText}>RECONNECT</Text>
                      </TouchableOpacity>}
                </View>
              : <Spinner color={colors.blue} />)}
        </TouchableOpacity>
    );
  }

  render() {
    const { showConfirmationModalForID } = this.state;

    return (
      <ImageBackground source={bg} style={globalStyles.background}>
        <Header
          navigation={this.props.navigation}
          button="menu"
          content="text"
          text="BANK ACCOUNTS"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.contentContainer}
        >
          {this.renderConnections()}
        </ScrollView>
        <SpecialButton
          style={styles.connectButton}
          text="CONNECT ANOTHER BANK"
          onClick={() => {
            this.props.navigation.navigate("IntegrateBank", {
              step: LINK_STEPS.INFO,
              newConnection: true
            });
          }}
        />
        <ModalTemplate
          show={showConfirmationModalForID > 0}
          buttonText={"YES"}
          onButtonClick={() => {
            this.props.unlinkConnection({
              connectionID: showConfirmationModalForID
            });
            this.setState({ showConfirmationModalForID: -1 });
          }}
          content={this.getConfirmationModalContent(showConfirmationModalForID)}
          onClose={() => this.setState({ showConfirmationModalForID: -1 })}
        />
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.authReducer.data.authorized,
    integrateBankReducer: state.integrateBankReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    unlinkConnection: (payload = {}) => dispatch(unlinkConnection(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  addStatusBar(BankConnections)
);
