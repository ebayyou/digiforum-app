import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { asyncUnsetAuthUser } from '../../states/authUser/action';
import { ArrowSquareDown, SearchStatus, Notification, MessageFavorite } from 'iconsax-react';
import {
  // rightbarStatusActionCreator,
  sidebarStatusActionCreator,
} from '../../states/menuStatus/action';
import NavList from './children/NavList';
import logoBrand from '../../assets/images/brand/digiforum-main.svg';
import profile from '../../assets/images/main_avatar.png';

const Navbar = () => {
  // const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const onHandlerLogout = () => dispatch(asyncUnsetAuthUser());
  const onHandlerSidebar = () => dispatch(sidebarStatusActionCreator(true));
  // const onHandlerRightbar = () => dispatch(rightbarStatusActionCreator(true));

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

        <div className="nav__search">
          <SearchStatus
            size={32}
            color="#d1caff"
          />
          <input
            type="search"
            className="search__input"
            placeholder="Find what do you want ?"
          />
        </div>

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

          <div className="nav__group-profile">
            <div className="nav__profile">
              <img
                src={profile}
                alt="logo brand"
              />

              <h5>Ebayyou. A</h5>
            </div>

            <button
              type="button"
              className="nav__button-dropicon"
            >
              <ArrowSquareDown
                className="dropicon"
                size="28"
                color="#DDD8D8"
                variant="Bold"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
