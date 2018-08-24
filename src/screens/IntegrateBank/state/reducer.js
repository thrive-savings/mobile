import {
  FETCH_ACCOUNTS_URL,
  ANSWER_MFA_QUESTIONS,
  SET_DEFAULT_URL,
  CHANGE_BANK_STEP
} from "./constants";
const initialState = {
  bank: undefined,
  accounts: undefined,
  questions: undefined,
  defaultAccountData: {},
  step: undefined,
  isAnswering: false,
  isFetching: false,
  isSetting: false,
  error: false,
  errorMessage: ""
};

export default function integrateBankReducer(state = initialState, action) {
  switch (action.type) {
    // Fetch Accounts cases
    case `${FETCH_ACCOUNTS_URL}_SUBMIT`:
      return {
        ...initialState,
        defaultAccountData: {},
        isFetching: true
      };
    case `${FETCH_ACCOUNTS_URL}_SUCCEED`:
      const {
        payload: {
          data: {
            accounts: fetchedAccounts,
            questions: fetchedQuestions,
            bank: fetchedBank
          }
        }
      } = action;
      return {
        ...state,
        accounts: fetchedAccounts,
        questions: fetchedQuestions,
        bank: fetchedBank,
        isFetching: false
      };
    case `${FETCH_ACCOUNTS_URL}_FAIL`:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error
      };

    // Answer MFA Questions cases
    case `${ANSWER_MFA_QUESTIONS}_SUBMIT`:
      return {
        ...state,
        defaultAccountData: {},
        isAnswering: true
      };
    case `${ANSWER_MFA_QUESTIONS}_SUCCEED`:
      return {
        ...state,
        questions: undefined,
        isAnswering: false
      };
    case `${ANSWER_MFA_QUESTIONS}_FAIL`:
      return {
        ...state,
        isAnswering: false,
        error: true,
        errorMessage: action.error
      };

    // Set Default cases
    case `${SET_DEFAULT_URL}_SUBMIT`:
      return {
        ...state,
        isSetting: true
      };
    case `${SET_DEFAULT_URL}_SUCCEED`:
      const { payload: { data: setDefaultPayloadData } } = action;
      return {
        ...state,
        defaultAccountData: setDefaultPayloadData ? setDefaultPayloadData : {},
        step: 2,
        isSetting: false,
        error: false,
        errorMessage: ""
      };
    case `${SET_DEFAULT_URL}_FAIL`:
      return {
        ...state,
        isSetting: false,
        error: true,
        errorMessage: action.error
      };

    // Change Bank Step cases
    case `${CHANGE_BANK_STEP}`:
      const { payload: { step } } = action;
      return {
        ...state,
        step
      };

    default:
      return state;
  }
}
