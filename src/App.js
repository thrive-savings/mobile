// @flow
import React from "react";
import { connect } from "react-redux";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
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

const StackerWithLogin = StackNavigator(
  stackScreens,
  {
    ...stackerOptions,
    initialRouteName: "Login"
  }
);

const StackerWithDrawer = StackNavigator(
  stackScreens,
  {
    ...stackerOptions,
    initialRouteName: "Drawer"
  }
);

const StackerWithIntegrateBank = StackNavigator(
  stackScreens,
  {
    ...stackerOptions,
    initialRouteName: "IntegrateBank"
  }
);

const StackerWithSetPhone = StackNavigator(
  stackScreens,
  {
    ...stackerOptions,
    initialRouteName: "SetPhone"
  }
);

class App extends React.Component {
  componentWillMount() {
    const authorized = getAuthorized(this.props.authReducer);
    if (authorized) {
      this.props.getUpdates();
    }
  }

  render() {
    let stacker = <StackerWithLogin />;

    const authorized = getAuthorized(this.props.authReducer);
    if (authorized) {
      if (!authorized.isVerified) {
        stacker = <StackerWithSetPhone />;
      } else if (authorized.bankLinked || true) {
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

function mapStateToProps (state) {
  return {
    authReducer: state.authReducer
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getUpdates: () => dispatch(getUpdates())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
