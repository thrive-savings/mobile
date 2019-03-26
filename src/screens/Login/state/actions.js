import {
  REQUEST_URL,
  GET_UPDATES,
  SET_EXPO_TOKEN,
  BONUS_NOTIFICATION_SEEN,
  SUBMIT_RATING,
  UPDATE_AUTH_DATA,
  UPDATE_CONNECTION_DATA,
  UPDATE_GOALS_DATA,
  UPDATE_NOTIFICATIONS_DATA,
  UPDATE_SAVING_PREFERENCES_DATA,
  UPDATE_AVATAR
} from "./constants";

export const authUser = payload => ({ payload, type: `${REQUEST_URL}_SUBMIT` });
export const updateAuthData = payload => ({
  payload,
  type: UPDATE_AUTH_DATA
});
export const updateConnectionsData = payload => ({
  payload,
  type: UPDATE_CONNECTION_DATA
});
export const updateGoalsData = payload => ({
  payload,
  type: UPDATE_GOALS_DATA
});
export const updateNotificationsData = payload => ({
  payload,
  type: UPDATE_NOTIFICATIONS_DATA
});
export const updateSavingPreferencesData = payload => ({
  payload,
  type: UPDATE_SAVING_PREFERENCES_DATA
});
export const updateAvatar = payload => ({ payload, type: UPDATE_AVATAR });

export const getUpdates = () => ({ type: `${GET_UPDATES}_SUBMIT` });
export const bonusNotificationSeen = () => ({
  type: `${BONUS_NOTIFICATION_SEEN}_SUBMIT`
});
export const setExpoToken = () => ({
  type: `${SET_EXPO_TOKEN}_SUBMIT`
});
export const submitRating = payload => ({
  payload,
  type: `${SUBMIT_RATING}_SUBMIT`
});
