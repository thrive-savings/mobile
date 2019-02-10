import {
  FETCH_CONNECTION_URL,
  SET_DEFAULT_AUTH_ACCOUNT_URL,
  SET_DEFAULT_ACCOUNT_URL,
  UNLINK_CONNECTION_URL,
  UPDATE_USER_CONNECTIONS,
  CHANGE_BANK_STEP,
  GET_UI_TOKEN
} from "./constants";

export const getUiToken = () => ({ type: `${GET_UI_TOKEN}_SUBMIT` });

export const fetchConnection = payload => ({
  payload,
  type: `${FETCH_CONNECTION_URL}_SUBMIT`
});
export const setDefaultAuthAccount = payload => ({
  payload,
  type: `${SET_DEFAULT_AUTH_ACCOUNT_URL}_SUBMIT`
});
export const setDefaultAccount = payload => ({
  payload,
  type: `${SET_DEFAULT_ACCOUNT_URL}_SUBMIT`
});
export const unlinkConnection = payload => ({
  payload,
  type: `${UNLINK_CONNECTION_URL}_SUBMIT`
});

export const updateUserConnections = payload => ({
  payload,
  type: `${UPDATE_USER_CONNECTIONS}`
});
export const changeBankStep = payload => ({
  payload,
  type: `${CHANGE_BANK_STEP}`
});
