import {
  REQUEST_URL,
  GET_UPDATES,
  BONUS_NOTIFICATION_SEEN,
  SET_EXPO_TOKEN,
  SUBMIT_RATING
} from "./constants";
import { put, takeEvery, call } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { getExpoPushToken } from "../../../globals/notifications";

const loginSaga = function*() {
  yield takeEvery(`${REQUEST_URL}_SUBMIT`, function*({ payload }) {
    yield put(
      requestApi(`${REQUEST_URL}`, { data: payload }, { form: "login" })
    );
  });
};

const getUpdatesSaga = function*() {
  yield takeEvery(`${GET_UPDATES}_SUBMIT`, function*() {
    yield put(requestApi(`${GET_UPDATES}`));
  });
};

const bonusNotificationSeenSaga = function*() {
  yield takeEvery(`${BONUS_NOTIFICATION_SEEN}_SUBMIT`, function*() {
    yield put(requestApi(`${BONUS_NOTIFICATION_SEEN}`));
  });
};

const setExpoTokenSaga = function*() {
  yield takeEvery(`${SET_EXPO_TOKEN}_SUBMIT`, function*() {
    const token = yield call(getExpoPushToken);
    if (token) {
      yield put(requestApi(`${SET_EXPO_TOKEN}`, { data: { token } }));
    }
  });
};

const submitRatingSaga = function*() {
  yield takeEvery(`${SUBMIT_RATING}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${SUBMIT_RATING}`, { data: payload }));
  });
};

export {
  loginSaga,
  getUpdatesSaga,
  bonusNotificationSeenSaga,
  setExpoTokenSaga,
  submitRatingSaga
};
