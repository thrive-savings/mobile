import { PASSWORD_REQUEST_URL, PASSWORD_RESET_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";

const passwordRequestSaga = function * () {
  yield takeEvery(`${PASSWORD_REQUEST_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${PASSWORD_REQUEST_URL}`, { data: payload }, { form: "forgotPassword" }));
  });
};

const passwordResetSaga = function * () {
  yield takeEvery(`${PASSWORD_RESET_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${PASSWORD_RESET_URL}`, { data: payload }, { form: "forgotPassword" }));
  });
};

export { passwordRequestSaga, passwordResetSaga };
