export const GET_CURRENCY_ABBREVIATIONS = 'GET_CURRENCY_ABBREVIATIONS';
export const GET_EXPENSES = 'GET_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

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
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default: return state;
  }
};

export default wallet;
