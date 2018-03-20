import { FETCH_ACCOUNTS_URL, SET_DEFAULT_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";

const fetchAccountsSaga = function * () {
  yield takeEvery(`${FETCH_ACCOUNTS_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${FETCH_ACCOUNTS_URL}`, { data: payload }));
  });
};

const setDefaultSaga = function * () {
  yield takeEvery(`${SET_DEFAULT_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${SET_DEFAULT_URL}`, { data: payload }));
  });
};

export { fetchAccountsSaga, setDefaultSaga };
