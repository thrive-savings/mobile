import { REQUEST_URL } from './constants';

export const signUpUser = (payload) => ({ payload, type: `${REQUEST_URL}_SUBMIT` });
