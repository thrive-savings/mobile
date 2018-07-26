import { FETCH_ACCOUNTS_URL, SET_DEFAULT_URL, GET_UI_TOKEN, UPDATE_USER_ACCOUNT } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateAccountData } from "../../Login/state/actions";


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

const getUiTokenSaga = function * () {
  yield takeEvery(`${GET_UI_TOKEN}_SUBMIT`, function * () {
    yield put(requestApi(`${GET_UI_TOKEN}`));
  });
};

const updateUserAccountSaga = function * () {
  yield takeEvery(`${UPDATE_USER_ACCOUNT}`, function * ({ payload }) {
    yield put(updateAccountData(payload));
  });
};

export { fetchAccountsSaga, setDefaultSaga, getUiTokenSaga, updateUserAccountSaga };
