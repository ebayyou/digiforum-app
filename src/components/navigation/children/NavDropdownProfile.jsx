import PropTypes from 'prop-types';
import { LogoutCurve } from 'iconsax-react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUnsetAuthUser } from '../../../states/authUser/action';
import DropdownList from './DropdownList';

const NavDropdownProfile = ({ isActive, onActiveDropdown }) => {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandlerLogout = () => dispatch(asyncUnsetAuthUser());

  return (
    <div className={`nav__dropdown ${isActive ? 'active' : ''}`}>
      <div className="dropdown__wrapper">
        <div className="dropdown__profile">
          <div className="profile__group">
            <img
              src={authUser.avatar}
              alt={authUser.name}
            />

            <div className="profile__info">
              <h5>{authUser.name}</h5>
              <p>
                xxx
                {authUser.email.slice(7, authUser.email.length)}
              </p>
            </div>
          </div>

          <div className="profile__badge">Free</div>
        </div>

        <DropdownList
          quantity={3}
          onActiveDropdown={onActiveDropdown}
          border
        />
        <DropdownList
          className="drop-2-desktop"
          quantity={2}
          onActiveDropdown={onActiveDropdown}
          border
        />

        <button
          type="button"
          onClick={onHandlerLogout}
          className="dropdown__button"
        >
          <LogoutCurve className="dropdown__icon" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

NavDropdownProfile.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onActiveDropdown: PropTypes.func.isRequired,
};
export default NavDropdownProfile;
