// @flow
import { AsyncStorage } from "react-native";
import { composeWithDevTools } from "remote-redux-devtools";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from "redux-persist";
import reducer from "../reducers";

import { requestApiSaga } from "../helpers/requestApi";
import loginSaga from "../screens/Login/state/sagas";
import fetchHomeSaga from "../screens/Home/state/sagas";

export default function configureStore(): any {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = composeWithDevTools({
    name: "thriveapp",
    realtime: true
  });
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  );

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  };
  const persistedReducer = persistReducer(persistConfig, reducer)

  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  sagaMiddleware.run(requestApiSaga);
  sagaMiddleware.run(loginSaga);
  sagaMiddleware.run(fetchHomeSaga);

  return { store, persistor };
}
