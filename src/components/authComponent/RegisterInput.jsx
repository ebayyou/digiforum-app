import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import AuthInput from './children/AuthInput';

const RegisterInput = ({ onSubmitHandlerRegister }) => {
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const handlerSubmitRegister = (event) => {
    event.preventDefault();
    onSubmitHandlerRegister({ name, email, password });
  };

  return (
    <div className="auth__wrapper-input">
      <h2 className="auth__heading">Register</h2>
      <p className="auth__description">Enter your user details below.</p>

      <div className="auth__barrier" />

      <form
        className="auth__form"
        onSubmit={handlerSubmitRegister}
      >
        <AuthInput
          onChangeInput={onChangeName}
          value={name}
          typeInput="text"
          placeholder="Ebayyou Anggoro"
        />

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
