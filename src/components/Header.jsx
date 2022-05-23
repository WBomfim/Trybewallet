import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyAbbreviations } from '../actions';
import './Header.css';

class Reader extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencyAbbreviations());
  }

  convertValue = (expense) => {
    const { value, currency, exchangeRates } = expense;
    const valueExchange = exchangeRates[currency].ask;
    return Number(value * valueExchange);
  }

  sumTotal = () => {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, expense) => {
      const valueExpense = this.convertValue(expense);
      return acc + valueExpense;
    }, 0);
    return total.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h2
          data-testid="email-field"
        >
          Email:
          {' '}
          {email}
        </h2>
        <div>
          <p>Despesa Total:</p>
          <p
            data-testid="total-field"
          >
            { this.sumTotal() }
          </p>
        </div>
        <span data-testid="header-currency-field">Moeda: BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Reader.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect(mapStateToProps)(Reader);
