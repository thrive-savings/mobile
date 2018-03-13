import { FETCH_HOME_DATA } from "./constants";

const initialState = {
  isLoading: true,
  hasErrored: false,
  items: []
};
export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case `${FETCH_HOME_DATA}_FAIL`:
      return { ...state, hasErrored: action.hasErrored };
    case `${FETCH_HOME_DATA}_SUCCEED`:
      return { ...state, items: action.items, isLoading: false };
    default:
      return state;
  }
}
