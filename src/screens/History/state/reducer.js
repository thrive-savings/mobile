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
      const {
        payload: {
          data: {
            chart: newChart,
            history: newHistory,
            totalSavings: newTotalSavings
          }
        }
      } = action;

      const { data: { chart, history, totalSavings } } = state;
      return {
        ...state,
        data: {
          chart: chart.concat(newChart),
          history: totalSavings ? newHistory.concat(history) : newHistory,
          totalSavings: totalSavings + newTotalSavings
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
