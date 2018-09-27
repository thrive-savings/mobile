import {
  SAVE_PHONE_URL,
  CODE_VERIFY_URL,
  CODE_RESEND_URL,
  CHANGE_STEP
} from "./constants";
const initialState = {
  data: {},
  step: 0,
  showModal: false,
  isLoading: false,
  isResending: false,
  error: false,
  errorMessage: ""
};

export default function verifyCodeReducer(state = initialState, action) {
  switch (action.type) {
    //Save Phone cases
    case `${SAVE_PHONE_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true,
        showModal: false
      };
    case `${SAVE_PHONE_URL}_SUCCEED`:
      const { payload: { data: savePhoneData } } = action;
      return {
        ...state,
        data: savePhoneData ? savePhoneData : {},
        step: savePhoneData.authorized.isVerified ? 0 : 1,
        showModal: true,
        isLoading: false,
        error: false,
        errorMessage: ""
      };
    case `${SAVE_PHONE_URL}_FAIL`:
      return {
        ...state,
        showModal: false,
        isLoading: false,
        error: true,
        errorMessage: action.error
      };

    //Code Verify cases
    case `${CODE_VERIFY_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true
      };
    case `${CODE_VERIFY_URL}_SUCCEED`:
      const { payload: { data: verifyPayloadData } } = action;
      return {
        ...state,
        data: verifyPayloadData ? verifyPayloadData : {},
        step: 0,
        isLoading: false,
        error: false,
        errorMessage: ""
      };
    case `${CODE_VERIFY_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
      };

    //Code Resend cases
    case `${CODE_RESEND_URL}_SUBMIT`:
      return {
        ...state,
        isResending: true
      };
    case `${CODE_RESEND_URL}_SUCCEED`:
      const { payload: { data: resendPayloadData } } = action;
      return {
        ...state,
        data: resendPayloadData ? resendPayloadData : {},
        step: 1,
        isResending: false,
        error: false,
        errorMessage: ""
      };
    case `${CODE_RESEND_URL}_FAIL`:
      return {
        ...state,
        isResending: false,
        error: true,
        errorMessage: action.error
      };

    case CHANGE_STEP:
      const { payload: { step } } = action;
      return {
        ...state,
        step,
        error: false,
        errorMessage: ""
      };

    default:
      return state;
  }
}
