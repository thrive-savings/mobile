import { AsyncStorage } from "react-native";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { reducer as formReducer } from "redux-form";

import authReducer from "../screens/Login/state/reducer";
import signUpReducer from "../screens/SignUp/state/reducer";
import setPhoneReducer from "../screens/SetPhone/state/reducer";
import forgotPasswordReducer from "../screens/ForgotPassword/state/reducer";
import integrateBankReducer from "../screens/IntegrateBank/state/reducer";
import savingPreferencesReducer from "../screens/SavingPreferences/state/reducer";
import profileReducer from "../screens/Profile/state/reducer";
import goalsReducer from "../screens/SavingGoals/state/reducer";
import savingHistoryReducer from "../screens/SavingHistory/state/reducer";

import { CLEAR_STORAGE } from "../globals/clearStorage";

const appReducer = combineReducers({
  form: formReducer,
  authReducer,
  signUpReducer,
  setPhoneReducer,
  forgotPasswordReducer,
  integrateBankReducer,
  savingPreferencesReducer,
  profileReducer,
  goalsReducer,
  savingHistoryReducer
});

const rootReducer = (state, action) => {
  if (action.type === `${CLEAR_STORAGE}`) {
    Object.keys(state).forEach(key => {
      AsyncStorage.removeItem(`persist:${key}`);
    });
    state = undefined;
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["form"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
