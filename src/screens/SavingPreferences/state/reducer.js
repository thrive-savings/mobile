import { CHANGE_STEP, SET_WORK_TYPE_URL, SET_SAVING_TYPE_URL, SET_SAVING_DETAILS_URL, PREFERENCES_INITIAL_SET_DONE } from "./constants";
const initialState = {
  data: {},
  values: {
    workType: "",
    savingType: "",
    fixedContribution: 0,
    frequency: ""
  },
  isLoading: false,
  isSettingWorkType: false,
  isSettingSavingType: false,
  isSettingSavingDetails: false,
  isSettingDone: false,
  initialSetDone: false,
  error: false,
  errorMessage: "",
  step: 0
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
        isLoading: true,
        isSettingWorkType: true
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
        isLoading: false,
        isSettingWorkType: false,
        step: 1,
        error: false,
        errorMessage: ""
      };
    case `${SET_WORK_TYPE_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        isSettingWorkType: false,
        error: true,
        errorMessage: action.error
      };

    // Saving Type cases
    case `${SET_SAVING_TYPE_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true,
        isSettingSavingType: true
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
        isLoading: false,
        isSettingSavingType: false,
        step: 2,
        error: false,
        errorMessage: ""
      };
    case `${SET_SAVING_TYPE_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        isSettingSavingType: false,
        error: true,
        errorMessage: action.error
      };

    // Saving Details cases
    case `${SET_SAVING_DETAILS_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true,
        isSettingSavingDetails: false,
      };
    case `${SET_SAVING_DETAILS_URL}_SUCCEED`:
      const { payload: { data: setSavingDetailsData } } = action;
      return {
        ...state,
        data: setSavingDetailsData,
        values: {
          ...values,
          fixedContribution: setSavingDetailsData.fixedContribution,
          frequency: setSavingDetailsData.frequency
        },
        isLoading: false,
        isSettingSavingDetails: false,
        step: 3,
        error: false,
        errorMessage: ""
      };
    case `${SET_SAVING_DETAILS_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        isSettingSavingDetails: false,
        error: true,
        errorMessage: action.error
      };

    // Initial Set Done cases
    case `${PREFERENCES_INITIAL_SET_DONE}_SUBMIT`:
      return {
        ...state,
        isLoading: true,
        isSettingDone: true
      };
    case `${PREFERENCES_INITIAL_SET_DONE}_SUCCEED`:
      return {
        ...state,
        isLoading: false,
        isSettingDone: false,
        initialSetDone: true,
        error: false,
        errorMessage: ""
      };
    case `${PREFERENCES_INITIAL_SET_DONE}_FAIL`:
      return {
        ...state,
        isLoading: false,
        isSettingDone: false,
        error: true,
        errorMessage: action.error
      };

    default:
      return state;
  }
}
