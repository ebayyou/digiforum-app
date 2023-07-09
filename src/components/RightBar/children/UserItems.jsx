import PropTypes from 'prop-types';
import { AddSquare } from 'iconsax-react';
import { Link } from 'react-router-dom';

const UserItems = ({ onHandlerRightbar, avatar, name, id }) => {
  return (
    <Link
      to={`/users/${id}`}
      className="userItem__group"
      onClick={onHandlerRightbar}
    >
      <div className="userItem__profile">
        <img
          className="userItem__img"
          src={avatar}
          alt="avatar"
        />

        <div className="userItem__info">
          <h4>{name}</h4>
          <span>{id.slice(0, 12)}</span>
        </div>
      </div>

      <AddSquare className="userItem__icon" />
    </Link>
  );
};

UserItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onHandlerRightbar: PropTypes.func.isRequired,
};

export default UserItems;
