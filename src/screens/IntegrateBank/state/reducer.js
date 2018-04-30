import { FETCH_ACCOUNTS_URL, SET_DEFAULT_URL } from "./constants";
const initialState = {
  data: {},
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
          data: setDefaultPayloadData ? setDefaultPayloadData : {},
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
    default:
      return state;
  }
}
