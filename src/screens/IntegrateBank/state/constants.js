export const GET_UI_TOKEN = "/user/quovo-ui-token";
export const FETCH_CONNECTION_URL = "/user/bank-fetch-connection";
export const SET_DEFAULT_AUTH_ACCOUNT_URL =
  "/user/bank-set-default-auth-account";
export const SET_DEFAULT_ACCOUNT_URL = "/user/bank-set-default-account";
export const UNLINK_CONNECTION_URL = "/user/bank-unlink-connection";

export const UPDATE_USER_DATA_AFTER_LINKING_DONE =
  "UPDATE_USER_DATA_AFTER_LINKING_DONE";
export const CHANGE_BANK_STEP = "CHANGE_BANK_STEP";

export const LINK_STEPS = {
  INFO: 0,
  AUTH: 1,
  ACCOUNT: 2,
  FINAL: 3
};

export const LOADING_STATES = {
  NONE: "none",
  GETTING_TOKEN: "getting_token",
  FETCHING_CONNECTION: "fetching_connection",
  SETTING_DEFAULT_ACCOUNT: "setting_default_account",
  UNLINKING_CONNECTION: "unlinking_connection"
};
