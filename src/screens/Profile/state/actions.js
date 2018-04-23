import { UPLOAD_PHOTO_URL } from "./constants";

export const uploadPhoto = (payload) => ({ payload, type: `${UPLOAD_PHOTO_URL}_SUBMIT` });
