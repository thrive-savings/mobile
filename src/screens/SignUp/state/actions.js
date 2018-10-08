import {
  SIGN_UP_URL,
  VERIFY_REFERRAL_URL,
  TRY_PERSONAL_CLICKED,
  ACCEPT_PERSONAL,
  CHANGE_STEP
} from "./constants";

export const signUpUser = payload => ({
  payload,
  type: `${SIGN_UP_URL}_SUBMIT`
});
export const verifyReferralCode = payload => ({
  payload,
  type: `${VERIFY_REFERRAL_URL}_SUBMIT`
});
export const tryPersonalClicked = () => ({ type: TRY_PERSONAL_CLICKED });
export const acceptPersonal = () => ({ type: ACCEPT_PERSONAL });

export const changeStep = payload => ({ payload, type: CHANGE_STEP });
