/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';

function LoginInput() {
  return (
    <div className="auth__input">
      <div className="logo__brand">DF</div>
      <h2 className="auth__heading">Login</h2>
      <p className="auth__description">
        You can Login with your registered account, If you don’t have an account yet,
        <Link to="/register" className="highlight">Register here!</Link>
      </p>
      <div className="auth__barrier" />
      <form className="auth__form">
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
        Don’t have an account?
        <Link to="/register" className="highlight">Create one!</Link>
      </div>
    </div>
  );
}

export default LoginInput;
