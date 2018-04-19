import { SAVE_PHONE_URL, CODE_VERIFY_URL, CODE_RESEND_URL } from "./constants";
const initialState = {
  data: {},
  savedPhone: undefined,
  showModal: false,
  isSetting: false,
  setError: false,
  setErrorMessage: "",
  isVerifying: false,
  isResending: false,
  verifyError: false,
  verifyErrorMessage: ""
};

export default function signUpReducer (state = initialState, action) {
  switch (action.type) {
    //Save Phone cases
    case `${SAVE_PHONE_URL}_SUBMIT`:
      return {
        ...state,
        savedPhone: undefined,
        isSetting: true,
        showModal: false,
      };
    case `${SAVE_PHONE_URL}_SUCCEED`:
      const { payload: { data: savePhoneData } } = action;
      return {
        ...state,
        data: savePhoneData ? savePhoneData : {},
        savedPhone: savePhoneData.phone,
        showModal: true,
        isSetting: false,
        setError: false,
        setErrorMessage: ""
      };
    case `${SAVE_PHONE_URL}_FAIL`:
      return {
        ...state,
        savedPhone: undefined,
        showModal: false,
        isSetting: false,
        setError: true,
        setErrorMessage: action.error
      };

    //Code Verify cases
    case `${CODE_VERIFY_URL}_SUBMIT`:
      return {
        ...state,
        isVerifying: true,
      };
    case `${CODE_VERIFY_URL}_SUCCEED`:
      const { payload: { data: verifyPayloadData } } = action;
      return {
        ...state,
        data: verifyPayloadData ? verifyPayloadData : {},
        isVerifying: false,
        verifyError: false,
        verifyErrorMessage: ""
      };
    case `${CODE_VERIFY_URL}_FAIL`:
      return {
        ...state,
        isVerifying: false,
        verifyError: true,
        verifyErrorMessage: action.error
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
          isResending: false,
          verifyError: false,
          verifyErrorMessage: ""
        };
      case `${CODE_RESEND_URL}_FAIL`:
        return {
          ...state,
          isResending: false,
          verifyError: true,
          verifyErrorMessage: action.error
        };
    default:
      return state;
  }
}
