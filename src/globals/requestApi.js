import axios from "axios";
import { put, takeEvery, select, call } from "redux-saga/effects";
import { API } from "../../config";
import amplitude from "./amplitude";
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

export const requestApi = (url, params = {}, meta = {}, method, config) => ({
  meta,
  payload: { config, method, params, url },
  type: API_REQUEST
});

export const requestApiSaga = function*() {
  yield takeEvery(API_REQUEST, function*({
    meta,
    payload: { config = {}, method, params, url }
  }) {
    const { headers = {} } = config;

    const authReducer = yield select(s => s.authReducer);
    const authorized = getAuthorized(authReducer);
    const jwt = authorized ? authorized.jwt : undefined;
    if (jwt) {
      config.headers = { ...headers, authorization: `Bearer ${jwt}` };
    }

    const { payload, error } = yield call(request, method, url, params, config);

    if (error) {
      const { errors, status } = error;
      let errorContent = {};
      if (errors) {
        errorContent.key = errors[0].key;
        errorContent.value = errors[0].value;
        if (status) {
          errorContent.status = status;
        }
      } else {
        errorContent = error;
      }
      amplitude.track(amplitude.events.SERVER_ERROR, {
        url,
        error: errorContent
      });
    }

    const type = `${url}_${payload ? "SUCCEED" : "FAIL"}`;
    yield put({ error, meta, payload, type });
  });
};
