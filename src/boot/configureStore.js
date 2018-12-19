// @flow
import { composeWithDevTools } from "remote-redux-devtools";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import persistedReducer from "../reducers";

import { requestApiSaga } from "../globals/requestApi";

import {
  loginSaga,
  getUpdatesSaga,
  bonusNotificationSeenSaga,
  setExpoTokenSaga
} from "../screens/Login/state/sagas";
import {
  signUpSaga,
  signUpSucceedSaga,
  verifyReferralCodeSaga,
  acceptPersonalSaga
} from "../screens/SignUp/state/sagas";
import {
  setPhoneSaga,
  setPhoneSucceedSaga,
  verifyCodeSaga,
  verifyCodeSucceedSaga,
  resendCodeSaga
} from "../screens/SetPhone/state/sagas";
import {
  passwordRequestSaga,
  passwordResetSaga
} from "../screens/ForgotPassword/state/sagas";
import {
  getUiTokenSaga,
  fetchConnectionSaga,
  setDefaultAccountSaga,
  unlinkConnectionSaga,
  unlinkConnectionSucceedSaga,
  updateUserConnectionsSaga
} from "../screens/IntegrateBank/state/sagas";
import {
  setWorkTypeSaga,
  setSavingTypeSaga,
  setSavingDetailsSaga,
  preferencesInitialSetDoneSaga,
  preferencesInitialSetDoneSucceedSaga
} from "../screens/SavingPreferences/state/sagas";
import {
  uploadPhotoSaga,
  deletePhotoSaga,
  setEmailSaga,
  setEmailSucceedSaga,
  setPasswordSaga,
  setPasswordSucceedSaga
} from "../screens/Profile/state/sagas";
import {
  addGoalSaga,
  addGoalSucceedSaga,
  updateGoalSaga,
  updateGoalSucceedSaga,
  deleteGoalSaga,
  deleteGoalSucceedSaga,
  withdrawGoalSaga,
  withdrawGoalSucceedSaga
} from "../screens/SavingGoals/state/sagas";
import { fetchHistorySaga } from "../screens/SavingHistory/state/sagas";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = composeWithDevTools({
    name: "thriveapp",
    realtime: true
  });
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  sagaMiddleware.run(requestApiSaga);
  sagaMiddleware.run(loginSaga);
  sagaMiddleware.run(getUpdatesSaga);
  sagaMiddleware.run(bonusNotificationSeenSaga);
  sagaMiddleware.run(setExpoTokenSaga);
  sagaMiddleware.run(signUpSaga);
  sagaMiddleware.run(signUpSucceedSaga);
  sagaMiddleware.run(verifyReferralCodeSaga);
  sagaMiddleware.run(acceptPersonalSaga);
  sagaMiddleware.run(setPhoneSaga);
  sagaMiddleware.run(setPhoneSucceedSaga);
  sagaMiddleware.run(verifyCodeSaga);
  sagaMiddleware.run(verifyCodeSucceedSaga);
  sagaMiddleware.run(resendCodeSaga);
  sagaMiddleware.run(passwordRequestSaga);
  sagaMiddleware.run(passwordResetSaga);
  sagaMiddleware.run(getUiTokenSaga);
  sagaMiddleware.run(fetchConnectionSaga);
  sagaMiddleware.run(setDefaultAccountSaga);
  sagaMiddleware.run(unlinkConnectionSaga);
  sagaMiddleware.run(unlinkConnectionSucceedSaga);
  sagaMiddleware.run(updateUserConnectionsSaga);
  sagaMiddleware.run(setWorkTypeSaga);
  sagaMiddleware.run(setSavingTypeSaga);
  sagaMiddleware.run(setSavingDetailsSaga);
  sagaMiddleware.run(preferencesInitialSetDoneSaga);
  sagaMiddleware.run(preferencesInitialSetDoneSucceedSaga);
  sagaMiddleware.run(uploadPhotoSaga);
  sagaMiddleware.run(deletePhotoSaga);
  sagaMiddleware.run(setEmailSaga);
  sagaMiddleware.run(setEmailSucceedSaga);
  sagaMiddleware.run(setPasswordSaga);
  sagaMiddleware.run(setPasswordSucceedSaga);
  sagaMiddleware.run(addGoalSaga);
  sagaMiddleware.run(addGoalSucceedSaga);
  sagaMiddleware.run(updateGoalSaga);
  sagaMiddleware.run(updateGoalSucceedSaga);
  sagaMiddleware.run(deleteGoalSaga);
  sagaMiddleware.run(deleteGoalSucceedSaga);
  sagaMiddleware.run(withdrawGoalSaga);
  sagaMiddleware.run(withdrawGoalSucceedSaga);
  sagaMiddleware.run(fetchHistorySaga);

  return { store, persistor };
}
