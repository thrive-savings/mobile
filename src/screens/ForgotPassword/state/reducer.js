import { PASSWORD_REQUEST_URL } from "./constants";
const initialState = {
  data: {},
  isRequesting: false,
  wasSuccessful: false,
  error: false,
  errorMessage: ""
};

export default function forgotPasswordReducer (state = initialState, action) {
  switch (action.type) {
    case `${PASSWORD_REQUEST_URL}_SUBMIT`:
      return {
        ...state,
        isRequesting: true
      };
    case `${PASSWORD_REQUEST_URL}_SUCCEED`:
      console.log("Password Request Succeeded!");
      const { payload: { data: requestPayloadData } } = action;
      return {
        ...state,
        data: requestPayloadData ? requestPayloadData : {},
        isRequesting: false,
        wasSuccessful: true,
        error: false,
        errorMessage: ""
      };
    case `${PASSWORD_REQUEST_URL}_FAIL`:
      console.log("Password Request Failed!");
      return {
        ...state,
        isRequesting: false,
        wasSuccessful: false,
        error: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
}
