import PropTypes from 'prop-types';

const UserItems = ({ avatar, name, id }) => {
  return (
    <div className="userList__group">
      <img
        className="userList__image"
        src={avatar}
        alt="avatar"
      />

      <div className="userList__info">
        <h4>{name}</h4>
        <span>{id}</span>
      </div>
    </div>
  );
};

UserItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default UserItems;
