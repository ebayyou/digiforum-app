import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItems = ({ avatar, name, id }) => {
  return (
    <Link
      to="/"
      className="userItem__group"
    >
      <img
        className="userItem__img"
        src={avatar}
        alt="avatar"
      />

      <div className="userItem__info">
        <h4>{name}</h4>
        <span>{id}</span>
      </div>
    </Link>
  );
};

UserItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default UserItems;
