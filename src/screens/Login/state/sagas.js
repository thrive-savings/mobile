import {
  REQUEST_URL,
  GET_UPDATES,
  BONUS_NOTIFICATION_SEEN,
  SET_EXPO_TOKEN
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
  yield takeEvery(`${SET_EXPO_TOKEN}_SUBMIT`, function*({ payload }) {
    const token = yield call(getExpoPushToken);
    yield put(requestApi(`${SET_EXPO_TOKEN}`, { data: { token } }));
  });
};

export {
  loginSaga,
  getUpdatesSaga,
  bonusNotificationSeenSaga,
  setExpoTokenSaga
};
