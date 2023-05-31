import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Lock } from 'iconsax-react';

const ProfileLock = ({ message, path, btnMsg }) => {
  return (
    <div className="Layout__children-full">
      <div className="profile__lock">
        <div className="lock__wrapper">
          <div className="lock__box">
            <Lock
              className="lock__icon"
              size="135"
            />
          </div>
        </div>

        <p className="lock__desc">{message}</p>

        <Link
          className="lock__btn"
          to={path}
        >
          {btnMsg}
        </Link>
      </div>
    </div>
  );
};

ProfileLock.propTypes = {
  message: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  btnMsg: PropTypes.string.isRequired,
};

export default ProfileLock;
