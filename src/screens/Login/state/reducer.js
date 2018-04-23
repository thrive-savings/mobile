import { REQUEST_URL, UPDATE_AUTH_DATA, UPDATE_AVATAR } from "./constants";
const initialState = {
  data: {},
  avatar: undefined,
  isLoading: false,
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

    //Update Avatar case
    case `${UPDATE_AVATAR}`:
      console.log("Reducing UPDATE_AVATAR action");
      const { payload: { avatar: newAvatar } } = action;
      if (state.avatar === newAvatar) {
        console.log("Received the same avatar");
      }
      return {
        ...state,
        avatar: newAvatar
      };

    //Server call cases
    case `${REQUEST_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true
      };
    case `${REQUEST_URL}_SUCCEED`:
      const { payload: { data, avatar } } = action;
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
    default:
      return state;
  }
}
