import { CODE_VERIFY_URL, CODE_RESEND_URL } from "./constants";
const initialState = {
  data: {},
  isVerifying: false,
  isResending: false,
  error: false,
  errorMessage: ""
};

export default function signUpReducer (state = initialState, action) {
  switch (action.type) {
    case `${CODE_VERIFY_URL}_SUBMIT`:
      return {
        ...state,
        isVerifying: true,
      };
    case `${CODE_VERIFY_URL}_SUCCEED`:
      console.log("Verify Code Succeeded!");
      const { payload: { data: verifyPayloadData } } = action;
      return {
        ...state,
        data: verifyPayloadData ? verifyPayloadData : {},
        isVerifying: false,
        error: false,
        errorMessage: ""
      };
    case `${CODE_VERIFY_URL}_FAIL`:
      console.log("Verify Code Failed!");
      return {
        ...state,
        isVerifying: false,
        error: true,
        errorMessage: action.error
      };
      case `${CODE_RESEND_URL}_SUBMIT`:
        return {
          ...state,
          isResending: true
        };
      case `${CODE_RESEND_URL}_SUCCEED`:
        console.log("Resend Code Succeeded!");
        const { payload: { data: resendPayloadData } } = action;
        return {
          ...state,
          data: resendPayloadData ? resendPayloadData : {},
          isResending: false,
          error: false,
          errorMessage: ""
        };
      case `${CODE_RESEND_URL}_FAIL`:
        console.log("Resend Code Failed!");
        return {
          ...state,
          isResending: false,
          error: true,
          errorMessage: action.error
        };
    default:
      return state;
  }
}
