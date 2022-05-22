export const GET_CURRENCY_ABBREVIATIONS = 'GET_CURRENCY_ABBREVIATIONS';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY_ABBREVIATIONS:
    return {
      ...state,
      currencies: [...action.data],
    };
  default: return state;
  }
};

export default wallet;
