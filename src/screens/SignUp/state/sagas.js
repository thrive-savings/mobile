import {
  SIGN_UP_URL,
  VERIFY_EMPLOYER_CODE_URL,
  ACCEPT_PERSONAL
} from "./constants";
import { put, takeEvery, select } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateAuthData } from "../../Login/state/actions";

const signUpSaga = function*() {
  yield takeEvery(`${SIGN_UP_URL}_SUBMIT`, function*({ payload }) {
    yield put(
      requestApi(`${SIGN_UP_URL}`, { data: payload }, { form: "signup" })
    );
  });
};

const signUpSucceedSaga = function*() {
  yield takeEvery(`${SIGN_UP_URL}_SUCCEED`, function*({ payload }) {
    yield put(updateAuthData(payload));
  });
};

const verifyEmployerCodeSaga = function*() {
  yield takeEvery(`${VERIFY_EMPLOYER_CODE_URL}_SUBMIT`, function*({ payload }) {
    yield put(
      requestApi(
        `${VERIFY_EMPLOYER_CODE_URL}`,
        { data: payload },
        { form: "employerCode" }
      )
    );
  });
};

const acceptPersonalSaga = function*() {
  yield takeEvery(ACCEPT_PERSONAL, function*() {
    const { data } = yield select(s => s.signUpReducer);
    yield put(updateAuthData({ data }));
  });
};

export {
  signUpSaga,
  signUpSucceedSaga,
  verifyEmployerCodeSaga,
  acceptPersonalSaga
};
