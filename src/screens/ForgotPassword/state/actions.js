import { CLEAR_STORAGE, PASSWORD_REQUEST_URL, PASSWORD_RESET_URL } from "./constants";

export const clearStorage = () => ({type: CLEAR_STORAGE});

export const passwordRequest = (payload) => ({ payload, type: `${PASSWORD_REQUEST_URL}_SUBMIT` });
export const passwordReset = (payload) => ({ payload, type: `${PASSWORD_RESET_URL}_SUBMIT` });
