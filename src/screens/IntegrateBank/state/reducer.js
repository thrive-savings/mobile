import {
  FETCH_CONNECTION_URL,
  SET_DEFAULT_ACCOUNT_URL,
  UNLINK_CONNECTION_URL,
  GET_UI_TOKEN,
  CHANGE_BANK_STEP,
  LINK_STEPS,
  LOADING_STATES
} from "./constants";

const initialState = {
  quovoUiToken: undefined,
  connection: undefined,
  allConnections: undefined,
  step: LINK_STEPS.INFO,
  loadingState: LOADING_STATES.NONE,
  error: undefined
};

export default function integrateBankReducer(state = initialState, action) {
  switch (action.type) {
    // Get Quovo Token cases
    case `${GET_UI_TOKEN}_SUBMIT`:
      return {
        ...state,
        loadingState: LOADING_STATES.GETTING_TOKEN
      };
    case `${GET_UI_TOKEN}_SUCCEED`:
      const { payload: { data: { token } } } = action;
      return {
        ...state,
        quovoUiToken: token,
        loadingState: LOADING_STATES.NONE,
        error: undefined
      };
    case `${GET_UI_TOKEN}_FAIL`:
      return {
        ...state,
        loadingState: LOADING_STATES.NONE,
        error: action.error
      };

    // Fetch Accounts cases
    case `${FETCH_CONNECTION_URL}_SUBMIT`:
      return {
        ...state,
        step: LINK_STEPS.ACCOUNT,
        loadingState: LOADING_STATES.FETCHING_ACCOUNTS
      };
    case `${FETCH_CONNECTION_URL}_SUCCEED`:
      return {
        ...state,
        connection: action.payload.connection,
        step: LINK_STEPS.ACCOUNT,
        loadingState: LOADING_STATES.NONE
      };
    case `${FETCH_CONNECTION_URL}_FAIL`:
      return {
        ...state,
        loadingState: LOADING_STATES.NONE,
        error: action.error
      };

    // Fetch Accounts cases
    case `${SET_DEFAULT_ACCOUNT_URL}_SUBMIT`:
      return {
        ...state,
        loadingState: LOADING_STATES.SETTING_DEFAULT_ACCOUNT
      };
    case `${SET_DEFAULT_ACCOUNT_URL}_SUCCEED`:
      return {
        ...state,
        allConnections: action.payload.connections,
        step: LINK_STEPS.SUCCESS,
        loadingState: LOADING_STATES.NONE
      };
    case `${SET_DEFAULT_ACCOUNT_URL}_FAIL`:
      return {
        ...state,
        loadingState: LOADING_STATES.NONE,
        error: action.error
      };

    // Unlink Connection cases
    case `${UNLINK_CONNECTION_URL}_SUBMIT`:
      return {
        ...state,
        loadingState: LOADING_STATES.UNLINKING_CONNECTION
      };
    case `${UNLINK_CONNECTION_URL}_SUCCEED`:
      return initialState;
    case `${UNLINK_CONNECTION_URL}_FAIL`:
      return {
        ...state,
        loadingState: LOADING_STATES.NONE,
        error: action.error
      };

    // Change Bank Step cases
    case `${CHANGE_BANK_STEP}`:
      const { payload: { step } } = action;
      if (typeof step !== "undefined") {
        return {
          ...state,
          step: Object.values(LINK_STEPS).includes(step)
            ? step
            : LINK_STEPS.INFO
        };
      } else {
        return initialState;
      }

    default:
      return state;
  }
}
