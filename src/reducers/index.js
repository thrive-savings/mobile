import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "../screens/Login/state/reducer";
import signUpReducer from "../screens/SignUp/state/reducer";
import homeReducer from "../screens/Home/state/reducer";

export default combineReducers({
  form: formReducer,
  authReducer,
  signUpReducer,
  homeReducer
});
