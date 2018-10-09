import {
  SET_SUCCEED_FLAG_OFF,
  ADD_GOAL_URL,
  UPDATE_GOAL_URL,
  DELETE_GOAL_URL,
  WITHDRAW_GOAL_URL
} from "./constants";
const initialState = {
  successCB: undefined,
  isGetting: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  isWithdrawing: false,
  serverCallSucceeded: false,
  error: false,
  errorMessage: ""
};

export default function goalsReducer(state = initialState, action) {
  switch (action.type) {
    // Set Succeed Flag off case
    case `${SET_SUCCEED_FLAG_OFF}`:
      return {
        ...state,
        serverCallSucceeded: false
      };

    // Adding Goal cases
    case `${ADD_GOAL_URL}_SUBMIT`:
      return {
        ...state,
        serverCallSucceeded: false,
        isAdding: true
      };
    case `${ADD_GOAL_URL}_SUCCEED`:
      return {
        ...state,
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
      return {
        ...state,
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
      return {
        ...state,
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

    // Deleting Goal cases
    case `${WITHDRAW_GOAL_URL}_SUBMIT`:
      return {
        ...state,
        serverCallSucceeded: false,
        isWithdrawing: true
      };
    case `${WITHDRAW_GOAL_URL}_SUCCEED`:
      return {
        ...state,
        serverCallSucceeded: true,
        isWithdrawing: false,
        error: false,
        errorMessage: ""
      };
    case `${WITHDRAW_GOAL_URL}_FAIL`:
      return {
        ...state,
        serverCallSucceeded: false,
        isWithdrawing: false,
        error: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
}
