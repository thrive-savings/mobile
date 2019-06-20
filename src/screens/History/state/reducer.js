import { FETCH_HISTORY_URL } from "./constants";
const initialState = {
  data: { chart: [], history: [], totalSavings: 0 },
  isFetching: false,
  error: false,
  errorMessage: ""
};

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    //Save Phone cases
    case `${FETCH_HISTORY_URL}_SUBMIT`:
      return {
        ...state,
        isFetching: true
      };
    case `${FETCH_HISTORY_URL}_SUCCEED`:
      const { payload: { data: { history, totalSavings } } } = action;
      return {
        ...state,
        data: {
          history,
          totalSavings
        },
        isFetching: false,
        error: false,
        errorMessage: ""
      };
    case `${FETCH_HISTORY_URL}_FAIL`:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error
      };

    default:
      return state;
  }
}
