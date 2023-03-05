import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiHash, FiUsers } from 'react-icons/fi';
import { FaBookmark } from 'react-icons/fa';

const navigationItem = [
  {
    id: '1',
    item: 'Profile',
    link: '/profile',
    icon: <FiUsers className="nav__icon" />,
  },
  {
    id: '2',
    item: 'Your Threads',
    link: '/profile/yourThreads',
    icon: <FiHash className="nav__icon" />,
  },
  {
    id: '3',
    item: 'Saved',
    link: '/profile/saved',
    icon: <FaBookmark className="nav__icon" />,
  },
];

const SideBarNavigation = ({ onHandlerSidebar }) => {
  return (
    <div className="sidebar__navigation">
      {navigationItem.map(({ id, item, link, icon }) => (
        <Link
          key={id}
          to={link}
          onClick={onHandlerSidebar}
          className="nav__link"
        >
          <div className="nav__wrap">{icon}</div>
          <h4 className="nav__title">{item}</h4>
        </Link>
      ))}
    </div>
  );
};

SideBarNavigation.defaultProps = {
  onHandlerSidebar: false,
};

SideBarNavigation.propTypes = {
  onHandlerSidebar: PropTypes.func,
};

export default SideBarNavigation;
