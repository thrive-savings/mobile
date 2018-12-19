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
  error: false,
  errorMessage: ""
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
        step: 1,
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
        step: 1,
        isLoading: false,
        error: false,
        errorMessage: ""
      };
    case `${VERIFY_COMPANY_CODE_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        verifyReferralCode: "",
        error: true,
        errorMessage: action.error
      };

    case TRY_PERSONAL_CLICKED:
      return {
        ...state,
        step: 1
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
