import { REQUEST_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../helpers/requestApi";

const signUpSaga = function * () {
  yield takeEvery(`${REQUEST_URL}_SUBMIT`, function * ({ payload }) {
    console.log(`Dispatching ${REQUEST_URL} event`);
    console.log(payload);
    yield put(requestApi(`${REQUEST_URL}`, { data: payload }, { form: 'signup' }));
  });
};

export default signUpSaga;
