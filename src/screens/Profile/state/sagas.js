import { AsyncStorage } from "react-native";
import { UPLOAD_PHOTO_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateAuthData, updateAvatar } from "../../Login/state/actions";


const uploadPhotoSaga = function * () {
  yield takeEvery(`${UPLOAD_PHOTO_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${UPLOAD_PHOTO_URL}`, { data: payload }));
  });
};

const uploadPhotoSucceedSaga = function * () {
  yield takeEvery(`${UPLOAD_PHOTO_URL}_SUCCEED`, function * ({ payload: { avatar } }) {
    console.log("Received the new avatar");
    //AsyncStorage.removeItem("persist:authReducer.avatar");
    //yield put(updateAvatar(avatar));
  });
};

export { uploadPhotoSaga, uploadPhotoSucceedSaga };
