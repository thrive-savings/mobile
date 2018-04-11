import { SET_WORK_TYPE_URL, SET_SAVING_TYPE_URL, SET_SAVING_DETAILS_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";

const setWorkTypeSaga = function * () {
  yield takeEvery(`${SET_WORK_TYPE_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${SET_WORK_TYPE_URL}`, { data: payload }));
  });
};

const setSavingTypeSaga = function * () {
  yield takeEvery(`${SET_SAVING_TYPE_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${SET_SAVING_TYPE_URL}`, { data: payload }));
  });
};

const setSavingDetailsSaga = function * () {
  yield takeEvery(`${SET_SAVING_DETAILS_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${SET_SAVING_DETAILS_URL}`, { data: payload }));
  });
};

export { setWorkTypeSaga, setSavingTypeSaga, setSavingDetailsSaga };
