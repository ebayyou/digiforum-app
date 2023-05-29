import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';

const RegisterInput = ({ onSubmitHandlerRegister }) => {
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const handlerSubmitRegister = (event) => {
    event.preventDefault();
    onSubmitHandlerRegister({ name, email, password });
  };

  return (
    <div className="auth__input">
      <h2 className="auth__heading">Register</h2>
      <p className="auth__description">Enter your user details below.</p>

      <div className="auth__barrier" />

      <form
        className="auth__form"
        onSubmit={handlerSubmitRegister}
      >
        <div className="auth__group">
          <label
            className="auth__label"
            htmlFor="name"
          >
            <h4>Name</h4>
            <input
              className="auth__input"
              onChange={onChangeName}
              value={name}
              type="text"
              name="name"
              id="name"
              placeholder="Ebayyou Anggoro"
              required
            />
          </label>
        </div>

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
              required
            />
          </label>
        </div>
        <button
          type="submit"
          style={{ backgroundColor: '#d1caff' }}
          className="auth__button"
        >
          Register
        </button>
      </form>

      <div className="auth__info">
        have an account?
        <Link
          to="/login"
          className="highlight"
        >
          Login!
        </Link>
      </div>
    </div>
  );
};

RegisterInput.propTypes = {
  onSubmitHandlerRegister: PropTypes.func.isRequired,
};

export default RegisterInput;
