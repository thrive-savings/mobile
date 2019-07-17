import { SUBMIT_DOCUMENT_DATA_URL } from "./constants";
const initialState = {
  data: {},
  isLoading: false,
  error: undefined
};

export default function verifyCodeReducer(state = initialState, action) {
  switch (action.type) {
    // Submit Document Data cases
    case `${SUBMIT_DOCUMENT_DATA_URL}_SUBMIT`:
      return {
        ...state,
        isLoading: true
      };
    case `${SUBMIT_DOCUMENT_DATA_URL}_SUCCEED`:
      const { payload: { data } } = action;
      return {
        ...state,
        data,
        isLoading: false,
        error: undefined
      };
    case `${SUBMIT_DOCUMENT_DATA_URL}_FAIL`:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
}
