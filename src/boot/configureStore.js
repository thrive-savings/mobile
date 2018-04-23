// @flow
import { composeWithDevTools } from "remote-redux-devtools";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import persistedReducer from "../reducers";

import { requestApiSaga } from "../globals/requestApi";
import logInSaga from "../screens/Login/state/sagas";
import { signUpSaga, signUpSucceedSaga, verifyReferralCodeSaga } from "../screens/SignUp/state/sagas";
import { savePhoneSaga, verifyCodeSaga, verifyCodeSucceedSaga, resendCodeSaga } from "../screens/VerifyCode/state/sagas";
import { passwordRequestSaga, passwordResetSaga } from "../screens/ForgotPassword/state/sagas";
import { fetchAccountsSaga, setDefaultSaga } from "../screens/IntegrateBank/state/sagas";
import fetchHomeSaga from "../screens/Home/state/sagas";
import { setWorkTypeSaga, setSavingTypeSaga, setSavingDetailsSaga } from "../screens/SavingPreferences/state/sagas";
import { uploadPhotoSaga, uploadPhotoSucceedSaga } from "../screens/Profile/state/sagas";

export default function configureStore(): any {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = composeWithDevTools({
    name: "thriveapp",
    realtime: true
  });
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  );

  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  sagaMiddleware.run(requestApiSaga);
  sagaMiddleware.run(logInSaga);
  sagaMiddleware.run(signUpSaga);
  sagaMiddleware.run(signUpSucceedSaga);
  sagaMiddleware.run(savePhoneSaga);
  sagaMiddleware.run(verifyReferralCodeSaga);
  sagaMiddleware.run(verifyCodeSaga);
  sagaMiddleware.run(verifyCodeSucceedSaga);
  sagaMiddleware.run(resendCodeSaga);
  sagaMiddleware.run(passwordRequestSaga);
  sagaMiddleware.run(passwordResetSaga);
  sagaMiddleware.run(fetchAccountsSaga);
  sagaMiddleware.run(setDefaultSaga);
  sagaMiddleware.run(fetchHomeSaga);
  sagaMiddleware.run(setWorkTypeSaga);
  sagaMiddleware.run(setSavingTypeSaga);
  sagaMiddleware.run(setSavingDetailsSaga);
  sagaMiddleware.run(uploadPhotoSaga);
  sagaMiddleware.run(uploadPhotoSucceedSaga);

  return { store, persistor };
}
