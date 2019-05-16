import {
  CHECK_ELIGIBILITY_URL,
  UPDATE_OFFER_STATUS_URL,
  CHANGE_MOMENTUM_STEP,
  MOMENTUM_STEPS,
  LOADING_STATES
} from "./constants";

const initialState = {
  step: MOMENTUM_STEPS.CALGARY_OFFER,
  loadingState: LOADING_STATES.NONE,
  error: undefined
};

export default function momentumFlowReducer(state = initialState, action) {
  switch (action.type) {
    // Check Eligibility cases
    case `${CHECK_ELIGIBILITY_URL}_SUBMIT`:
      return {
        ...initialState,
        loadingState: LOADING_STATES.CHECKING_ELIGIBILITY
      };
    case `${CHECK_ELIGIBILITY_URL}_SUCCEED`:
      return {
        ...initialState,
        step: MOMENTUM_STEPS.ELIGIBILITY_RESULT
      };
    case `${CHECK_ELIGIBILITY_URL}_FAIL`:
      return {
        ...initialState,
        error: action.error
      };

    // Updte Offer Status cases
    case `${UPDATE_OFFER_STATUS_URL}_SUBMIT`:
      return {
        ...initialState,
        loadingState: LOADING_STATES.UPDATING_STATUS
      };
    case `${UPDATE_OFFER_STATUS_URL}_SUCCEED`:
      return initialState;
    case `${UPDATE_OFFER_STATUS_URL}_FAIL`:
      return {
        ...initialState,
        error: action.error
      };

    // Change flow step
    case CHANGE_MOMENTUM_STEP:
      const { payload: { step } } = action;
      if (
        typeof step !== "undefined" &&
        Object.values(MOMENTUM_STEPS).includes(step)
      ) {
        return {
          ...initialState,
          step
        };
      } else {
        return initialState;
      }
    default:
      return state;
  }
}
