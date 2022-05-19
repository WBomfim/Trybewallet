export const WALLET_INITIAL = 'WALLET_INITIAL';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_INITIAL:
    return {
      ...state,
      currencies: action.wallet.currencies,
      expenses: action.wallet.expenses,
    };
  default: return state;
  }
};

export default wallet;
