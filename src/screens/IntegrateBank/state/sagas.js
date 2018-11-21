import {
  FETCH_ACCOUNTS_URL,
  ANSWER_MFA_QUESTIONS,
  SET_DEFAULT_URL,
  UPDATE_USER_ACCOUNT,
  GET_UI_TOKEN
} from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateAccountData } from "../../Login/state/actions";

const fetchAccountsSaga = function*() {
  yield takeEvery(`${FETCH_ACCOUNTS_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${FETCH_ACCOUNTS_URL}`, { data: payload }));
  });
};

const answerMFAQuestionsSaga = function*() {
  yield takeEvery(`${ANSWER_MFA_QUESTIONS}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${ANSWER_MFA_QUESTIONS}`, { data: payload }));
  });
};

const setDefaultSaga = function*() {
  yield takeEvery(`${SET_DEFAULT_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${SET_DEFAULT_URL}`, { data: payload }));
  });
};

const getUiTokenSaga = function*() {
  yield takeEvery(`${GET_UI_TOKEN}_SUBMIT`, function*() {
    yield put(requestApi(`${GET_UI_TOKEN}`));
  });
};

const updateUserAccountSaga = function*() {
  yield takeEvery(`${UPDATE_USER_ACCOUNT}`, function*({ payload }) {
    yield put(updateAccountData(payload));
  });
};

export {
  fetchAccountsSaga,
  answerMFAQuestionsSaga,
  setDefaultSaga,
  getUiTokenSaga,
  updateUserAccountSaga
};
