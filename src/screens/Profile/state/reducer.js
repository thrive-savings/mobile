import { UPLOAD_PHOTO_URL } from "./constants";
const initialState = {
  data: {},
  uploadedAvatar: undefined,
  isLoading: false,
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
        isLoading: true
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

    default:
      return state;
  }
}
