export const GET_CURRENCY_ABBREVIATIONS = 'GET_CURRENCY_ABBREVIATIONS';
export const GET_EXPENSES = 'GET_EXPENSES';

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

  case GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.data],
    };
  default: return state;
  }
};

export default wallet;
