import { Amplitude } from "expo";
import { AmplitudeApiKey } from "../../config";

const events = {
  // App State
  APP_ACTIVE: "APP_ACTIVE",
  APP_INACTIVE: "APP_INACTIVE",
  APP_IN_BACKGROUND: "APP_IN_BACKGROUND",

  // Server Error
  SERVER_ERROR: "SERVER_ERROR",

  // Login
  LOGIN_VIEW: "LOGIN_VIEW",
  LOGOUT: "LOGOUT",

  // Product Tour
  PRODUCT_TOUR_STEP_VIEW: step => `PRODUCT_TOUR_STEP_${step}_VIEW`,

  // Momentum Tour
  MOMENTUM_TOUR_STEP_VIEW: step => `MOMENTUM_TOUR_STEP_${step}_VIEW`,

  // Sign Up
  CHOOSE_SIGN_UP_TYPE_VIEW: "CHOOSE_SIGN_UP_TYPE_VIEW",
  CLICKED_JOIN_THRIVE_PERSONAL: "CLICKED_JOIN_THRIVE_PERSONAL",
  CLICKED_JOIN_THRIVE_AT_WORK: "CLICKED_JOIN_THRIVE_AT_WORK",
  EMPLOYER_CODE_VIEW: "EMPLOYER_CODE_VIEW",
  EMPLOYER_CODE_VERIFIED: "EMPLOYER_CODE_VERIFIED",
  PERSONAL_DETAILS_VIEW: "PERSONAL_DETAILS_VIEW",
  PRICING_VIEW: "PRICING_VIEW",

  // Set Phone
  SET_PHONE_VIEW: "SET_PHONE_VIEW",

  // Bank Linking
  WHY_LINK_VIEW: "WHY_LINK_VIEW",
  AUTH_BANK_VIEW: "AUTH_BANK_VIEW",
  CHOOSE_DEFAULT_ACCOUNT_VIEW: "CHOOSE_DEFAULT_ACCOUNT_VIEW",

  // Bank Connections
  BANK_CONNECTIONS_VIEW: "BANK_CONNECTIONS_VIEW",

  // Saving Dashboard
  CLICKED_SAVE_MORE: "CLICKED_SAVE_MORE",

  // Saving Preferences
  SAVING_PREFERENCES_NOTIFICATION_CLICKED:
    "SAVING_PREFERENCES_NOTIFICATION_CLICKED",
  WORK_TYPE_VIEW: "WORK_TYPE_VIEW",
  SAVING_TYPE_VIEW: "SAVING_TYPE_VIEW",
  SAVING_DETAILS_VIEW: "SAVING_DETAILS_VIEW",

  // Saving History
  SAVING_HISTORY_VIEW: "SAVING_HISTORY_VIEW",

  // Goals
  CHOOSE_GOAL_CATEGORY_VIEW: "CHOOSE_GOAL_CATEGORY_VIEW",
  GOAL_DETAIL_VIEW: "GOAL_DETAIL_VIEW",
  EDIT_GOAL_VIEW: "EDIT_GOAL_VIEW",

  // Referral
  REFERRAL_PAGE_VIEW: "REFERRAL_PAGE_VIEW",
  REFERRAL_CODE_SHARED: "REFERRAL_CODE_SHARED",
  REFERRAL_CODE_SHARE_FAILED: "REFERRAL_CODE_SHARE_FAILED",
  REFERRAL_CODE_COPIED: "REFERRAL_CODE_COPIED",
  REFERRAL_CODE_COPY_FAILED: "REFERRAL_CODE_COPY_FAILED",

  // Contact
  CLICKED_TALK_TO_BOT: "CLICKED_TALK_TO_BOT",
  CLICKED_CALL_SUPPORT: "CLICKED_CALL_SUPPORT",
  CLICKED_EMAIL_SUPPORT: "CLICKED_EMAIL_SUPPORT",

  // FAQ
  FAQ_VIEW: "FAQ_VIEW",
  FAQ_CATEGORY_VIEW: "FAQ_CATEGORY_VIEW",

  // PP - TOS
  TOS_VIEW: "TOS_VIEW",
  PP_VIEW: "PP_VIEW"
};

let isInitialized = false;
const initialize = () => {
  if (!AmplitudeApiKey) {
    return;
  }

  Amplitude.initialize(AmplitudeApiKey);
  isInitialized = true;
};

const maybeInitialize = () => {
  if (!isInitialized) {
    initialize();
  }
};

const identify = (id, options) => {
  maybeInitialize();

  if (id) {
    Amplitude.setUserId(id);
    if (options) {
      Amplitude.setUserProperties(options);
    }
  } else {
    Amplitude.clearUserProperties();
  }
};

const track = (event, options) => {
  maybeInitialize();

  if (options) {
    Amplitude.logEventWithProperties(event, options);
  } else {
    Amplitude.logEvent(event);
  }
};

export default { events, track, identify };
