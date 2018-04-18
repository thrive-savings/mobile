import { REQUEST_URL, UPDATE_AUTH_DATA } from "./constants";
const initialState = {
  data: {},
  isLoading: false,
  error: false,
  errorMessage: ""
};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    //Update Data case
    case `${UPDATE_AUTH_DATA}`:
      const { payload: { data: authData } } = action;
      return {
        ...state,
        data: authData
      };

    //Server call cases
    case `${REQUEST_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true
      };
    case `${REQUEST_URL}_SUCCEED`:
      const { payload: { data } } = action;
      return {
        ...state,
        data,
        isLoading: false,
        error: false,
        errorMessage: ""
      };
    case `${REQUEST_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
}
