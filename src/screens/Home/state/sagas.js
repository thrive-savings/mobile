import { FETCH_HOME_DATA } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../helpers/requestApi";

const fetchHomeSaga = function * () {
  yield takeEvery(FETCH_HOME_DATA, function * ({ url }) {
    console.log(`Dispatching ${FETCH_HOME_DATA} event`);
    console.log(url);
    yield put({type: `${FETCH_HOME_DATA}_SUCCEED`, items: url});
  });
};

export default fetchHomeSaga;
