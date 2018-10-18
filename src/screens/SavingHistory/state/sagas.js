import { FETCH_HISTORY_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";

const fetchHistorySaga = function*() {
  yield takeEvery(`${FETCH_HISTORY_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${FETCH_HISTORY_URL}`, { data: payload }));
  });
};

export { fetchHistorySaga };
