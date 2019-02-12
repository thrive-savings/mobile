import { FETCH_DEBTS_URL, SAVE_DEBT_DETAILS_URL } from "./constants";

export const fetchDebts = payload => ({
  payload,
  type: `${FETCH_DEBTS_URL}_SUBMIT`
});

export const saveDebtDetails = payload => ({
  payload,
  type: `${SAVE_DEBT_DETAILS_URL}_SUBMIT`
});
