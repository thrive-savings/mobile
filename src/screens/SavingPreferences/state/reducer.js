import { CHANGE_STEP, SET_WORK_TYPE_URL, SET_SAVING_TYPE_URL, SET_SAVING_DETAILS_URL, PREFERENCES_INITIAL_SET_DONE, LOADING_STATES } from "./constants";
const initialState = {
  step: 0,
  loadingState: LOADING_STATES.NONE,
  error: false,
  errorMessage: ""
};

export default function savingPreferencesReducer(state = initialState, action) {
  switch (action.type) {
    case `${CHANGE_STEP}`:
      const { payload: { step } } = action;
      return {
        ...state,
        step
      };

    // Work Type cases
    case `${SET_WORK_TYPE_URL}_SUBMIT`:
      return {
        ...state,
        loadingState: LOADING_STATES.SETTING_WORK_TYPE
      };
    case `${SET_WORK_TYPE_URL}_SUCCEED`:
      return {
        ...state,
        step: 1,
        loadingState: LOADING_STATES.NONE,
        error: false,
        errorMessage: ""
      };
    case `${SET_WORK_TYPE_URL}_FAIL`:
      return {
        ...state,
        loadingState: LOADING_STATES.NONE,
        error: true,
        errorMessage: action.error
      };

    // Saving Type cases
    case `${SET_SAVING_TYPE_URL}_SUBMIT`:
      return {
        ...state,
        loadingState: LOADING_STATES.SETTING_SAVING_TYPE,
      };
    case `${SET_SAVING_TYPE_URL}_SUCCEED`:
      return {
        ...state,
        step: 2,
        loadingState: LOADING_STATES.NONE,
        error: false,
        errorMessage: ""
      };
    case `${SET_SAVING_TYPE_URL}_FAIL`:
      return {
        ...state,
        loadingState: LOADING_STATES.NONE,
        error: true,
        errorMessage: action.error
      };

    // Saving Details cases
    case `${SET_SAVING_DETAILS_URL}_SUBMIT`:
      return {
        ...state,
        loadingState: LOADING_STATES.SETTING_SAVING_DETAILS,
      };
    case `${SET_SAVING_DETAILS_URL}_SUCCEED`:
      return {
        ...state,
        step: 3,
        loadingState: LOADING_STATES.NONE,
        error: false,
        errorMessage: ""
      };
    case `${SET_SAVING_DETAILS_URL}_FAIL`:
      return {
        ...state,
        loadingState: LOADING_STATES.NONE,
        error: true,
        errorMessage: action.error
      };

    // Initial Set Done cases
    case `${PREFERENCES_INITIAL_SET_DONE}_SUBMIT`:
      return {
        ...state,
        loadingState: LOADING_STATES.SETTING_INITIAL_DONE,
      };
    case `${PREFERENCES_INITIAL_SET_DONE}_SUCCEED`:
      return {
        ...state,
        loadingState: LOADING_STATES.NONE,
        error: false,
        errorMessage: ""
      };
    case `${PREFERENCES_INITIAL_SET_DONE}_FAIL`:
      return {
        ...state,
        loadingState: LOADING_STATES.NONE,
        error: true,
        errorMessage: action.error
      };

    default:
      return state;
  }
}
