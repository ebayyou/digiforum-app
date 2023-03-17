import { Link } from 'react-router-dom';
import { Lock } from 'iconsax-react';

const ProfileLock = () => {
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

        <p className="lock__desc">You must login first, if you want to see the profile page</p>

        <Link
          className="lock__btn"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default ProfileLock;
