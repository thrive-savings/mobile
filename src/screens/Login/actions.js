import { REQUEST_URL } from './constants';

export const authUser = (payload) => ({ payload, type: `${REQUEST_URL}_SUBMIT` });
