import { FETCH_DEBTS_URL, SAVE_DEBT_DETAILS_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";

const fetchDebtsSaga = function*() {
  yield takeEvery(`${FETCH_DEBTS_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${FETCH_DEBTS_URL}`, { data: payload }));
  });
};

const saveDebtDetailsSaga = function*() {
  yield takeEvery(`${SAVE_DEBT_DETAILS_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${SAVE_DEBT_DETAILS_URL}`, { data: payload }));
  });
};

export { fetchDebtsSaga, saveDebtDetailsSaga };
