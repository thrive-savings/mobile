import {
  FETCH_ACCOUNTS_URL,
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

const fetchAccountsSaga = function*() {
  yield takeEvery(`${FETCH_ACCOUNTS_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${FETCH_ACCOUNTS_URL}`, { data: payload }));
  });
};

const updateUserConnectionsSaga = function*() {
  yield takeEvery(`${UPDATE_USER_CONNECTIONS}`, function*({ payload }) {
    yield put(updateConnectionsData(payload));
  });
};

export { getUiTokenSaga, fetchAccountsSaga, updateUserConnectionsSaga };
