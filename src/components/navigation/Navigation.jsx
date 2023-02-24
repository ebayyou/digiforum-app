/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiMenuFill } from 'react-icons/ri';
import { asyncUnsetAuthUser } from '../../states/authUser/action';
import { sidebarStatusActionCreator } from '../../states/sidebarStatus/action';
import MenuList from './children/MenuList';
import MenuCollapse from './children/MenuCollapse';
import MenuHeader from './children/MenuHeader';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandlerLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const onHandlerNavbar = () => {
    setToggle(false);
  };

  const onHandlerSidebar = () => {
    dispatch(sidebarStatusActionCreator(true));
  };

  return (
    <>
      <MenuCollapse toggle={toggle}>
        <MenuHeader onHandlerNavbar={onHandlerNavbar} />
        <MenuList />
      </MenuCollapse>
      <nav className="navbar">
        <div className="nav__brand">
          <button
            type="button"
            className="logo__brand nav__brand-logo"
            onClick={onHandlerSidebar}
          >
            <img
              src="images/brand/Logo_brand.png"
              alt="logo brand"
            />
          </button>
          <div className="name__brand">
            <h4>DigiForum</h4>
            <span>Platform Discussion</span>
          </div>
        </div>

        <div className="nav__group-button">
          {authUser ? (
            <button
              className="nav__button nav__btn"
              type="button"
              onClick={onHandlerLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              className="nav__button"
              to="/login"
            >
              Login
            </Link>
          )}

          <button
            type="button"
            className="Humberger__Menu"
            onClick={() => setToggle((prevState) => !prevState)}
          >
            <RiMenuFill className="menu__fill" />
          </button>
        </div>

        <MenuList desktopMode />
      </nav>
    </>
  );
};

export default Navbar;
