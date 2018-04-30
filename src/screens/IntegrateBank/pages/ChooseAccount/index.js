import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { Spinner, Toast } from "native-base";
import { connect } from "react-redux";
import { Svg } from "expo";

import Dots from "../../../../components/Dots";

import { setDefault } from "../../state/actions";

import styles from "./styles";
import colors from "../../../../theme/colors";

const BANK_ICONS = {
  TD: require("../../../../../assets/Banks/TD/bitmap.png"),
  RBC: require("../../../../../assets/Banks/RBC/bitmap.png"),
  BMO: require("../../../../../assets/Banks/BMO/bitmap.png"),
  Scotia: require("../../../../../assets/Banks/Scotia/bitmap.png"),
  CIBC: require("../../../../../assets/Banks/CIBC/bitmap.png"),
  National: require("../../../../../assets/Banks/National/bitmap.png"),
  Desjardins: require("../../../../../assets/Banks/Desjardins/bitmap.png"),
  Tangerine: require("../../../../../assets/Banks/Tangerine/bitmap.png"),
  Vancity: require("../../../../../assets/Banks/Vancity/bitmap.png"),
  ATB: require("../../../../../assets/Banks/ATB/bitmap.png"),
  Simplii: require("../../../../../assets/Banks/Simplii/bitmap.png"),
  Meridian: require("../../../../../assets/Banks/Meridian/bitmap.png"),
  Laurentienne: require("../../../../../assets/Banks/Laurentienne/bitmap.png"),
  CoastCapital: require("../../../../../assets/Banks/CoastCapital/bitmap.png"),
  HSBC: require("../../../../../assets/Banks/HSBC/bitmap.png"),
  FlinksCapital: require("../../../../../assets/Banks/TD/bitmap.png")
};


class ChooseAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccountID: undefined
    };
  }

  setDefault() {
    const selectedAccountID = this.state.selectedAccountID;
    if (selectedAccountID) {
      this.props.setDefault({accountID: selectedAccountID});
    } else {
      Toast.show({
        text: "Choose Default Account!",
        duration: 2500,
        position: "top",
        type: "danger",
        textStyle: { textAlign: "center" }
      });
    }
  }

  renderBank() {
    const { data, isSetting } = this.props.integrateBankReducer;

    let accountsView, bank;
    if (data.PageIntegration && data.PageIntegration.accounts) {
      const accounts = data.PageIntegration.accounts;
      if (accounts.length > 0) {
        bank = accounts[0].bank;
        accountsView = accounts.map(({ id, title }) => {
          const isSelected = this.state.selectedAccountID === id;
          return (
            <TouchableOpacity key={id} activeOpacity={0.6} style={styles.accountRow} onPress={()=>this.setState({selectedAccountID: id})}>
              {
                isSelected
                  ?
                    <Svg width={16} height={16}>
                      <Svg.Circle cx="8" cy="8" r={7} stokeWidth={1} stroke={colors.darkerGrey} fill={"white"} />
                      <Svg.Circle cx="8" cy="8" r={5} fill={colors.charcoal} />
                    </Svg>
                  :
                    <Svg width={16} height={16}>
                      <Svg.Circle cx="8" cy="8" r={7} stokeWidth={1} stroke={colors.darkerGrey} fill={"white"} />
                    </Svg>
              }
              <Text style={[styles.accountTitleText, (isSelected && styles.selectedTitleText)]}>{title}</Text>
            </TouchableOpacity>
          );
        });
      }
    }

    const bankColor = colors.banks[bank];
    const bankIcon = BANK_ICONS[bank];

    return (
      <View style={[styles.accountsHolder, {borderColor: bankColor}]}>
        <Image source={bankIcon} />
        <Text style={styles.accountsLabelText}>Please select your primary chequing account. This is where you perform your everyday banking.</Text>
        {accountsView}
        {
          isSetting
            ? <Spinner color={colors.blue} />
            :
              <TouchableOpacity onPress={this.setDefault.bind(this)} activeOpacity={0.6} style={[styles.continueButton, {backgroundColor: bankColor}]}>
                <Text style={styles.continueButtonText}>CONTINUE</Text>
              </TouchableOpacity>
        }
      </View>
    );
  }

  render() {
    const { isFetching, error, errorMessage } = this.props.integrateBankReducer;

    let errorText = "";
    if (error) {
      const { errors } = errorMessage;
      if (errors && errors.constructor === Array && errors.length > 0) {
        errorText = errors[0].value;
      } else {
        errorText = "Server Error!";
      }
    }

    return (
      <View style={styles.container}>
        <Dots step={2} count={3} />
        <Text style={styles.titleText}>LINK YOUR BANK ACCOUNT</Text>
        {
          isFetching
            ?
              <View>
                <Text style={styles.accountsLabelText}>Fetching Accounts ...</Text>
                <Spinner color={colors.blue} />
              </View>
            : this.renderBank()
        }
        {error && <Text style={styles.errorText}>{errorText}</Text>}
      </View>
    );
  }
}


function mapStateToProps (state) {
  return {
    authReducer: state.authReducer,
    integrateBankReducer: state.integrateBankReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    setDefault: (payload = {}) => dispatch(setDefault(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAccount);
