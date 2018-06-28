import { Amplitude } from "expo";
import { AmplitudeApiKey } from "../../config";

const events = {
  VIEW_LOGIN_SCREEN: "VIEW_LOGIN_SCREEN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  SIGNUP: "SIGNUP",
  RESET_PASSWORD: "RESET_PASSWORD",
  LINKED_BANK: "LINKED_BANK"
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

export default {
  events,
  track,
  identify,
};
