export const GET_UI_TOKEN = "/user/quovo-ui-token";
export const FETCH_CONNECTION_URL = "/user/bank-fetch-accounts";
export const SET_DEFAULT_ACCOUNT_URL = "/user/bank-set-default-account";
export const UNLINK_CONNECTION_URL = "/user/bank-unlink-connection";

export const UPDATE_USER_CONNECTIONS = "UPDATE_USER_CONNECTIONS";
export const CHANGE_BANK_STEP = "CHANGE_BANK_STEP";

export const LINK_STEPS = {
  INFO: 0,
  AUTH: 1,
  ACCOUNT: 2,
  SUCCESS: 3
};

export const LOADING_STATES = {
  NONE: "none",
  GETTING_TOKEN: "getting_token",
  FETCHING_ACCOUNTS: "fetching_accounts",
  SETTING_DEFAULT_ACCOUNT: "setting_default_account",
  UNLINKING_CONNECTION: "unlinking_connection"
};

export const ACTION_TYPES = {
  RELINK: "relink",
  SET_DEFAULT: "set_default",
  NEW: "new",
  INITAL: "initial"
};
