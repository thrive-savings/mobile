import { FETCH_HISTORY_URL } from "./constants";
const initialState = {
  data: { chart: [], history: [] },
  isFetching: false,
  error: false,
  errorMessage: ""
};

export default function savingHistoryReducer(state = initialState, action) {
  switch (action.type) {
    //Save Phone cases
    case `${FETCH_HISTORY_URL}_SUBMIT`:
      return {
        ...state,
        isFetching: true
      };
    case `${FETCH_HISTORY_URL}_SUCCEED`:
      const {
        payload: { data: { chart: newChart, history: newHistory } }
      } = action;
      console.log(newHistory);

      const { data: { chart, history } } = state;
      return {
        ...state,
        data: {
          chart: chart.concat(newChart),
          history: history.concat(newHistory)
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
