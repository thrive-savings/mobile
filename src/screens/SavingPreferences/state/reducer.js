import { CHANGE_STEP, SET_WORK_TYPE_URL, SET_SAVING_TYPE_URL, SET_SAVING_DETAILS_URL } from "./constants";
const initialState = {
  data: {},
  values: {
    workType: "",
    savingType: "",
    fixedContribution: 0,
    frequency: ""
  },
  isLoading: false,
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
        isLoading: true
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
        step: 1,
        error: false,
        errorMessage: ""
      };
    case `${SET_WORK_TYPE_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
      };

    // Saving Type cases
    case `${SET_SAVING_TYPE_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true
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
        step: 2,
        error: false,
        errorMessage: ""
      };
    case `${SET_SAVING_TYPE_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
      };

    // Saving Details cases
    case `${SET_SAVING_DETAILS_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true
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
        step: 3,
        error: false,
        errorMessage: ""
      };
    case `${SET_SAVING_DETAILS_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
      };

    default:
      return state;
  }
}
