import { REQUEST_URL } from "./constants";
const initialState = {
  data: {},
  notVerified: false,
  dataFetched: false,
  isFetching: false,
  error: false,
  errorMessage: ""
};

export default function authReducer (state = initialState, action) {
  console.log(`Reducing ${action.type}`);
  switch (action.type) {
    case `${REQUEST_URL}_SUBMIT`:
      return {
        ...state,
        isFetching: true
      }
    case `${REQUEST_URL}_SUCCEED`:
      console.log("Authorization Succeeded!");
      const { payload: { data, notVerified } } = action;
      return {
        ...state,
        data,
        notVerified: notVerified ? true : false,
        isFetching: false
      }
    case `${REQUEST_URL}_FAIL`:
      console.log("Authorization Failed!");
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error
      }
    default:
      return state
  }
}
