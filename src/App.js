import React from "react";
import { AppState } from "react-native";
import { connect } from "react-redux";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import amplitude from "./globals/amplitude";

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
import SavingGoals from "./screens/SavingGoals";
import PP from "./screens/PP";
import TOS from "./screens/TOS";
import Faq from "./screens/Faq";
import Contact from "./screens/Contact";

import getAuthorized from "./globals/getAuthorized";

import { getUpdates } from "./screens/Login/state/actions";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
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

const StackerWithLanding = StackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "Landing"
});

const StackerWithDrawer = StackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "Drawer"
});

const StackerWithIntegrateBank = StackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "IntegrateBank"
});

const StackerWithSetPhone = StackNavigator(stackScreens, {
  ...stackerOptions,
  initialRouteName: "SetPhone"
});

class App extends React.Component {
  componentDidMount() {
    if (AppState.currentState) {
      this._handleAppStateChange(AppState.currentState);
    }
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
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

  componentWillMount() {
    const authorized = getAuthorized(this.props.authReducer);
    if (authorized) {
      this.props.getUpdates();
    }
  }

  render() {
    let stacker = <StackerWithLanding />;

    const authorized = getAuthorized(this.props.authReducer);
    if (authorized) {
      if (!authorized.isVerified) {
        stacker = <StackerWithSetPhone />;
      } else if (authorized.bankLinked) {
        stacker = <StackerWithDrawer />;
      } else {
        stacker = <StackerWithIntegrateBank />;
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
    getUpdates: () => dispatch(getUpdates())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
