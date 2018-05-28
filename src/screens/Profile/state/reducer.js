import { UPLOAD_PHOTO_URL, DELETE_PHOTO_URL, SET_PHONE_URL, SET_EMAIL_URL, SET_PASSWORD_URL } from "./constants";
const initialState = {
  data: {},
  uploadedAvatar: undefined,
  deletedAvatar: false,
  isLoading: false,
  isSettingPhone: false,
  isSettingEmail: false,
  isSettingPassword: false,
  error: false,
  errorMessage: "",
  step: 0
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    // Upload Photo cases
    case `${UPLOAD_PHOTO_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true,
        deletedAvatar: false
      };
    case `${UPLOAD_PHOTO_URL}_SUCCEED`:
      const { payload: { avatar: newAvatar } } = action;
      return {
        ...state,
        uploadedAvatar: newAvatar,
        isLoading: false,
        step: 1,
        error: false,
        errorMessage: ""
      };
    case `${UPLOAD_PHOTO_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
      };

    // Delete Photo cases
    case `${DELETE_PHOTO_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true
      };
    case `${DELETE_PHOTO_URL}_SUCCEED`:
      return {
        ...state,
        uploadedAvatar: undefined,
        deletedAvatar: true,
        isLoading: false,
        step: 1,
        error: false,
        errorMessage: ""
      };
    case `${DELETE_PHOTO_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        deletedAvatar: false,
        error: true,
        errorMessage: action.error
      };

    // Set Phone cases
    case `${SET_PHONE_URL}_SUBMIT`:
      return {
        ...state,
        isSettingPhone: true
      };
    case `${SET_PHONE_URL}_SUCCEED`:
      const { payload: { data: setPhoneData } } = action;
      return {
        ...state,
        data: setPhoneData,
        isSettingPhone: false,
        step: 1,
        error: false,
        errorMessage: ""
      };
    case `${SET_PHONE_URL}_FAIL`:
      return {
        ...state,
        isSettingPhone: false,
        error: true,
        errorMessage: action.error
      };

    // Set Email cases
    case `${SET_EMAIL_URL}_SUBMIT`:
      return {
        ...state,
        isSettingEmail: true
      };
    case `${SET_EMAIL_URL}_SUCCEED`:
      const { payload: { data: setEmailData } } = action;
      return {
        ...state,
        data: setEmailData,
        isSettingEmail: false,
        step: 1,
        error: false,
        errorMessage: ""
      };
    case `${SET_EMAIL_URL}_FAIL`:
      return {
        ...state,
        isSettingEmail: false,
        error: true,
        errorMessage: action.error
      };

    // Set Password cases
    case `${SET_PASSWORD_URL}_SUBMIT`:
      return {
        ...state,
        isSettingPassword: true
      };
    case `${SET_PASSWORD_URL}_SUCCEED`:
      const { payload: { data: setPasswordData } } = action;
      return {
        ...state,
        data: setPasswordData,
        isSettingPassword: false,
        step: 1,
        error: false,
        errorMessage: ""
      };
    case `${SET_PASSWORD_URL}_FAIL`:
      return {
        ...state,
        isSettingPassword: false,
        error: true,
        errorMessage: action.error
      };

    default:
      return state;
  }
}
