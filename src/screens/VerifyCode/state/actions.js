import { CODE_VERIFY_URL, CODE_RESEND_URL } from './constants';

export const verifyCode = (payload) => ({ payload, type: `${CODE_VERIFY_URL}_SUBMIT` });
export const resendCode = (payload) => ({ payload, type: `${CODE_RESEND_URL}_SUBMIT` });
