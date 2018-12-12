import {
  FETCH_ACCOUNTS_URL,
  UPDATE_USER_CONNECTIONS,
  CHANGE_BANK_STEP,
  GET_UI_TOKEN
} from "./constants";

export const getUiToken = () => ({ type: `${GET_UI_TOKEN}_SUBMIT` });

export const fetchAccounts = payload => ({
  payload,
  type: `${FETCH_ACCOUNTS_URL}_SUBMIT`
});

export const updateUserConnections = payload => ({
  payload,
  type: `${UPDATE_USER_CONNECTIONS}`
});
export const changeBankStep = payload => ({
  payload,
  type: `${CHANGE_BANK_STEP}`
});
