/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiMenuFill } from 'react-icons/ri';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import logo from '../public/images/Logo.png';
import { sidebarStatusActionCreator } from '../states/sidebarStatus/action';

const Navbar = () => {
  const { authUser } = useSelector((state) => state);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const onHandlerLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const onHandlerSidebar = () => {
    dispatch(sidebarStatusActionCreator(true));
  };

  return (
    <nav className="navbar">
      <div className="nav__brand">
        <button type="button" className="logo__brand nav__brand-logo" onClick={onHandlerSidebar}>
          <img src={logo} alt="logo brand" />
        </button>
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
          {authUser ? (
            <button className="nav__button nav__btn" type="button" onClick={onHandlerLogout}>
              Logout
            </button>
          ) : (
            <Link className="nav__button" to="/login">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
