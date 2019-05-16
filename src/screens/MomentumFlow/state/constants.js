export const CHECK_ELIGIBILITY_URL = "/user/momentum-check-eligibility";
export const UPDATE_OFFER_STATUS_URL = "/user/momentum-update-offer-status";

export const CHANGE_MOMENTUM_STEP = "CHANGE_MOMENTUM_STEP";

export const MOMENTUM_STEPS = {
  CALGARY_OFFER: 0,
  PROGRAM_TOUR: 1,
  ELIGIBILITY_CHECK: 2,
  ELIGIBILITY_RESULT: 3
};

export const MOMENTUM_OFFER_STATUSES = {
  WAITING: "waiting",
  UNINTERESTED: "uninterested",
  INELIGIBLE: "ineligible",
  PASSED: "passed",
  DONE: "done"
};

export const LOADING_STATES = {
  NONE: "none",
  UPDATING_STATUS: "updating_status",
  CHECKING_ELIGIBILITY: "checking_eligibility"
};
