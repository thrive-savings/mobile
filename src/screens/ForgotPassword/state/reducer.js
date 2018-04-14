import { CLEAR_STORAGE, PASSWORD_REQUEST_URL, PASSWORD_RESET_URL } from "./constants";
const initialState = {
  data: {},
  isLoading: false,
  requestSucceeded: false,
  resetSucceeded: false,
  error: false,
  errorMessage: ""
};

export default function forgotPasswordReducer (state = initialState, action) {
  switch (action.type) {
    case CLEAR_STORAGE:
      return initialState;

    // Request cases
    case `${PASSWORD_REQUEST_URL}_SUBMIT`:
      return {
        ...state,
        requestSucceeded: false,
        isLoading: true
      };
    case `${PASSWORD_REQUEST_URL}_SUCCEED`:
      const { payload: { data: requestPayloadData } } = action;
      return {
        ...state,
        data: requestPayloadData ? requestPayloadData : {},
        isLoading: false,
        requestSucceeded: true,
        error: false,
        errorMessage: ""
      };
    case `${PASSWORD_REQUEST_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        requestSucceeded: false,
        error: true,
        errorMessage: action.error
      };

    // Reset cases
    case `${PASSWORD_RESET_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true
      };
    case `${PASSWORD_RESET_URL}_SUCCEED`:
      const { payload: { data: resetPayloadData } } = action;
      return {
        ...state,
        data: resetPayloadData ? resetPayloadData : {},
        isLoading: false,
        resetSucceeded: true,
        error: false,
        errorMessage: ""
      };
    case `${PASSWORD_RESET_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        resetSucceeded: false,
        error: true,
        errorMessage: action.error
      };

    default:
      return state;
  }
}
