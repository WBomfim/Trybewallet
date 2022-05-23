import { GET_EMAIL } from '../reducers/user';
import {
  GET_CURRENCY_ABBREVIATIONS,
  GET_EXPENSES,
  DELETE_EXPENSE,
  EDITING_EXPENSE,
  UPDATE_EXPENSE,
} from '../reducers/wallet';

export const getUser = (email) => ({
  type: GET_EMAIL,
  email,
});

export const getCurrencyAbbreviations = (data) => ({
  type: GET_CURRENCY_ABBREVIATIONS,
  data,
});

export const addExpense = (data) => ({
  type: GET_EXPENSES,
  data,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const editExpense = (id) => ({
  type: EDITING_EXPENSE,
  id,
});

export const updateExpense = (data) => ({
  type: UPDATE_EXPENSE,
  data,
});

export function fetchCurrencyAbbreviations() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const filterCurrencyAbbreviations = Object.keys(data)
        .filter((abbreviation) => abbreviation !== 'USDT');
      dispatch(getCurrencyAbbreviations(filterCurrencyAbbreviations));
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchExchangeRate(object) {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      object.exchangeRates = data;
      dispatch(addExpense(object));
    } catch (error) {
      console.error(error);
    }
  };
}
