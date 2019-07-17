import { SUBMIT_DOCUMENT_DATA_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";

const submitDocumentDataSaga = function*() {
  yield takeEvery(`${SUBMIT_DOCUMENT_DATA_URL}_SUBMIT`, function*({ payload }) {
    yield put(
      requestApi(
        `${SUBMIT_DOCUMENT_DATA_URL}`,
        { data: payload },
        { form: "completeProfileForm" }
      )
    );
  });
};

export { submitDocumentDataSaga };
