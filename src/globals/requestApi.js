import axios from "axios";
import { put, takeEvery, select, call } from "redux-saga/effects";
import { API } from "../../config";
import getAuthorized from "./getAuthorized";

const API_REQUEST = "API_REQUEST";

const client = axios.create({ baseURL: API });

const request = async (method = "post", url, params, config) => {
  try {
    const { data } = await client[method](url, params, config);

    return { payload: data };
  } catch (error) {
    if (error.response) {
      const { response: { status, data: { errors } } } = error;

      return { error: { errors, status } };
    }

    return { error };
  }
};

export const requestApi = (url, params = {}, meta = {}, method, config) => ({ meta, payload: { config, method, params, url }, type: API_REQUEST });

export const requestApiSaga = function * () {
  yield takeEvery(API_REQUEST, function * ({ meta, payload: { config = {}, method, params, url } }) {
    const { headers = {} } = config;

    const authReducer = yield select(s => s.authReducer);
    const authorized = getAuthorized(authReducer);
    const jwt = authorized ? authorized.jwt : undefined;
    if (jwt) {
      config.headers = { ...headers, authorization: `Bearer ${jwt}` };
    }

    console.log(`Calling the API for URL ${url} and jwt ${jwt}`);
    const { payload, error } = yield call(request, method, url, params, config);

    const type = `${url}_${payload ? "SUCCEED" : "FAIL"}`;
    // TODO: get Flinks response codes

    yield put({ error, meta, payload, type });
  })
};
