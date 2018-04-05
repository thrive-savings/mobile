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
      require("../../assets/Backgrounds/BackgroundAccount.png"),
      require("../../assets/Backgrounds/BackgroundFull.png"),
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
