import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchExchangeRate } from '../actions';
import './InsertExpense.css';

class InsertExpense extends Component {
  constructor() {
    super();
    this.state = {
      indexId: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  hendleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  addExpense = () => {
    const { indexId, value, currency, method, tag, description } = this.state;
    const { dispatch } = this.props;
    const expense = {
      id: indexId,
      value,
      currency,
      method,
      tag,
      description,
    };
    dispatch(fetchExchangeRate(expense));
    this.setState({
      indexId: indexId + 1,
      value: '',
      description: '',
    });
  };

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies } = this.props;
    return (
      <form className="expenseInsert">
        <label htmlFor="expense_value">
          Valor:
          <input
            name="value"
            value={ value }
            onChange={ this.hendleChange }
            id="expense_value"
            type="text"
            data-testid="value-input"
          />
        </label>

        <label htmlFor="expense_coin">
          Moeda:
          <select
            name="currency"
            value={ currency }
            onChange={ this.hendleChange }
            id="expense_coin"
          >
            { currencies.map((coin) => (
              <option key={ coin + 1 } value={ coin }>{coin}</option>
            ))}
          </select>
        </label>

        <label htmlFor="expense_pay_method">
          Método de Pagamento:
          <select
            name="method"
            value={ method }
            onChange={ this.hendleChange }
            id="expense_pay_method"
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="expense_catogory">
          Catogoria:
          <select
            name="tag"
            value={ tag }
            onChange={ this.hendleChange }
            id="expense_catogory"
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="expense_description">
          Descrição:
          <input
            name="description"
            value={ description }
            onChange={ this.hendleChange }
            id="expense_description"
            type="text"
            data-testid="description-input"
          />
        </label>

        <button
          onClick={ this.addExpense }
          type="button"
          data-testid="submit-button"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

InsertExpense.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(InsertExpense);
