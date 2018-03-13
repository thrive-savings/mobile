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
    initialRouteName: "Home",
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
  Drawer: { screen: Drawer }
};

const StackerWithLogin = StackNavigator(
  stackScreens,
  {
    index: 0,
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const StackerWithDrawer = StackNavigator(
  stackScreens,
  {
    index: 0,
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

class App extends React.Component {
  render() {
    const authReducer = this.props.authReducer;
    let stacker = <StackerWithLogin />;
    if(authReducer.data && authReducer.data.authorized) { 
      stacker = <StackerWithDrawer />;
    }

    return (
      <Root>
        {stacker}
      </Root>
    );
  }
}

function mapStateToProps (state) {
  console.log("Mapping State to Props in App root component");
  console.log(state);
  return {
    authReducer: state.authReducer
  }
}

export default connect(mapStateToProps)(App);
