import { useDispatch, useSelector } from 'react-redux';
import { Notification, MessageFavorite } from 'iconsax-react';
import { Link } from 'react-router-dom';
import { sidebarStatusActionCreator } from '../../states/menuStatus/action';
import NavList from './children/NavList';
import logoBrand from '../../assets/images/brand/digiforum-main.svg';
import NavGroupProfile from './children/NavGroupProfile';
import SearchElement from '../SearchElement';

const Navbar = () => {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandlerSidebar = () => dispatch(sidebarStatusActionCreator(true));

  return (
    <>
      {/* mobile version */}
      <nav className="navbar__bottom">
        <NavList />
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
              <img
                src={logoBrand}
                alt="logo brand"
              />
            </button>
          </div>
          <div className="name__brand">
            <h4>DigiForum</h4>
            <span>Platform Discussion</span>
          </div>
        </div>

        <SearchElement
          className="nav__search"
          keyword="Search Here"
          changeValueSearchParams={() => {}}
        />

        <div className="nav__wrap-icon">
          <div className="nav__group-icon">
            <button
              type="button"
              className="icon__notif"
            >
              <Notification
                size={26}
                color="#d1caff"
              />
            </button>
            <button
              type="button"
              className="icon__message"
            >
              <MessageFavorite
                size={26}
                color="#d1caff"
              />
            </button>
          </div>

          {authUser ? (
            <NavGroupProfile user={authUser} />
          ) : (
            <Link
              to="/login"
              className="nav__button"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
