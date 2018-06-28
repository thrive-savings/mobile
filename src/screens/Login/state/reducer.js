import amplitude from "../../../globals/amplitude";
import { REQUEST_URL, GET_UPDATES, BONUS_NOTIFICATION_SEEN, UPDATE_AUTH_DATA, UPDATE_ACCOUNT_DATA, UPDATE_GOALS_DATA, UPDATE_AVATAR } from "./constants";
const initialState = {
  data: {},
  avatar: undefined,
  isLoading: false,
  isSeeingBonus: false,
  error: false,
  errorMessage: ""
};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    //Update Data case
    case `${UPDATE_AUTH_DATA}`:
      const { payload: { data: authData } } = action;
      return {
        ...state,
        data: authData
      };

    // Update Account case
    case `${UPDATE_ACCOUNT_DATA}`:
      const { payload: { authorized: { account } } } = action;
      const dataOnAccountUpdate = state.data.authorized;
      return {
        ...state,
        data: {
          authorized: {
            ...dataOnAccountUpdate,
            account,
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

    //Update Avatar case
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
      amplitude.track(amplitude.events.LOGIN_SUCCESS, {
        userId: data.authorized.email,
        userProperties: data.authorized
      })      
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
    default:
      return state;
  }
}
