export const GET_CURRENCY_ABBREVIATIONS = 'GET_CURRENCY_ABBREVIATIONS';
export const GET_EXPENSES = 'GET_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDITING_EXPENSE = 'EDITING_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isEditing: false,
  expenseEditing: {},
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

  case EDITING_EXPENSE:
    return {
      ...state,
      isEditing: true,
      expenseEditing: state.expenses.find((expense) => expense.id === action.id),
    };

  case UPDATE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.data.id) {
          return {
            ...action.data,
          };
        }
        return expense;
      }),
      isEditing: false,
      expenseEditing: {},
    };

  default: return state;
  }
};

export default wallet;
