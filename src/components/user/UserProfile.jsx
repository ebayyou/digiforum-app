import PropTypes from 'prop-types';
import { userShape } from '../thread/children/thread/ThreadItemOwner';

const UserProfile = ({ user }) => {
  return (
    <div className="profile">
      <div className="profile__group">
        <div className="profile__banner" />
        <img
          className="profile__picture"
          src={user.avatar}
          alt={user.name}
        />
      </div>

      <div className="profile__bio">
        <h1 className="bio__name">{user.name}</h1>
        <p className="bio__id">{user.id}</p>
        <p className="bio__desc">
          Focus and what makes you happy, relax at a moment, and play games;
        </p>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
};

export default UserProfile;
