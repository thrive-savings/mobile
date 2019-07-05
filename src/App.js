import React from "react";
import { AppState } from "react-native";
import { Notifications } from "expo";
import { connect } from "react-redux";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Root } from "native-base";

import amplitude from "./globals/amplitude";
import getAuthorized from "./globals/getAuthorized";

import { getUpdates, setExpoToken } from "./screens/Login/state/actions";

import { MOMENTUM_OFFER_STATUSES } from "./screens/MomentumFlow/state/constants";

import ProductTour from "./screens/ProductTour";
import Login from "./screens/Login/";
import ForgotPassword from "./screens/ForgotPassword";
import SignUp from "./screens/SignUp/";
import SavingsDashboard from "./screens/SavingsDashboard";
import DebtDashboard from "./screens/DebtDashboard";
import Sidebar from "./screens/Sidebar";
import Profile from "./screens/Profile";
import Referral from "./screens/Referral";
import Settings from "./screens/Settings";
import SetPhone from "./screens/SetPhone";
import IntegrateBank from "./screens/IntegrateBank";
import BankConnections from "./screens/BankConnections";
import SavingPreferences from "./screens/SavingPreferences";
import History from "./screens/History";
import SavingGoals from "./screens/SavingGoals";
import PP from "./screens/PP";
import TOS from "./screens/TOS";
import Faq from "./screens/Faq";
import Contact from "./screens/Contact";
import MomentumFlow from "./screens/MomentumFlow";

const Drawer = createDrawerNavigator(
  {
    Profile: { screen: Profile },
    SavingsDashboard: { screen: SavingsDashboard },
    DebtDashboard: { screen: DebtDashboard },
    History: { screen: History },
    BankConnections: { screen: BankConnections },
    Referral: { screen: Referral },
    Settings: { screen: Settings },
    Faq: { screen: Faq },
    Contact: { screen: Contact }
  },
  {
    initialRouteName: "SavingsDashboard",
    contentComponent: props => <Sidebar {...props} />
  }
);

const stackScreens = {
  ProductTour: { screen: ProductTour },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword },
  SetPhone: { screen: SetPhone },
  IntegrateBank: { screen: IntegrateBank },
  BankConnections: { screen: BankConnections },
  SavingPreferences: { screen: SavingPreferences },
  SavingGoals: { screen: SavingGoals },
  PP: { screen: PP },
  TOS: { screen: TOS },
  Drawer: { screen: Drawer },
  MomentumFlow: { screen: MomentumFlow }
};

const stackerOptions = {
  index: 0,
  headerMode: "none"
};

const StackerWithProductTour = createStackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "ProductTour"
});

const StackerWithMomentumFlow = createStackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "MomentumFlow"
});

const StackerWithDrawer = createStackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "Drawer"
});

const StackerWithSetPhone = createStackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "SetPhone"
});

class App extends React.Component {
  componentDidMount() {
    if (AppState.currentState) {
      this._handleAppStateChange(AppState.currentState);
    }
    AppState.addEventListener("change", this._handleAppStateChange);
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
    if (this._notificationSubscription) {
      this._notificationSubscription.remove();
    }
  }

  componentWillMount() {
    const authorized = getAuthorized(this.props.authReducer);
    if (authorized) {
      this.props.getUpdates();
      if (!authorized.expoPushToken) {
        this.props.setExpoToken();
      }
    }
  }

  _handleAppStateChange(nextAppState) {
    const appStateEvent =
      nextAppState === "active"
        ? amplitude.events.APP_ACTIVE
        : nextAppState === "background"
          ? amplitude.events.APP_IN_BACKGROUND
          : amplitude.events.APP_INACTIVE;
    amplitude.track(appStateEvent);
  }

  _handleNotification(notification) {
    // console.log(notification);
  }

  render() {
    let stacker = <StackerWithProductTour />;

    const authorized = getAuthorized(this.props.authReducer);
    if (authorized) {
      if (!authorized.isVerified) {
        stacker = <StackerWithSetPhone />;
      } else {
        const momentumOfferData = authorized.momentumOfferData;
        if (
          momentumOfferData &&
          ![
            MOMENTUM_OFFER_STATUSES.UNINTERESTED,
            MOMENTUM_OFFER_STATUSES.PASSED_DONE,
            MOMENTUM_OFFER_STATUSES.INELIGIBLE_DONE
          ].includes(momentumOfferData.status)
        ) {
          stacker = <StackerWithMomentumFlow />;
        } else {
          stacker = <StackerWithDrawer />;
        }
      }
    }

    return (
      <Root>
        {stacker}
      </Root>
    );
  }
}

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUpdates: () => dispatch(getUpdates()),
    setExpoToken: () => dispatch(setExpoToken())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
