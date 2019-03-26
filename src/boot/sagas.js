import { requestApiSaga } from "../globals/requestApi";

import {
  loginSaga,
  getUpdatesSaga,
  bonusNotificationSeenSaga,
  setExpoTokenSaga,
  submitRatingSaga
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
  setDefaultAuthAccountSaga,
  setDefaultAccountSaga,
  setDefaultAccountSucceedSaga,
  unlinkConnectionSaga,
  unlinkConnectionSucceedSaga,
  updateUserConnectionsSaga
} from "../screens/IntegrateBank/state/sagas";
import {
  setWorkTypeSaga,
  setWorkTypeSucceedSaga,
  setSavingTypeSaga,
  setSavingTypeSucceedSaga,
  setSavingDetailsSaga,
  setSavingDetailsSucceedSaga,
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
import { fetchHistorySaga } from "../screens/History/state/sagas";
import { fetchDebtsSaga, saveDebtDetailsSaga } from "../screens/DebtDashboard/state/sagas";

export default function runSagas(sagaMiddleware) {
  sagaMiddleware.run(requestApiSaga);
  sagaMiddleware.run(loginSaga);
  sagaMiddleware.run(getUpdatesSaga);
  sagaMiddleware.run(bonusNotificationSeenSaga);
  sagaMiddleware.run(setExpoTokenSaga);
  sagaMiddleware.run(submitRatingSaga);
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
  sagaMiddleware.run(setDefaultAuthAccountSaga);
  sagaMiddleware.run(setDefaultAccountSaga);
  sagaMiddleware.run(setDefaultAccountSucceedSaga);
  sagaMiddleware.run(unlinkConnectionSaga);
  sagaMiddleware.run(unlinkConnectionSucceedSaga);
  sagaMiddleware.run(updateUserConnectionsSaga);
  sagaMiddleware.run(setWorkTypeSaga);
  sagaMiddleware.run(setWorkTypeSucceedSaga);
  sagaMiddleware.run(setSavingTypeSaga);
  sagaMiddleware.run(setSavingTypeSucceedSaga);
  sagaMiddleware.run(setSavingDetailsSaga);
  sagaMiddleware.run(setSavingDetailsSucceedSaga);
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
  sagaMiddleware.run(fetchDebtsSaga);
  sagaMiddleware.run(saveDebtDetailsSaga);
}
