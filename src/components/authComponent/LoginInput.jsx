import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import AuthInput from './children/AuthInput';
import logoBrandStripe from '../../assets/images/brand/digiforum-stripe.svg';

const LoginInput = ({ onSubmitHandlerLogin }) => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const handlerSubmitLogin = (event) => {
    event.preventDefault();
    onSubmitHandlerLogin({ email, password });
  };

  return (
    <div className="auth__wrapper-input">
      <Link
        to="/"
        className="logo__brand"
      >
        <img
          src={logoBrandStripe}
          alt="logo brand"
        />
      </Link>
      <h2 className="auth__heading">Login</h2>

      <p className="auth__description">
        You can login with your registered account or quick login with your Google account.
      </p>

      <div className="auth__barrier" />

      <form
        className="auth__form"
        onSubmit={handlerSubmitLogin}
      >
        <AuthInput
          onChangeInput={onChangeEmail}
          value={email}
          typeInput="email"
          placeholder="Example@gmail.com"
        />

        <AuthInput
          onChangeInput={onChangePassword}
          value={password}
          typeInput="password"
          placeholder="Your password is..."
        />

        <button
          type="submit"
          style={{ backgroundColor: '#d1caff' }}
          className="auth__button"
        >
          Login
        </button>
      </form>

      <div className="auth__info">
        Don’t have an account?
        <Link
          to="/register"
          className="highlight"
        >
          Create one!
        </Link>
      </div>
    </div>
  );
};

LoginInput.propTypes = {
  onSubmitHandlerLogin: PropTypes.func.isRequired,
};

export default LoginInput;
