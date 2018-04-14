import { REQUEST_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";

const loginSaga = function * () {
  yield takeEvery(`${REQUEST_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${REQUEST_URL}`, { data: payload }, { form: "login" }));
  });
};

export default loginSaga;
