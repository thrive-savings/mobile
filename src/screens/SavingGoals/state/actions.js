import { SET_SUCCEED_FLAG_OFF, ADD_GOAL_URL, UPDATE_GOAL_URL, DELETE_GOAL_URL } from "./constants";

export const setSucceedFlagOff = () => ({ type: `${SET_SUCCEED_FLAG_OFF}` });
export const addGoal = (payload) => ({ payload, type: `${ADD_GOAL_URL}_SUBMIT` });
export const updateGoal = (payload) => ({ payload, type: `${UPDATE_GOAL_URL}_SUBMIT` });
export const deleteGoal = (payload) => ({ payload, type: `${DELETE_GOAL_URL}_SUBMIT` });
