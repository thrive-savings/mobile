import { SAVE_PHONE_URL, CODE_VERIFY_URL, CODE_RESEND_URL, CHANGE_STEP } from "./constants";

export const savePhone = (payload) => ({ payload, type: `${SAVE_PHONE_URL}_SUBMIT` });
export const verifyCode = (payload) => ({ payload, type: `${CODE_VERIFY_URL}_SUBMIT` });
export const resendCode = (payload) => ({ payload, type: `${CODE_RESEND_URL}_SUBMIT` });

export const changeStep = (payload) => ({ payload, type: CHANGE_STEP });
