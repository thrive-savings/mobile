import { CHANGE_STEP, SET_WORK_TYPE_URL, SET_SAVING_TYPE_URL, SET_SAVING_DETAILS_URL } from "./constants";

export const changeStep = (payload) => ({payload, type: `${CHANGE_STEP}`});

export const setWorkType = (payload) => ({ payload, type: `${SET_WORK_TYPE_URL}_SUBMIT` });
export const setSavingType = (payload) => ({ payload, type: `${SET_SAVING_TYPE_URL}_SUBMIT` });
export const setSavingDetails = (payload) => ({ payload, type: `${SET_SAVING_DETAILS_URL}_SUBMIT` });
