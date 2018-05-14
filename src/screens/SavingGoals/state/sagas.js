import { GET_GOALS_URL, ADD_GOAL_URL, UPDATE_GOAL_URL, DELETE_GOAL_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";

const getGoalsSaga = function * () {
  yield takeEvery(`${GET_GOALS_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${GET_GOALS_URL}`, { data: payload }));
  });
};

const addGoalSaga = function * () {
  yield takeEvery(`${ADD_GOAL_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${ADD_GOAL_URL}`, { data: payload }));
  });
};

const updateGoalSaga = function * () {
  yield takeEvery(`${UPDATE_GOAL_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${UPDATE_GOAL_URL}`, { data: payload }));
  });
};

const deleteGoalSaga = function * () {
  yield takeEvery(`${DELETE_GOAL_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${DELETE_GOAL_URL}`, { data: payload }));
  });
};

export { getGoalsSaga, addGoalSaga, updateGoalSaga, deleteGoalSaga };
