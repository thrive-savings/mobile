import { FETCH_ACCOUNTS_URL, SET_DEFAULT_URL } from "./constants";
const initialState = {
  data: {},
  isFetching: false,
  isSetting: false,
  error: false,
  errorMessage: ""
};

export default function integrateBankReducer (state = initialState, action) {
  switch (action.type) {
    case `${FETCH_ACCOUNTS_URL}_SUBMIT`:
      return {
        ...state,
        isFetching: true,
      };
    case `${FETCH_ACCOUNTS_URL}_SUCCEED`:
      console.log("Fetch Accounts Succeeded!");
      const { payload: { data: verifyPayloadData } } = action;
      return {
        ...state,
        data: verifyPayloadData ? verifyPayloadData : {},
        isFetching: false,
        error: false,
        errorMessage: ""
      };
    case `${FETCH_ACCOUNTS_URL}_FAIL`:
      console.log("Fetch Accounts Failed!");
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error
      };
      case `${SET_DEFAULT_URL}_SUBMIT`:
        return {
          ...state,
          isSetting: true
        };
      case `${SET_DEFAULT_URL}_SUCCEED`:
        console.log("Default Account Set Succeeded!");
        const { payload: { data: resendPayloadData } } = action;
        return {
          ...state,
          data: resendPayloadData ? resendPayloadData : {},
          isSetting: false,
          error: false,
          errorMessage: ""
        };
      case `${SET_DEFAULT_URL}_FAIL`:
        console.log("Default Account Set Failed!");
        return {
          ...state,
          isSetting: false,
          error: true,
          errorMessage: action.error
        };
    default:
      return state;
  }
}
