import { REQUEST_URL, GET_UPDATES, BONUS_NOTIFICATION_SEEN, UPDATE_AUTH_DATA, UPDATE_ACCOUNT_DATA, UPDATE_GOALS_DATA, UPDATE_AVATAR } from "./constants";

export const authUser = (payload) => ({ payload, type: `${REQUEST_URL}_SUBMIT` });
export const updateAuthData = (payload) => ({ payload, type: `${UPDATE_AUTH_DATA}` });
export const updateAccountData = (payload) => ({ payload, type: `${UPDATE_ACCOUNT_DATA}` });
export const updateGoalsData = (payload) => ({ payload, type: `${UPDATE_GOALS_DATA}` });
export const updateAvatar = (payload) => ({ payload, type: `${UPDATE_AVATAR}` });

export const getUpdates = () => ({ type: `${GET_UPDATES}_SUBMIT` });
export const bonusNotificationSeen = () => ({ type: `${BONUS_NOTIFICATION_SEEN}_SUBMIT` });
