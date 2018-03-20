// @flow
import { AsyncStorage } from "react-native";
import { composeWithDevTools } from "remote-redux-devtools";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from "redux-persist";
import reducer from "../reducers";

import { requestApiSaga } from "../globals/requestApi";
import logInSaga from "../screens/Login/state/sagas";
import { signUpSaga, signUpSucceedSaga } from "../screens/SignUp/state/sagas";
import { verifyCodeSaga, verifyCodeSucceedSaga, resendCodeSaga } from "../screens/VerifyCode/state/sagas";
import { fetchAccountsSaga, setDefaultSaga } from "../screens/IntegrateBank/state/sagas";
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
    storage: AsyncStorage,
    blacklist: ['form']
  };
  const persistedReducer = persistReducer(persistConfig, reducer)

  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  sagaMiddleware.run(requestApiSaga);
  sagaMiddleware.run(logInSaga);
  sagaMiddleware.run(signUpSaga);
  sagaMiddleware.run(signUpSucceedSaga);
  sagaMiddleware.run(verifyCodeSaga);
  sagaMiddleware.run(verifyCodeSucceedSaga);
  sagaMiddleware.run(resendCodeSaga);
  sagaMiddleware.run(fetchAccountsSaga);
  sagaMiddleware.run(setDefaultSaga);
  sagaMiddleware.run(fetchHomeSaga);

  return { store, persistor };
}
