import { CLEAR_STORAGE } from "../../../globals/clearStorage";
import { REQUEST_URL } from "./constants";
const initialState = {
  data: {},
  isSaving: false,
  error: false,
  errorMessage: ""
};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case `${REQUEST_URL}_SUBMIT`:
      return {
        ...state,
        isSaving: true
      };
    case `${REQUEST_URL}_SUCCEED`:
      console.log("Sign Up Succeeded!");
      const { payload: { data } } = action;
      return {
        ...state,
        data,
        isSaving: false,
        error: false,
        errorMessage: ""
      };
    case `${REQUEST_URL}_FAIL`:
      console.log("Sign Up Failed!");
      return {
        ...state,
        isSaving: false,
        error: true,
        errorMessage: action.error
      };
    case `${CLEAR_STORAGE}`:
      return {};
    default:
      return state;
  }
}
