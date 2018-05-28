import { UPLOAD_PHOTO_URL, DELETE_PHOTO_URL, SET_PHONE_URL, SET_EMAIL_URL, SET_PASSWORD_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateAuthData } from "../../Login/state/actions";


const uploadPhotoSaga = function * () {
  yield takeEvery(`${UPLOAD_PHOTO_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${UPLOAD_PHOTO_URL}`, { data: payload }));
  });
};

const deletePhotoSaga = function * () {
  yield takeEvery(`${DELETE_PHOTO_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${DELETE_PHOTO_URL}`, { data: payload }));
  });
};

const setPhoneSaga = function * () {
  yield takeEvery(`${SET_PHONE_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${SET_PHONE_URL}`, { data: payload }, { form: "setPhone" }));
  });
};

const setPhoneSucceedSaga = function * () {
  yield takeEvery(`${SET_PHONE_URL}_SUCCEED`, function * ({ payload }) {
    yield put(updateAuthData(payload));
  });
};

const setEmailSaga = function * () {
  yield takeEvery(`${SET_EMAIL_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${SET_EMAIL_URL}`, { data: payload }, { form: "setEmail" }));
  });
};

const setEmailSucceedSaga = function * () {
  yield takeEvery(`${SET_EMAIL_URL}_SUCCEED`, function * ({ payload }) {
    yield put(updateAuthData(payload));
  });
};

const setPasswordSaga = function * () {
  yield takeEvery(`${SET_PASSWORD_URL}_SUBMIT`, function * ({ payload }) {
    yield put(requestApi(`${SET_PASSWORD_URL}`, { data: payload }, { form: "setPassword" }));
  });
};

const setPasswordSucceedSaga = function * () {
  yield takeEvery(`${SET_PASSWORD_URL}_SUCCEED`, function * ({ payload }) {
    yield put(updateAuthData(payload));
  });
};

export { uploadPhotoSaga, deletePhotoSaga, setPhoneSaga, setPhoneSucceedSaga, setEmailSaga, setEmailSucceedSaga, setPasswordSaga, setPasswordSucceedSaga };
