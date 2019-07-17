import { SUBMIT_DOCUMENT_DATA_URL } from "./constants";

export const submitDocumentData = payload => ({
  payload,
  type: `${SUBMIT_DOCUMENT_DATA_URL}_SUBMIT`
});
