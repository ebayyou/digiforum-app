import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { User, Hashtag, Save2, Notification, MessageFavorite, LoginCurve } from 'iconsax-react';

const DropdownList = ({ quantity, border, onActiveDropdown, className }) => {
  let links = [];

  if (quantity === 3) {
    links = [
      {
        text: 'Profile',
        link: '/profile',
        icon: <User className="dropdown__icon" />,
      },
      {
        text: 'Your Threads',
        link: '/profile/yourThreads',
        icon: <Hashtag className="dropdown__icon" />,
      },
      {
        text: 'Saved Threads',
        link: '/profile/saved',
        icon: <Save2 className="dropdown__icon" />,
      },
    ];
  } else if (quantity === 2) {
    links = [
      {
        text: 'Notification',
        link: '/notification',
        icon: <Notification className="dropdown__icon" />,
      },
      {
        text: 'Message',
        link: '/message',
        icon: <MessageFavorite className="dropdown__icon" />,
      },
    ];
  } else {
    links = [
      {
        text: 'login',
        link: '/login',
        icon: <LoginCurve className="dropdown__icon" />,
      },
    ];
  }

  return (
    <ul className={`dropdown__list ${border && 'drop-border'} ${className}`}>
      {links.map((link) => (
        <li
          key={link.text}
          className="dropdown__item"
        >
          <Link
            className="dropdown__link"
            onClick={onActiveDropdown}
            to={link.link}
          >
            {link.icon}
            <span>{link.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

DropdownList.defaultProps = {
  border: false,
  className: '',
};

DropdownList.propTypes = {
  quantity: PropTypes.number.isRequired,
  border: PropTypes.bool,
  onActiveDropdown: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default DropdownList;
