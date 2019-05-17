import { CHECK_ELIGIBILITY_URL, UPDATE_OFFER_STATUS_URL } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../globals/requestApi";
import { updateMomentumOfferData } from "../../Login/state/actions";

const checkEligibilitySaga = function*() {
  yield takeEvery(`${CHECK_ELIGIBILITY_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${CHECK_ELIGIBILITY_URL}`, { data: payload }));
  });
};

const checkEligibilitySucceedSaga = function*() {
  yield takeEvery(`${CHECK_ELIGIBILITY_URL}_SUCCEED`, function*({
    payload: { momentumOfferData }
  }) {
    yield put(
      updateMomentumOfferData({
        momentumOfferData
      })
    );
  });
};

const updateOfferStatusSaga = function*() {
  yield takeEvery(`${UPDATE_OFFER_STATUS_URL}_SUBMIT`, function*({ payload }) {
    yield put(requestApi(`${UPDATE_OFFER_STATUS_URL}`, { data: payload }));
  });
};

const updateOfferStatusSucceedSaga = function*() {
  yield takeEvery(`${UPDATE_OFFER_STATUS_URL}_SUCCEED`, function*({
    payload: { momentumOfferData }
  }) {
    yield put(
      updateMomentumOfferData({
        momentumOfferData
      })
    );
  });
};

const updateMomentumOfferDataSucceedSaga = function*() {
  yield takeEvery(
    [`${CHECK_ELIGIBILITY_URL}_SUCCEED`, `${UPDATE_OFFER_STATUS_URL}_SUCCEED`],
    function*({ payload: { momentumOfferData } }) {
      yield put(
        updateMomentumOfferData({
          momentumOfferData
        })
      );
    }
  );
};

export {
  checkEligibilitySaga,
  checkEligibilitySucceedSaga,
  updateOfferStatusSaga,
  updateOfferStatusSucceedSaga,
  updateMomentumOfferDataSucceedSaga
};
