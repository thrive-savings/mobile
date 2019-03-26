import amplitude from "../../../globals/amplitude";
import {
  REQUEST_URL,
  GET_UPDATES,
  BONUS_NOTIFICATION_SEEN,
  SUBMIT_RATING,
  UPDATE_AUTH_DATA,
  UPDATE_CONNECTION_DATA,
  UPDATE_GOALS_DATA,
  UPDATE_NOTIFICATIONS_DATA,
  UPDATE_SAVING_PREFERENCES_DATA,
  UPDATE_AVATAR
} from "./constants";

const initialState = {
  data: {},
  avatar: undefined,
  isLoading: false,
  isSeeingBonus: false,
  error: false,
  errorMessage: ""
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    //Update Data case
    case UPDATE_AUTH_DATA:
      const { payload: { data: authData } } = action;
      amplitude.identify(authData.authorized.id.toString());
      return {
        ...state,
        data: authData
      };

    // Update Connections
    case UPDATE_CONNECTION_DATA:
      const {
        payload: {
          connection: newConnectionData,
          connections: allConnectionsData
        }
      } = action;
      const dataOnConnectionUpdate = state.data.authorized;

      if (allConnectionsData) {
        return {
          ...state,
          data: {
            authorized: {
              ...dataOnConnectionUpdate,
              connections: allConnectionsData,
              bankLinked: true
            }
          }
        };
      }

      let connections = dataOnConnectionUpdate.connections;

      let isNew = true;
      let index;
      connections.forEach(({ id }, i) => {
        if (id === newConnectionData.id) {
          isNew = false;
          index = i;
          return;
        }
      });

      if (isNew) {
        connections.push(newConnectionData);
      } else {
        if (newConnectionData.deleted) {
          connections.splice(index, 1);
        } else {
          connections[index] = newConnectionData;
        }
      }

      return {
        ...state,
        data: {
          authorized: {
            ...dataOnConnectionUpdate,
            connections,
            bankLinked: true
          }
        }
      };

    // Update Goals case
    case `${UPDATE_GOALS_DATA}`:
      const { payload: { data: { goals } } } = action;
      const dataOnGoalsUpdate = state.data.authorized;
      return {
        ...state,
        data: {
          authorized: {
            ...dataOnGoalsUpdate,
            goals
          }
        }
      };

    // Update Notifications case
    case `${UPDATE_NOTIFICATIONS_DATA}`:
      const { payload: { type: notificationType } } = action;
      const dataOnNotificationsUpdate = state.data.authorized;
      const notifications = dataOnNotificationsUpdate.notifications;
      if (notificationType === "savingPreferences") {
        notifications.savingPreferencesSet = true;
      }
      return {
        ...state,
        data: {
          authorized: {
            ...dataOnNotificationsUpdate,
            notifications
          }
        }
      };

    // Update Saving Preferences case
    case `${UPDATE_SAVING_PREFERENCES_DATA}`:
      const { payload: { data: { savingPreferences } } } = action;
      const dataOnSavingPreferencesUpdate = state.data.authorized;
      return {
        ...state,
        data: {
          authorized: {
            ...dataOnSavingPreferencesUpdate,
            savingPreferences
          }
        }
      };

    // Update Avatar case
    case `${UPDATE_AVATAR}`:
      const { payload: { avatar: newAvatar } } = action;
      return {
        ...state,
        avatar: newAvatar
      };

    //Log In cases
    case `${REQUEST_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true
      };
    case `${REQUEST_URL}_SUCCEED`:
      const { payload: { data, avatar } } = action;
      amplitude.identify(data.authorized.id.toString());
      return {
        ...state,
        data,
        avatar,
        isLoading: false,
        error: false,
        errorMessage: ""
      };
    case `${REQUEST_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
      };

    //Get Updates cases
    case `${GET_UPDATES}_SUBMIT`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_UPDATES}_SUCCEED`:
      const { payload: { data: getUpdatesData } } = action;
      amplitude.identify(getUpdatesData.authorized.id.toString());
      return {
        ...state,
        data: getUpdatesData,
        isLoading: false,
        error: false,
        errorMessage: ""
      };
    case `${GET_UPDATES}_FAIL`:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
      };

    //Bonus Notification Seen cases
    case `${BONUS_NOTIFICATION_SEEN}_SUBMIT`:
      return {
        ...state,
        isSeeingBonus: true
      };
    case `${BONUS_NOTIFICATION_SEEN}_SUCCEED`:
      const { payload: { data: bonusNotificationSeenData } } = action;
      return {
        ...state,
        data: bonusNotificationSeenData,
        isSeeingBonus: false,
        error: false,
        errorMessage: ""
      };
    case `${BONUS_NOTIFICATION_SEEN}_FAIL`:
      return {
        ...state,
        isSeeingBonus: false,
        error: true,
        errorMessage: action.error
      };

    // Give Rating cases
    case `${SUBMIT_RATING}_SUCCEED`:
      const { payload: { data: submitRatingData } } = action;
      return {
        ...state,
        data: submitRatingData,
        isLoading: false,
        error: false,
        errorMessage: ""
      };
    case `${SUBMIT_RATING}_FAIL`:
      const dataOnSubmitRatingFail = state.data.authorized;
      dataOnSubmitRatingFail.promptRating = false;
      return {
        ...state,
        data: { authorized: dataOnSubmitRatingFail }
      };

    default:
      return state;
  }
}
