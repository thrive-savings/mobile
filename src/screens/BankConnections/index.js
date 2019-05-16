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

import amplitude from "../../globals/amplitude";

import Header from "../../components/Header";
import ModalTemplate from "../../components/ModalTemplate";
import SpecialButton from "../../components/SpecialButton";
import addStatusBar from "../../components/StatusBar";

import { LINK_STEPS, LOADING_STATES } from "../IntegrateBank/state/constants";
import { unlinkConnection } from "../IntegrateBank/state/actions";

import globalStyles from "../../globals/globalStyles";
import styles from "./styles";
import colors from "../../theme/colors";

import { bankLogoUrl } from "../../globals/logoUrls";

const bg = require("../../../assets/Backgrounds/BackgroundFull.png");
const bankSymbolWhite = require("../../../assets/Icons/BankSymbolWhite/bitmap.png");

class BankConnections extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedConnectionID: -1,
      showConfirmationModalForID: undefined
    };

    this.onConnectionClick = this.onConnectionClick.bind(this);
  }

  componentDidMount() {
    amplitude.track(amplitude.events.BANK_CONNECTIONS_VIEW);
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
      if (connection.quovoConnectionID === connectionID) {
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

  openLinkingFlow(step) {
    this.props.navigation.navigate("IntegrateBank", { step });
  }

  renderEmpty() {
    return (
      <View style={styles.emptyStateContainer}>
        <Image source={bankSymbolWhite} />
        <Text style={styles.emptyStateLabel}>Your accounts aren't linked</Text>
        <Text style={styles.emptyStateDesc}>
          Linking your bank account enables Thrive to save for you.
        </Text>
      </View>
    );
  }

  renderConnections() {
    const {
      userData: { connections = [] },
      integrateBankReducer: { loadingState }
    } = this.props;

    this.sortConnections(connections);

    return connections.map(
      ({
        id,
        isDefault,
        quovoConnectionID,
        institutionName,
        sync: { status: syncStatus } = {},
        accounts,
        institution: { logoFolder: bankLogoFolderName = "ThriveBank" } = {}
      }) =>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.accountArea, globalStyles.shadow]}
          key={id}
          onPress={() => this.onConnectionClick(id)}
        >
          <View style={styles.accountMain}>
            <Image
              source={{ uri: bankLogoUrl(bankLogoFolderName, true) }}
              style={styles.bankLogo}
            />
            <View style={styles.accountInfoContainer}>
              {syncStatus === "good"
                ? <Text style={[styles.regularAccountText, styles.greyText]}>
                    Status: Good
                  </Text>
                : !syncStatus ||
                  ["postponed", "maintenance"].includes(syncStatus)
                  ? <Text style={[styles.regularAccountText, styles.blueText]}>
                      Status: Loading...
                    </Text>
                  : <Text style={[styles.regularAccountText, styles.redText]}>
                      Status: Requires Attention
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
                      this.setState({
                        showConfirmationModalForID: quovoConnectionID
                      })}
                  >
                    <Text style={styles.blueButtonText}>UNLINK</Text>
                  </TouchableOpacity>
                  {syncStatus === "good"
                    ? <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.accountButton}
                        onPress={() =>
                          this.props.navigation.navigate("IntegrateBank", {
                            step: LINK_STEPS.ACCOUNT,
                            accounts
                          })}
                      >
                        <Text style={styles.blueButtonText}>
                          SET AS PRIMARY
                        </Text>
                      </TouchableOpacity>
                    : !syncStatus ||
                      ["postponed", "maintenance"].includes(syncStatus)
                      ? <React.Fragment />
                      : <TouchableOpacity
                          activeOpacity={0.6}
                          style={styles.accountButton}
                          onPress={() =>
                            this.props.navigation.navigate("IntegrateBank", {
                              step: LINK_STEPS.AUTH,
                              connection: { quovoConnectionID }
                            })}
                        >
                          <Text style={styles.blueButtonText}>FIX NOW</Text>
                        </TouchableOpacity>}
                </View>
              : <Spinner color={colors.blue} />)}
        </TouchableOpacity>
    );
  }

  render() {
    const { showConfirmationModalForID } = this.state;
    const { userData: { connections = [] } } = this.props;

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
          <Text
            onPress={() => this.openLinkingFlow(LINK_STEPS.INFO)}
            style={styles.readMoreSecurityText}
          >
            Read more about our security
          </Text>
          {connections.length ? this.renderConnections() : this.renderEmpty()}
        </ScrollView>
        <SpecialButton
          style={styles.connectButton}
          text="CONNECT BANK"
          onClick={() => this.openLinkingFlow(LINK_STEPS.AUTH)}
        />
        <ModalTemplate
          show={typeof showConfirmationModalForID !== "undefined"}
          buttonText={"YES"}
          onButtonClick={() => {
            this.props.unlinkConnection({
              connectionID: showConfirmationModalForID
            });
            this.setState({ showConfirmationModalForID: undefined });
          }}
          content={this.getConfirmationModalContent(showConfirmationModalForID)}
          onClose={() =>
            this.setState({ showConfirmationModalForID: undefined })}
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
