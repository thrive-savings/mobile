import { SIGN_UP_URL, VERIFY_REFERRAL_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateAuthData } from "../../Login/state/actions";

const signUpSaga = function * () {
  yield takeEvery(`${SIGN_UP_URL}_SUBMIT`, function * ({ payload }) {
    console.log(`Dispatching ${SIGN_UP_URL} event`);
    console.log(payload);
    yield put(requestApi(`${SIGN_UP_URL}`, { data: payload }, { form: "signup" }));
  });
};

const signUpSucceedSaga = function * () {
  yield takeEvery(`${SIGN_UP_URL}_SUCCEED`, function * ({ payload }) {
    console.log(`Taking ${SIGN_UP_URL}_SUCCEED`);
    console.log(payload);
    yield put(updateAuthData(payload));
  });
}

const verifyReferralCodeSaga = function * () {
  yield takeEvery(`${VERIFY_REFERRAL_URL}_SUBMIT`, function * ({ payload }) {
    console.log(`Dispatching ${VERIFY_REFERRAL_URL} event`);
    console.log(payload);
    yield put(requestApi(`${VERIFY_REFERRAL_URL}`, { data: payload }, { form: "referralCode" }));
  });
};

export { signUpSaga, signUpSucceedSaga, verifyReferralCodeSaga };
