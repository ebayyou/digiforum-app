import PropTypes from 'prop-types';

const UserProfileTabs = ({ children }) => {
  return (
    <div className="profile__tabs-wrapper">
      <div className="profile__tabs">{children}</div>
    </div>
  );
};

UserProfileTabs.propTypes = {
  children: PropTypes.array.isRequired,
};

export default UserProfileTabs;
