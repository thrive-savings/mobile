import { FETCH_ACCOUNTS_URL, SET_DEFAULT_URL, CHANGE_BANK_STEP } from "./constants";
const initialState = {
  data: {},
  defaultAccountData: {},
  step: undefined,
  isFetching: false,
  isSetting: false,
  error: false,
  errorMessage: ""
};

export default function integrateBankReducer (state = initialState, action) {
  switch (action.type) {
    // Fetch Accounts cases
    case `${FETCH_ACCOUNTS_URL}_SUBMIT`:
      return {
        ...initialState,
        defaultAccountData: {},
        isFetching: true
      };
    case `${FETCH_ACCOUNTS_URL}_SUCCEED`:
      const { payload: { data: fetchPayloadData } } = action;
      return {
        ...state,
        data: fetchPayloadData ? fetchPayloadData : {},
        isFetching: false
      };
    case `${FETCH_ACCOUNTS_URL}_FAIL`:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error
      };

    // Set Default cases
    case `${SET_DEFAULT_URL}_SUBMIT`:
      return {
        ...state,
        isSetting: true
      };
    case `${SET_DEFAULT_URL}_SUCCEED`:
      const { payload: { data: setDefaultPayloadData } } = action;
      return {
        ...state,
        defaultAccountData: setDefaultPayloadData ? setDefaultPayloadData : {},
        step: 2,
        isSetting: false,
        error: false,
        errorMessage: ""
      };
    case `${SET_DEFAULT_URL}_FAIL`:
      return {
        ...state,
        isSetting: false,
        error: true,
        errorMessage: action.error
      };

    // Change Bank Step cases
    case `${CHANGE_BANK_STEP}`:
      const { payload: { step } } = action;
      return {
        ...state,
        step
      };

    default:
      return state;
  }
}
