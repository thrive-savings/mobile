import amplitude from "../../../globals/amplitude";
import {
  SIGN_UP_URL,
  VERIFY_COMPANY_CODE_URL,
  TRY_PERSONAL_CLICKED,
  CHANGE_STEP
} from "./constants";
const initialState = {
  data: {},
  companyID: 1,
  companyLogoUrl: undefined,
  step: 0,
  isLoading: false,
  signUpError: undefined,
  verifyCodeError: undefined
};

export default function signUpReducer(state = initialState, action) {
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
        step: 2,
        isLoading: false,
        signUpError: undefined
      };
    case `${SIGN_UP_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        signUpError: action.error
      };

    //Verify Referral cases
    case `${VERIFY_COMPANY_CODE_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true,
        companyID: 1
      };
    case `${VERIFY_COMPANY_CODE_URL}_SUCCEED`:
      const { payload: { data: verifyReferralData } } = action;
      amplitude.track(
        amplitude.events.EMPLOYER_CODE_VERIFIED,
        verifyReferralData
      );
      return {
        ...state,
        data: verifyReferralData ? verifyReferralData : {},
        companyID: verifyReferralData.companyID,
        companyLogoUrl: verifyReferralData.companyLogoUrl,
        step: 2,
        isLoading: false,
        verifyCodeError: undefined
      };
    case `${VERIFY_COMPANY_CODE_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        verifyReferralCode: "",
        verifyCodeError: action.error
      };

    case TRY_PERSONAL_CLICKED:
      return {
        ...state,
        step: 2
      };

    case CHANGE_STEP:
      const { payload: { step } } = action;
      return {
        ...state,
        step
      };
    default:
      return state;
  }
}
