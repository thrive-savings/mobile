import { REQUEST_URL, UPDATE_AUTH_DATA, UPDATE_AVATAR } from "./constants";

export const authUser = (payload) => ({ payload, type: `${REQUEST_URL}_SUBMIT` });
export const updateAuthData = (payload) => ({ payload, type: `${UPDATE_AUTH_DATA}` });
export const updateAvatar = (payload) => ({ payload, type: `${UPDATE_AVATAR}` });
