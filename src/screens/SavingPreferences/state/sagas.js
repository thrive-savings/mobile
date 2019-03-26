import {
  SET_WORK_TYPE_URL,
  SET_SAVING_TYPE_URL,
  SET_SAVING_DETAILS_URL,
  PREFERENCES_INITIAL_SET_DONE
} from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateNotificationsData, updateSavingPreferencesData } from "../../Login/state/actions";

const setWorkTypeSaga = function*() {
  yield takeEvery(`${SET_WORK_TYPE_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${SET_WORK_TYPE_URL}`, { data: payload }));
  });
};
const setWorkTypeSucceedSaga = function*() {
  yield takeEvery(`${SET_WORK_TYPE_URL}_SUCCEED`, function*({ payload }) {
    yield put(updateSavingPreferencesData(payload));
  });
};

const setSavingTypeSaga = function*() {
  yield takeEvery(`${SET_SAVING_TYPE_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${SET_SAVING_TYPE_URL}`, { data: payload }));
  });
};
const setSavingTypeSucceedSaga = function*() {
  yield takeEvery(`${SET_SAVING_TYPE_URL}_SUCCEED`, function*({ payload }) {
    yield put(updateSavingPreferencesData(payload));
  });
};

const setSavingDetailsSaga = function*() {
  yield takeEvery(`${SET_SAVING_DETAILS_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${SET_SAVING_DETAILS_URL}`, { data: payload }));
  });
};
const setSavingDetailsSucceedSaga = function*() {
  yield takeEvery(`${SET_SAVING_DETAILS_URL}_SUCCEED`, function*({ payload }) {
    yield put(updateSavingPreferencesData(payload));
  });
};

const preferencesInitialSetDoneSaga = function*() {
  yield takeEvery(`${PREFERENCES_INITIAL_SET_DONE}_SUBMIT`, function*() {
    yield put(requestApi(`${PREFERENCES_INITIAL_SET_DONE}`));
  });
};
const preferencesInitialSetDoneSucceedSaga = function*() {
  yield takeEvery(`${PREFERENCES_INITIAL_SET_DONE}_SUCCEED`, function*() {
    yield put(updateNotificationsData({ type: "savingPreferences" }));
  });
};


export {
  setWorkTypeSaga,
  setWorkTypeSucceedSaga,
  setSavingTypeSaga,
  setSavingTypeSucceedSaga,
  setSavingDetailsSaga,
  setSavingDetailsSucceedSaga,
  preferencesInitialSetDoneSaga,
  preferencesInitialSetDoneSucceedSaga
};
