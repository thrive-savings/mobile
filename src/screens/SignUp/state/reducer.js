import { SIGN_UP_URL, VERIFY_REFERRAL_URL } from "./constants";
const initialState = {
  data: {},
  isSaving: false,
  contactedApi: false,
  error: false,
  errorMessage: ""
};

export default function signUpReducer (state = initialState, action) {
  switch (action.type) {
    case `${SIGN_UP_URL}_SUBMIT`:
      return {
        ...state,
        isSaving: true
      };
    case `${SIGN_UP_URL}_SUCCEED`:
      console.log("Sign Up Succeeded!");
      const { payload: { data: signUpData } } = action;
      return {
        ...state,
        data: signUpData ? signUpData : {},
        isSaving: false,
        contactedApi: true,
        error: false,
        errorMessage: ""
      };
    case `${SIGN_UP_URL}_FAIL`:
      console.log("Sign Up Failed!");
      return {
        ...state,
        isSaving: false,
        contactedApi: true,
        error: true,
        errorMessage: action.error
      };
    case `${VERIFY_REFERRAL_URL}_SUBMIT`:
        return {
          ...state,
          isSaving: true
        };
    case `${VERIFY_REFERRAL_URL}_SUCCEED`:
        console.log("Verify Referral Succeeded!");
        const { payload: { data: verifyReferralData } } = action;
        return {
          ...state,
          data: verifyReferralData ? verifyReferralData : {},
          isSaving: false,
          contactedApi: true,
          error: false,
          errorMessage: ""
        };
    case `${VERIFY_REFERRAL_URL}_FAIL`:
        console.log("Verify Referral Failed!");
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
