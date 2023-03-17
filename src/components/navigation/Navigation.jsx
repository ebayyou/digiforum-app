import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HambergerMenu, Category } from 'iconsax-react';
import { asyncUnsetAuthUser } from '../../states/authUser/action';
import { sidebarStatusActionCreator } from '../../states/menuStatus/action';
import { rightbarStatusActionCreator } from '../../states/menuStatus/action-r';
import MenuList from './children/MenuList';

const Navbar = () => {
  const [setToggle] = useState(false);
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

  const onHandlerRightbar = () => {
    dispatch(rightbarStatusActionCreator(true));
  };

  return (
    <>
      {/* mobile version */}
      <nav className="navbar__bottom">
        <MenuList onHandlerNavbar={onHandlerNavbar} />
      </nav>
      {/* desktop version */}
      <nav className="navbar">
        <div className="nav__brand">
          <div className="nav__brand-group">
            <button
              type="button"
              className="nav__brand-logo"
              onClick={onHandlerSidebar}
            >
              <Category
                className="nav__icon"
                size="32"
                color="#d1caff"
              />
            </button>
            <img
              src="images/brand/Logo_brand.png"
              alt="logo brand"
            />
          </div>
          <div className="name__brand">
            <h4>DigiForum</h4>
            <span>Platform Discussion</span>
          </div>
        </div>

        <div className="nav__group-button">
          {authUser ? (
            <button
              className="nav__button"
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
            onClick={onHandlerRightbar}
          >
            <HambergerMenu
              size="38"
              color="#d1caff"
            />
          </button>
        </div>

        <MenuList desktopMode />
      </nav>
    </>
  );
};

export default Navbar;
