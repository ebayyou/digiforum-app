import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import logoBrandStripe from '../../assets/images/brand/digiforum-stripe.svg';
import googleIcon from '../../assets/images/Google_icon.svg';

const LoginInput = ({ onSubmitHandlerLogin }) => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const handlerSubmitLogin = (event) => {
    event.preventDefault();
    onSubmitHandlerLogin({ email, password });
  };

  return (
    <div className="auth__input">
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

      <button
        type="submit"
        className="auth__button"
      >
        <img
          src={googleIcon}
          alt="google icon"
        />
        Login with Google
      </button>

      <div className="auth__barrier" />

      <form
        className="auth__form"
        onSubmit={handlerSubmitLogin}
      >
        <div className="auth__group">
          <label
            className="auth__label"
            htmlFor="email"
          >
            <h4>Email</h4>
            <input
              className="auth__input"
              onChange={onChangeEmail}
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="Example@gmail.com"
            />
          </label>
        </div>

        <div className="auth__group">
          <label
            className="auth__label"
            htmlFor="password"
          >
            <h4>Password</h4>
            <input
              className="auth__input"
              onChange={onChangePassword}
              value={password}
              type="password"
              name="password"
              id="password"
              placeholder="Your password is..."
            />
          </label>
        </div>

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
