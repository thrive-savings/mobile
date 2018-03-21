import { PASSWORD_REQUEST_URL } from "./constants";

export const passwordRequest = (payload) => ({ payload, type: `${PASSWORD_REQUEST_URL}_SUBMIT` });
