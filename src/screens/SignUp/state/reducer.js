import { REQUEST_URL } from "./constants";
const initialState = {
  data: {},
  isSaving: false,
  contactedApi: false,
  error: false,
  errorMessage: ""
};

export default function signUpReducer (state = initialState, action) {
  switch (action.type) {
    case `${REQUEST_URL}_SUBMIT`:
      return {
        ...state,
        isSaving: true
      };
    case `${REQUEST_URL}_SUCCEED`:
      console.log("Sign Up Succeeded!");
      const { payload: { data: payloadData } } = action;
      return {
        ...state,
        data: payloadData ? payloadData : {},
        isSaving: false,
        contactedApi: true,
        error: false,
        errorMessage: ""
      };
    case `${REQUEST_URL}_FAIL`:
      console.log("Sign Up Failed!");
      return {
        ...state,
        isSaving: false,
        contactedApi: true,
        error: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
}
