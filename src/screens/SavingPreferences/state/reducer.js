import { CHANGE_STEP, SET_WORK_TYPE_URL, SET_SAVING_TYPE_URL, SET_SAVING_DETAILS_URL, PREFERENCES_INITIAL_SET_DONE, LOADING_STATES } from "./constants";
const initialState = {
  data: {},
  values: {
    workType: "",
    savingType: "",
    fixedContribution: 0,
    frequency: ""
  },

  step: 0,
  loadingState: LOADING_STATES.NONE,
  error: false,
  errorMessage: ""
};

export default function savingPreferencesReducer(state = initialState, action) {
  const values = state.values;
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
      const { payload: { data: setWorkTypeData } } = action;
      return {
        ...state,
        data: setWorkTypeData,
        values: {
          ...values,
          workType: setWorkTypeData.workType
        },
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
      const { payload: { data: setSavingTypeData } } = action;
      return {
        ...state,
        data: setSavingTypeData,
        values: {
          ...values,
          savingType: setSavingTypeData.savingType
        },
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
      const { payload: { data: setSavingDetailsData } } = action;
      return {
        ...state,
        data: setSavingDetailsData,
        values: {
          ...values,
          nextSaveDate: setSavingDetailsData.nextSaveDate,
          fixedContribution: setSavingDetailsData.fixedContribution,
          frequency: setSavingDetailsData.frequency
        },
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
