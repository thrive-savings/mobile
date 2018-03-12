// @flow
import { AsyncStorage } from "react-native";
import { composeWithDevTools } from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import { persistStore } from "redux-persist";
import reducer from "../reducers";

import dataSaga from "../screens/Login/saga";

export default function configureStore(onCompletion: () => void): any {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = composeWithDevTools({
    name: "thriveapp",
    realtime: true
  });
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  sagaMiddleware.run(dataSaga);

  return store;
}
