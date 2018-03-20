import { REQUEST_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateAuthData } from "../../Login/state/actions";

const signUpSaga = function * () {
  yield takeEvery(`${REQUEST_URL}_SUBMIT`, function * ({ payload }) {
    console.log(`Dispatching ${REQUEST_URL} event`);
    console.log(payload);
    yield put(requestApi(`${REQUEST_URL}`, { data: payload }, { form: 'signup' }));
  });
};

const signUpSucceedSaga = function * () {
  yield takeEvery(`${REQUEST_URL}_SUCCEED`, function * ({ payload }) {
    console.log(`Taking ${REQUEST_URL}_SUCCEED`);
    console.log(payload);
    yield put(updateAuthData(payload));
  });
}

export { signUpSaga, signUpSucceedSaga };
