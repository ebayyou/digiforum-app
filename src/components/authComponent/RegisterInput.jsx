/* eslint-disable jsx-a11y/label-has-associated-control */
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

      <form className="auth__form" onSubmit={handlerSubmitRegister}>
        <div className="auth__group">
          <label className="auth__label" htmlFor="name">
            Name
          </label>
          <input className="auth__input" onChange={onChangeName} value={name} type="text" name="name" id="name" placeholder="Ebayyou Anggoro" required />
        </div>
        <div className="auth__group">
          <label className="auth__label" htmlFor="email">
            Email
          </label>
          <input className="auth__input" onChange={onChangeEmail} value={email} type="email" name="email" id="email" placeholder="example@gmai.com" required />
        </div>
        <div className="auth__group">
          <label className="auth__label" htmlFor="password">
            Password
          </label>
          <input className="auth__input" onChange={onChangePassword} value={password} type="password" name="password" id="password" placeholder="Your password is..." required />
        </div>
        <button type="submit" className="auth__button">
          Register
        </button>
      </form>

      <div className="auth__info">
        have an account?
        <Link to="/login" className="highlight">
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
