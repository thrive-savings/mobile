import { SIGN_UP_URL, VERIFY_REFERRAL_URL } from "./constants";
const initialState = {
  data: {},
  companyID: 1,
  step: 0,
  isLoading: false,
  error: false,
  errorMessage: ""
};

export default function signUpReducer (state = initialState, action) {
  switch (action.type) {
    //Sign Up cases
    case `${SIGN_UP_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true
      };
    case `${SIGN_UP_URL}_SUCCEED`:
      const { payload: { data: signUpData } } = action;
      return {
        ...state,
        data: signUpData ? signUpData : {},
        isLoading: false,
        error: false,
        errorMessage: ""
      };
    case `${SIGN_UP_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
      };

    //Verify Referral cases
    case `${VERIFY_REFERRAL_URL}_SUBMIT`:
        return {
          ...state,
          isLoading: true,
          companyID: 1
        };
    case `${VERIFY_REFERRAL_URL}_SUCCEED`:
        const { payload: { data: verifyReferralData } } = action;
        return {
          ...state,
          data: verifyReferralData ? verifyReferralData : {},
          companyID: verifyReferralData.companyID,
          step: 1,
          isLoading: false,
          error: false,
          errorMessage: ""
        };
    case `${VERIFY_REFERRAL_URL}_FAIL`:
        return {
          ...state,
          isLoading: false,
          verifyReferralCode: "",
          error: true,
          errorMessage: action.error
        };
    default:
      return state;
  }
}
