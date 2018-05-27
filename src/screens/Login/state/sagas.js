import { REQUEST_URL, GET_UPDATES, BONUS_NOTIFICATION_SEEN } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";

const loginSaga = function * () {
  yield takeEvery(`${REQUEST_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${REQUEST_URL}`, { data: payload }, { form: "login" }));
  });
};

const getUpdatesSaga = function * () {
  yield takeEvery(`${GET_UPDATES}_SUBMIT`, function * () {
    yield put(requestApi(`${GET_UPDATES}`));
  });
};

const bonusNotificationSeenSaga = function * () {
  yield takeEvery(`${BONUS_NOTIFICATION_SEEN}_SUBMIT`, function * () {
    yield put(requestApi(`${BONUS_NOTIFICATION_SEEN}`));
  });
};

export { loginSaga, getUpdatesSaga, bonusNotificationSeenSaga };
