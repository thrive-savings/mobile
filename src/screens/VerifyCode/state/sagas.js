import { CODE_VERIFY_URL, CODE_RESEND_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";

const verifyCodeSaga = function * () {
  yield takeEvery(`${CODE_VERIFY_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${CODE_VERIFY_URL}`, { data: payload }, { form: 'verifyCode' }));
  });
};

const resendCodeSaga = function * () {
  yield takeEvery(`${CODE_RESEND_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${CODE_RESEND_URL}`, { data: payload }, { form: 'signup' }));
  });
};

export { verifyCodeSaga, resendCodeSaga };
