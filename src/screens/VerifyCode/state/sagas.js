import { SAVE_PHONE_URL, CODE_VERIFY_URL, CODE_RESEND_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateAuthData } from "../../Login/state/actions";

const savePhoneSaga = function * () {
  yield takeEvery(`${SAVE_PHONE_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${SAVE_PHONE_URL}`, { data: payload }, { form: "setPhone" }));
  });
};

const verifyCodeSaga = function * () {
  yield takeEvery(`${CODE_VERIFY_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${CODE_VERIFY_URL}`, { data: payload }, { form: "verifyCode" }));
  });
};

const verifyCodeSucceedSaga = function * () {
  yield takeEvery(`${CODE_VERIFY_URL}_SUCCEED`, function * ({ payload }) {
    yield put(updateAuthData(payload));
  });
};

const resendCodeSaga = function * () {
  yield takeEvery(`${CODE_RESEND_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${CODE_RESEND_URL}`, { data: payload }, { form: "signup" }));
  });
};

export { savePhoneSaga, verifyCodeSaga, verifyCodeSucceedSaga, resendCodeSaga };
