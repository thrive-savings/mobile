import {
  FETCH_CONNECTION_URL,
  SET_DEFAULT_AUTH_ACCOUNT_URL,
  SET_DEFAULT_ACCOUNT_URL,
  UNLINK_CONNECTION_URL,
  UPDATE_USER_DATA_AFTER_LINKING_DONE,
  GET_UI_TOKEN
} from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import {
  updateConnectionsData,
  updateMomentumOfferData,
  updateSynapseData
} from "../../Login/state/actions";

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

const setDefaultAuthAccountSaga = function*() {
  yield takeEvery(`${SET_DEFAULT_AUTH_ACCOUNT_URL}_SUBMIT`, function*({
    payload
  }) {
    yield put(requestApi(`${SET_DEFAULT_AUTH_ACCOUNT_URL}`, { data: payload }));
  });
};

const setDefaultAccountSaga = function*() {
  yield takeEvery(`${SET_DEFAULT_ACCOUNT_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${SET_DEFAULT_ACCOUNT_URL}`, { data: payload }));
  });
};

const setDefaultAccountSucceedSaga = function*() {
  yield takeEvery(`${SET_DEFAULT_ACCOUNT_URL}_SUCCEED`, function*({ payload }) {
    yield put(updateConnectionsData(payload));
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

const updateUserDataAfterLinkingDoneSaga = function*() {
  yield takeEvery(`${UPDATE_USER_DATA_AFTER_LINKING_DONE}`, function*({
    payload: {
      connection: newConnectionData,
      connections: allConnectionsData,
      momentumOfferData,
      synapseEntryData
    }
  }) {
    if (momentumOfferData) {
      yield put(updateMomentumOfferData({ momentumOfferData }));
    }

    if (synapseEntryData && Object.keys(synapseEntryData).length) {
      yield put(updateSynapseData({ data: synapseEntryData, key: "entry" }));
    }

    if (allConnectionsData) {
      yield put(updateConnectionsData({ connections: allConnectionsData }));
    } else if (newConnectionData) {
      yield put(updateConnectionsData({ connection: newConnectionData }));
    }
  });
};

export {
  getUiTokenSaga,
  fetchConnectionSaga,
  setDefaultAuthAccountSaga,
  setDefaultAccountSaga,
  setDefaultAccountSucceedSaga,
  unlinkConnectionSaga,
  unlinkConnectionSucceedSaga,
  updateUserDataAfterLinkingDoneSaga
};
