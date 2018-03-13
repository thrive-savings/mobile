import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "../screens/Login/reducer";
import homeReducer from "../screens/Home/reducer";

export default combineReducers({
  form: formReducer,
  authReducer,
  homeReducer
});
