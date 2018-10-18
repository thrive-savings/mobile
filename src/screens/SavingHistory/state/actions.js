import { FETCH_HISTORY_URL } from "./constants";

export const fetchHistory = payload => ({
  payload,
  type: `${FETCH_HISTORY_URL}_SUBMIT`
});
