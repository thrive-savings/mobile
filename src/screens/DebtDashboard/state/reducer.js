import { FETCH_DEBTS_URL, LOADING_STATES } from "./constants";

const initialState = {
  debts: [],
  loadingState: LOADING_STATES.NONE,
  error: undefined
};

export default function debtReducer(state = initialState, action) {
  switch (action.type) {
    // Unlink Connection cases
    case `${FETCH_DEBTS_URL}_SUBMIT`:
      return {
        ...state,
        loadingState: LOADING_STATES.FETCHING_DEBTS
      };
    case `${FETCH_DEBTS_URL}_SUCCEED`:
      return {
        ...initialState,
        debts: action.payload.debts
      };
    case `${FETCH_DEBTS_URL}_FAIL`:
      return {
        ...state,
        loadingState: LOADING_STATES.NONE,
        error: action.error
      };

    default:
      return state;
  }
}
