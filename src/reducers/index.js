import { AsyncStorage } from "react-native";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "../screens/Login/state/reducer";
import signUpReducer from "../screens/SignUp/state/reducer";
import verifyCodeReducer from "../screens/VerifyCode/state/reducer";
import homeReducer from "../screens/Home/state/reducer";

import { CLEAR_STORAGE } from "../globals/clearStorage";

const appReducer = combineReducers({
  form: formReducer,
  authReducer,
  signUpReducer,
  verifyCodeReducer,
  homeReducer
});

export default (state, action) => {
  if(action.type === `${CLEAR_STORAGE}`) {
    Object.keys(state).forEach(key => {
        AsyncStorage.removeItem(`persist:${key}`);
    });
    state = undefined;
  }
  return appReducer(state, action);
}
