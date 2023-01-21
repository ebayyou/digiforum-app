/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';

function RegisterInput() {
  return (
    <div className="auth__input">
      <h2 className="auth__heading">Register</h2>
      <p className="auth__description">
        Enter your user details below.
      </p>
      <div className="auth__barrier" />
      <form className="auth__form">
        <div className="auth__group">
          <label className="auth__label" htmlFor="name">Name</label>
          <input className="auth__input" type="text" name="name" id="name" placeholder="Ebayyou Anggoro" />
        </div>
        <div className="auth__group">
          <label className="auth__label" htmlFor="email">Email</label>
          <input className="auth__input" type="email" name="email" id="email" placeholder="example@gmai.com" />
        </div>
        <div className="auth__group">
          <label className="auth__label" htmlFor="password">Password</label>
          <input className="auth__input" type="password" name="password" id="password" placeholder="Your password is..." />
        </div>
        <button type="button" className="auth__button">Login</button>
      </form>
      <div className="auth__info">
        have an account?
        <Link to="/" className="highlight">Login!</Link>
      </div>
    </div>
  );
}

export default RegisterInput;
