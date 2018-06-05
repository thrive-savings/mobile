import { UPLOAD_PHOTO_URL, DELETE_PHOTO_URL, SET_EMAIL_URL, SET_PASSWORD_URL } from "./constants";

export const uploadPhoto = (payload) => ({ payload, type: `${UPLOAD_PHOTO_URL}_SUBMIT` });
export const deletePhoto = () => ({ type: `${DELETE_PHOTO_URL}_SUBMIT` });

export const setEmail = (payload) => ({ payload, type: `${SET_EMAIL_URL}_SUBMIT` });
export const setPassword = (payload) => ({ payload, type: `${SET_PASSWORD_URL}_SUBMIT` });
