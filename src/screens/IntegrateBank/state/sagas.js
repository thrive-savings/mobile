import {
  FETCH_CONNECTION_URL,
  SET_DEFAULT_ACCOUNT_URL,
  UNLINK_CONNECTION_URL,
  UPDATE_USER_CONNECTIONS,
  GET_UI_TOKEN
} from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateConnectionsData } from "../../Login/state/actions";

const getUiTokenSaga = function*() {
  yield takeEvery(`${GET_UI_TOKEN}_SUBMIT`, function*() {
    yield put(requestApi(`${GET_UI_TOKEN}`));
  });
};

const fetchConnectionSaga = function*() {
  yield takeEvery(`${FETCH_CONNECTION_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${FETCH_CONNECTION_URL}`, { data: payload }));
  });
};

const setDefaultAccountSaga = function*() {
  yield takeEvery(`${SET_DEFAULT_ACCOUNT_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${SET_DEFAULT_ACCOUNT_URL}`, { data: payload }));
  });
};

const unlinkConnectionSaga = function*() {
  yield takeEvery(`${UNLINK_CONNECTION_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${UNLINK_CONNECTION_URL}`, { data: payload }));
  });
};

const unlinkConnectionSucceedSaga = function*() {
  yield takeEvery(`${UNLINK_CONNECTION_URL}_SUCCEED`, function*({ payload }) {
    yield put(updateConnectionsData(payload));
  });
};

const updateUserConnectionsSaga = function*() {
  yield takeEvery(`${UPDATE_USER_CONNECTIONS}`, function*({ payload }) {
    yield put(updateConnectionsData(payload));
  });
};

export {
  getUiTokenSaga,
  fetchConnectionSaga,
  setDefaultAccountSaga,
  unlinkConnectionSaga,
  unlinkConnectionSucceedSaga,
  updateUserConnectionsSaga
};
