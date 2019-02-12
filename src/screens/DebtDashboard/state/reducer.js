import { FETCH_DEBTS_URL, SAVE_DEBT_DETAILS_URL, LOADING_STATES } from "./constants";

const initialState = {
  debts: [],
  loadingState: LOADING_STATES.NONE,
  error: undefined
};

export default function debtReducer(state = initialState, action) {
  switch (action.type) {
    // Fetch Debts cases
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

    // Save Debt Details cases
    case `${SAVE_DEBT_DETAILS_URL}_SUBMIT`:
      return {
        ...state,
        loadingState: LOADING_STATES.SAVING_DEBT_DETAILS
      };
    case `${SAVE_DEBT_DETAILS_URL}_SUCCEED`:
      let newDebts = state.debts;

      const updatedDebt = action.payload.debt;
      let index;
      newDebts.forEach(({ id }, i) => {
        if (id === updatedDebt.id) {
          index = i;
          return;
        }
      });
      newDebts[index] = updatedDebt;

      return {
        ...state,
        debts: newDebts
      };
    case `${SAVE_DEBT_DETAILS_URL}_FAIL`:
      return {
        ...state,
        loadingState: LOADING_STATES.NONE,
        error: action.error
      };

    default:
      return state;
  }
}
