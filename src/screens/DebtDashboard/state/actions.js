import { FETCH_DEBTS_URL } from "./constants";

export const fetchDebts = payload => ({
  payload,
  type: `${FETCH_DEBTS_URL}_SUBMIT`
});
