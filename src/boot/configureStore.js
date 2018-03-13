// @flow
import { AsyncStorage } from "react-native";
import { composeWithDevTools } from "remote-redux-devtools";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { persistStore } from "redux-persist";
import reducer from "../reducers";

import { requestApiSaga } from "../actions/requestApi";
import loginSaga from "../screens/Login/sagas";
import fetchHomeSaga from "../screens/Home/sagas";

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

  sagaMiddleware.run(requestApiSaga);
  sagaMiddleware.run(loginSaga);
  sagaMiddleware.run(fetchHomeSaga);

  return store;
}
