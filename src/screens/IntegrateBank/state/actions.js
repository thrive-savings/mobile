import { FETCH_ACCOUNTS_URL, SET_DEFAULT_URL, UPDATE_USER_ACCOUNT, CHANGE_BANK_STEP } from "./constants";

export const fetchAccounts = (payload) => ({ payload, type: `${FETCH_ACCOUNTS_URL}_SUBMIT` });
export const setDefault = (payload) => ({ payload, type: `${SET_DEFAULT_URL}_SUBMIT` });

export const updateUserAccount = (payload) => ({ payload, type: `${UPDATE_USER_ACCOUNT}` });
export const changeBankStep = (payload) => ({ payload, type: `${CHANGE_BANK_STEP}` });
