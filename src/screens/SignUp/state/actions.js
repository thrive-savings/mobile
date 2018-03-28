import { SIGN_UP_URL, VERIFY_REFERRAL_URL } from "./constants";

export const signUpUser = (payload) => ({ payload, type: `${SIGN_UP_URL}_SUBMIT` });
export const verifyReferralCode = (payload) => ({ payload, type: `${VERIFY_REFERRAL_URL}_SUBMIT` });
