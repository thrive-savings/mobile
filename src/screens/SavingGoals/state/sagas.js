import { ADD_GOAL_URL, UPDATE_GOAL_URL, DELETE_GOAL_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateGoalsData } from "../../Login/state/actions";

const addGoalSaga = function * () {
  yield takeEvery(`${ADD_GOAL_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${ADD_GOAL_URL}`, { data: payload }));
  });
};

const addGoalSucceedSaga = function * () {
  yield takeEvery(`${ADD_GOAL_URL}_SUCCEED`, function * ({ payload }) {
    yield put(updateGoalsData(payload));
  });
};

const updateGoalSaga = function * () {
  yield takeEvery(`${UPDATE_GOAL_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${UPDATE_GOAL_URL}`, { data: payload }));
  });
};

const updateGoalSucceedSaga = function * () {
  yield takeEvery(`${UPDATE_GOAL_URL}_SUCCEED`, function * ({ payload }) {
    yield put(updateGoalsData(payload));
  });
};

const deleteGoalSaga = function * () {
  yield takeEvery(`${DELETE_GOAL_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${DELETE_GOAL_URL}`, { data: payload }));
  });
};

const deleteGoalSucceedSaga = function * () {
  yield takeEvery(`${DELETE_GOAL_URL}_SUCCEED`, function * ({ payload }) {
    yield put(updateGoalsData(payload));
  });
};

export { addGoalSaga, addGoalSucceedSaga, updateGoalSaga, updateGoalSucceedSaga, deleteGoalSaga, deleteGoalSucceedSaga };
