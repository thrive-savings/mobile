import {
  CHECK_ELIGIBILITY_URL,
  UPDATE_OFFER_STATUS_URL,
  CHANGE_MOMENTUM_STEP
} from "./constants";

export const checkEligibility = payload => ({
  payload,
  type: `${CHECK_ELIGIBILITY_URL}_SUBMIT`
});

export const updateOfferStatus = payload => ({
  payload,
  type: `${UPDATE_OFFER_STATUS_URL}_SUBMIT`
});

export const changeMomentumStep = payload => ({
  payload,
  type: CHANGE_MOMENTUM_STEP
});
