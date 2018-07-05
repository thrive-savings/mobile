import { AppLoading, Font } from "expo";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "../App";
import configureStore from "./configureStore";

import { imageAssets, cacheImages } from "./images";
import fontAssets from "./fonts";

export default class Setup extends Component {
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
    const cachedImageAssets = cacheImages(imageAssets);
    await Promise.all([...cachedImageAssets]);

    await Font.loadAsync(fontAssets);
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
