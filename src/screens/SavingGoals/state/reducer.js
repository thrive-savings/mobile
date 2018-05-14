import { SET_SUCCEED_FLAG_OFF, GET_GOALS_URL, ADD_GOAL_URL, UPDATE_GOAL_URL, DELETE_GOAL_URL } from "./constants";
const initialState = {
  goals: [],
  successCB: undefined,
  isGetting: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  serverCallSucceeded: false,
  error: false,
  errorMessage: ""
};

export default function goalsReducer (state = initialState, action) {
  switch (action.type) {
    // Set Succeed Flag off case
    case `${SET_SUCCEED_FLAG_OFF}`:
      return {
        ...state,
        serverCallSucceeded: false
      };

    // Getting Goals cases
    case `${GET_GOALS_URL}_SUBMIT`:
      return {
        ...state,
        isGetting: true
      };
    case `${GET_GOALS_URL}_SUCCEED`:
      const { payload: { data: getGoalsData } } = action;
      return {
        ...state,
        goals: getGoalsData.goals,
        isGetting: false,
        error: false,
        errorMessage: ""
      };
    case `${GET_GOALS_URL}_FAIL`:
      return {
        ...state,
        isGetting: false,
        error: true,
        errorMessage: action.error
      };

    // Adding Goal cases
    case `${ADD_GOAL_URL}_SUBMIT`:
      return {
        ...state,
        serverCallSucceeded: false,
        isAdding: true
      };
    case `${ADD_GOAL_URL}_SUCCEED`:
      const { payload: { data: addGoalData } } = action;
      return {
        ...state,
        goals: addGoalData.goals,
        serverCallSucceeded: true,
        isAdding: false,
        error: false,
        errorMessage: ""
      };
    case `${ADD_GOAL_URL}_FAIL`:
      return {
        ...state,
        serverCallSucceeded: false,
        isAdding: false,
        error: true,
        errorMessage: action.error
      };

    // Updating Goal cases
    case `${UPDATE_GOAL_URL}_SUBMIT`:
      return {
        ...state,
        serverCallSucceeded: false,
        isUpdating: true
      };
    case `${UPDATE_GOAL_URL}_SUCCEED`:
      const { payload: { data: updateGoalData } } = action;
      return {
        ...state,
        goals: updateGoalData.goals,
        serverCallSucceeded: true,
        isUpdating: false,
        error: false,
        errorMessage: ""
      };
    case `${UPDATE_GOAL_URL}_FAIL`:
      return {
        ...state,
        serverCallSucceeded: false,
        isUpdating: false,
        error: true,
        errorMessage: action.error
      };

    // Deleting Goal cases
    case `${DELETE_GOAL_URL}_SUBMIT`:
      return {
        ...state,
        serverCallSucceeded: false,
        isDeleting: true
      };
    case `${DELETE_GOAL_URL}_SUCCEED`:
      const { payload: { data: deleteGoalData } } = action;
      return {
        ...state,
        goals: deleteGoalData.goals,
        serverCallSucceeded: true,
        isDeleting: false,
        error: false,
        errorMessage: ""
      };
    case `${DELETE_GOAL_URL}_FAIL`:
      return {
        ...state,
        serverCallSucceeded: false,
        isDeleting: false,
        error: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
}
