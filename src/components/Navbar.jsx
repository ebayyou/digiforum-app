/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiMenuFill } from 'react-icons/ri';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import logo from '../public/images/Logo.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { authUser = null } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandlerLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <nav className="navbar">
      <div className="nav__brand">
        <div className="logo__brand nav__brand-logo">
          <img src={logo} alt="logo brand" />
        </div>
        <Link to="/" className="name__brand">
          DigiForum
        </Link>
      </div>

      <button type="button" className="Humberger__Menu" onClick={() => setToggle((prevState) => !prevState)}>
        <RiMenuFill className="menu" />
      </button>

      <ul className={`nav__group ${toggle ? '' : 'visible'}`}>
        <li className="nav__list">
          <Link className="nav__link" to="/">
            Grades
          </Link>
        </li>
        <li className="nav__list">
          <Link className="nav__link" to="/">
            Schedule
          </Link>
        </li>
        <li className="nav__list">
          <Link className="nav__link" to="/">
            Comunity
          </Link>
        </li>
        <li className="nav__list">
          <Link className="nav__link" to="/">
            Payments
          </Link>
        </li>
        <li className="nav__list">
          {authUser === null ? (
            <Link className="nav__button" to="/login">
              Login
            </Link>
          ) : (
            <button className="nav__button nav__btn" type="button" onClick={onHandlerLogout}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
