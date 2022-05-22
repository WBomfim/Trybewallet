import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import './Header.css';

class Reader extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPI());
  }

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
        <p
          data-testid="total-field"
        >
          Despesa Total:
          {' '}
          { 0 }
        </p>
        <span data-testid="header-currency-field">Moeda: BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Reader.propTypes = {
  email: propTypes.string.isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Reader);