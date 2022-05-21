import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabledSubmit: true,
    };
  }

  hendleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, () => {
      this.checkLogin();
    });
  }

  checkLogin = () => {
    const { email, password } = this.state;
    const MIN_CHARACTERS = 6;
    const validEmail = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3})|$/i);
    const validPassword = password.length >= MIN_CHARACTERS;
    const disabledSubmit = !email || !validEmail[0] || !password || !validPassword;
    this.setState({
      disabledSubmit,
    });
  }

  submitLogin = () => {
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(getUser(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, disabledSubmit } = this.state;
    return (
      <div className="Login">
        <form>
          <input
            name="email"
            value={ email }
            onChange={ this.hendleChange }
            type="text"
            placeholder="Email:"
            data-testid="email-input"
          />
          <input
            name="password"
            value={ password }
            onChange={ this.hendleChange }
            type="password"
            placeholder="Senha:"
            data-testid="password-input"
          />
          <button
            type="button"
            disabled={ disabledSubmit }
            onClick={ this.submitLogin }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect()(Login);
