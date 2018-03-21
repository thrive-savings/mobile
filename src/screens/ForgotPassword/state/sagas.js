import { PASSWORD_REQUEST_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";

const passwordRequestSaga = function * () {
  yield takeEvery(`${PASSWORD_REQUEST_URL}_SUBMIT`, function * ({ payload }) {
    console.log(`Dispatching ${PASSWORD_REQUEST_URL} event`);
    console.log(payload);
    yield put(requestApi(`${PASSWORD_REQUEST_URL}`, { data: payload }, { form: 'forgotPassword' }));
  });
};

export default passwordRequestSaga;
