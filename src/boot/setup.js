import { AppLoading, Asset, Font } from "expo";
import React, { Component } from "react";
import { Image } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "../App";
import configureStore from "./configureStore";

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class Setup extends Component {
  state: {
    store: Object,
    persistor: Object,
    isReady: boolean
  };

  constructor() {
    super();
    const { store, persistor } = configureStore();
    this.state = {
      store,
      persistor,
      isReady: false
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      // Backgrounds
      require("../../assets/Backgrounds/BackgroundAccount.png"),
      require("../../assets/Backgrounds/BackgroundFull.png"),
      // Logos
      require("../../assets/Logo/white.png"),
      require("../../assets/Logo/white-large.png"),
      // Goals
      require("../../assets/Goals/Automobile/bitmap.png"),
      require("../../assets/Goals/Debt/bitmap.png"),
      require("../../assets/Goals/Education/bitmap.png"),
      require("../../assets/Goals/Gadgets/bitmap.png"),
      require("../../assets/Goals/Health/bitmap.png"),
      require("../../assets/Goals/Home/bitmap.png"),
      require("../../assets/Goals/Other/bitmap.png"),
      require("../../assets/Goals/PetNeeds/bitmap.png"),
      require("../../assets/Goals/RainyDay/bitmap.png"),
      require("../../assets/Goals/Retirement/bitmap.png"),
      require("../../assets/Goals/StudentLoans/bitmap.png"),
      require("../../assets/Goals/Travel/bitmap.png"),
      require("../../assets/Goals/Wedding/bitmap.png"),

      // Work Types
      require("../../assets/WorkTypes/Contract.png"),
      require("../../assets/WorkTypes/Fulltime.png"),
      require("../../assets/WorkTypes/Parttime.png"),
      require("../../assets/WorkTypes/Sharing.png"),
    ]);
    await Promise.all([...imageAssets]);

    await Font.loadAsync({
      LatoRegular: require("../../assets/fonts/Lato/Lato-Regular.ttf"),
      LatoBold: require("../../assets/fonts/Lato/Lato-Bold.ttf"),
      LatoItalic: require("../../assets/fonts/Lato/Lato-Italic.ttf"),
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }
    return (
      <Provider store={this.state.store}>
        <PersistGate loading={<AppLoading />} persistor={this.state.persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}
