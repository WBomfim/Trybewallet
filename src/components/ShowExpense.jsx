import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './ShowExpense.css';

class ShowExpense extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            const {
              value,
              currency,
              method,
              tag,
              description,
              exchangeRates,
            } = expense;
            const currencyName = exchangeRates[currency].name;
            const valueExchange = Number(exchangeRates[currency].ask);
            const valueConverted = Number(value * valueExchange);
            return (
              <tr key={ description }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{currencyName}</td>
                <td>{valueExchange.toFixed(2)}</td>
                <td>{valueConverted.toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ShowExpense.propTypes = {
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps)(ShowExpense);
