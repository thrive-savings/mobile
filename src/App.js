// @flow
import React from "react";
import { connect } from "react-redux";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./screens/Login/";
import ForgotPassword from "./screens/ForgotPassword";
import SignUp from "./screens/SignUp/";
import Walkthrough from "./screens/Walkthrough/";
import Comments from "./screens/Comments/";
import Channel from "./screens/Channel";
import Story from "./screens/Story";
import Home from "./screens/Home/";
import Channels from "./screens/Channels";
import Sidebar from "./screens/Sidebar";
import Overview from "./screens/Overview";
import Calendar from "./screens/Calendar/";
import Timeline from "./screens/Timeline";
import Feedback from "./screens/Feedback/";
import Profile from "./screens/Profile/";
import Settings from "./screens/Settings";
import VerifyCode from "./screens/VerifyCode";
import IntegrateBank from "./screens/IntegrateBank";
import SavingPreferences from "./screens/SavingPreferences";

import getAuthorized from "./globals/getAuthorized";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Channels: { screen: Channels },
    Overview: { screen: Overview },
    Calendar: { screen: Calendar },
    Timeline: { screen: Timeline },
    Feedback: { screen: Feedback },
    Profile: { screen: Profile },
    Settings: { screen: Settings }
  },
  {
    initialRouteName: "Settings",
    contentComponent: props => <Sidebar {...props} />
  }
);

const stackScreens = {
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword },
  Walkthrough: { screen: Walkthrough },
  Story: { screen: Story },
  Comments: { screen: Comments },
  Channel: { screen: Channel },
  VerifyCode: { screen: VerifyCode },
  IntegrateBank: { screen: IntegrateBank },
  SavingPreferences: { screen: SavingPreferences },
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

const StackerWithVerifyCode = StackNavigator(
  stackScreens,
  {
    ...stackerOptions,
    initialRouteName: "VerifyCode"
  }
);

class App extends React.Component {
  render() {
    let stacker = <StackerWithLogin />;

    const authorized = getAuthorized(this.props.authReducer);
    if (authorized) {
      if (!authorized.isVerified) {
        stacker = <StackerWithVerifyCode />;
      } else if ((authorized.account && authorized.account.flLoginID) || true) {
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

export default connect(mapStateToProps)(App);
