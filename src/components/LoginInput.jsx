/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useInput } from '../hooks/useInput';
import logo from '../public/images/Logo.png';

function LoginInput({ onSubmitHandlerLogin }) {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const handlerSubmitLogin = (event) => {
    event.preventDefault();
    onSubmitHandlerLogin({ email, password });
  };

  return (
    <div className="auth__input">
      <div className="logo__brand">
        <img src={logo} alt="logo brand" />
      </div>
      <h2 className="auth__heading">Login</h2>
      <p className="auth__description">
        You can Login with your registered account, If you don’t have an account yet,
        <Link to="/register" className="highlight">
          Register here!
        </Link>
      </p>

      <div className="auth__barrier" />

      <form className="auth__form" onSubmit={handlerSubmitLogin}>
        <div className="auth__group">
          <label className="auth__label" htmlFor="email">
            Email
          </label>
          <input className="auth__input" onChange={onChangeEmail} value={email} type="email" name="email" id="email" placeholder="example@gmai.com" />
        </div>

        <div className="auth__group">
          <label className="auth__label" htmlFor="password">
            Password
          </label>
          <input className="auth__input" onChange={onChangePassword} value={password} type="password" name="password" id="password" placeholder="Your password is..." />
        </div>

        <button type="submit" className="auth__button">
          Login
        </button>
      </form>

      <div className="auth__info">
        Don’t have an account?
        <Link to="/register" className="highlight">
          Create one!
        </Link>
      </div>
    </div>
  );
}

LoginInput.propTypes = {
  onSubmitHandlerLogin: PropTypes.func.isRequired,
};

export default LoginInput;
