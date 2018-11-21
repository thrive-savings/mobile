import React from "react";
import { AppState } from "react-native";
import { Notifications } from "expo";
import { connect } from "react-redux";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Root } from "native-base";

import amplitude from "./globals/amplitude";
import getAuthorized from "./globals/getAuthorized";

import { getUpdates, setExpoToken } from "./screens/Login/state/actions";

import Landing from "./screens/Landing";
import Login from "./screens/Login/";
import ForgotPassword from "./screens/ForgotPassword";
import SignUp from "./screens/SignUp/";
import Home from "./screens/Home";
import Sidebar from "./screens/Sidebar";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import SetPhone from "./screens/SetPhone";
import IntegrateBank from "./screens/IntegrateBank";
import SavingPreferences from "./screens/SavingPreferences";
import SavingHistory from "./screens/SavingHistory";
import SavingGoals from "./screens/SavingGoals";
import PP from "./screens/PP";
import TOS from "./screens/TOS";
import Faq from "./screens/Faq";
import Contact from "./screens/Contact";

const Drawer = createDrawerNavigator(
  {
    Profile: { screen: Profile },
    Home: { screen: Home },
    SavingHistory: { screen: SavingHistory },
    Settings: { screen: Settings },
    Faq: { screen: Faq },
    Contact: { screen: Contact }
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <Sidebar {...props} />
  }
);

const stackScreens = {
  Landing: { screen: Landing },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword },
  SetPhone: { screen: SetPhone },
  IntegrateBank: { screen: IntegrateBank },
  SavingPreferences: { screen: SavingPreferences },
  SavingGoals: { screen: SavingGoals },
  PP: { screen: PP },
  TOS: { screen: TOS },
  Drawer: { screen: Drawer }
};

const stackerOptions = {
  index: 0,
  headerMode: "none"
};

const StackerWithLanding = createStackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "Landing"
});

const StackerWithDrawer = createStackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "Drawer"
});

const StackerWithIntegrateBank = createStackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "IntegrateBank"
});

const StackerWithSavingPreferences = createStackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "SavingPreferences"
});

const StackerWithSavingGoals = createStackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "SavingGoals"
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
    let stacker = <StackerWithLanding />;

    const authorized = getAuthorized(this.props.authReducer);

    if (authorized) {
      if (!authorized.isVerified) {
        stacker = <StackerWithSetPhone />;
      } else if (!authorized.bankLinked || authorized.relinkRequired) {
        stacker = <StackerWithIntegrateBank />;
      } else if (authorized.onboardingStep === "SavingPreferences") {
        stacker = <StackerWithSavingPreferences />;
      } else if (authorized.onboardingStep === "SavingGoals") {
        stacker = <StackerWithSavingGoals />;
      } else {
        stacker = <StackerWithDrawer />;
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
