import { REQUEST_URL, UPDATE_AUTH_DATA } from "./constants";
const initialState = {
  data: {},
  notVerified: false,
  isFetching: false,
  error: false,
  errorMessage: ""
};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case `${UPDATE_AUTH_DATA}`:
      console.log(`Reducing ${UPDATE_AUTH_DATA}`);
      const { payload: { data: authData } } = action;
      console.log(authData);
      return {
        ...state,
        data: authData
      }
    case `${REQUEST_URL}_SUBMIT`:
      console.log(`Reducing ${REQUEST_URL}_SUBMIT`);
      console.log(state);
      return {
        ...state,
        isFetching: true
      };
    case `${REQUEST_URL}_SUCCEED`:
      console.log("Authorization Succeeded!");
      const { payload: { data, notVerified } } = action;
      return {
        ...state,
        data,
        notVerified: notVerified ? true : false,
        isFetching: false,
        error: false,
        errorMessage: ""
      };
    case `${REQUEST_URL}_FAIL`:
      console.log("Authorization Failed!");
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
}
