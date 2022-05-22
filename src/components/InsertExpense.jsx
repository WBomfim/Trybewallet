import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './InsertExpense.css';

class InsertExpense extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <form className="expenseInsert">
        <label htmlFor="expense_value">
          Valor:
          <input
            name="value"
            id="expense_value"
            type="text"
            data-testid="value-input"
          />
        </label>

        <label htmlFor="expense_coin">
          Moeda:
          <select name="coin" id="expense_coin">
            { currencies.map((currency) => (
              <option key={ currency + 1 } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>

        <label htmlFor="expense_pay_method">
          Método de Pagamento:
          <select name="payMethod" id="expense_pay_method" data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartaoCredito">Cartão de crédito</option>
            <option value="cartaoDebito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="expense_catogory">
          Catogoria:
          <select name="category" id="expense_catogory" data-testid="tag-input">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>

        <label htmlFor="expense_description">
          Descrição:
          <input
            name="description"
            id="expense_description"
            type="text"
            data-testid="description-input"
          />
        </label>

        <button
          type="submit"
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
};

export default connect(mapStateToProps, null)(InsertExpense);
