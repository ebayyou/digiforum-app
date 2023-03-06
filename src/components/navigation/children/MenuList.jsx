import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const navigationItem = [
  { id: '1', item: 'Home', link: '/' },
  { id: '2', item: 'About', link: '/about' },
  { id: '3', item: 'Community', link: '/community' },
  { id: '4', item: 'Threads', link: '/threads' },
  { id: '5', item: 'Leaderboards', link: '/leaderboards' },
];

const MenuList = ({ desktopMode, onHandlerNavbar }) => {
  return (
    <ul className={`${desktopMode ? 'menu-mode' : 'menu'}`}>
      {navigationItem.map(({ id, item, link }) => (
        <li
          key={id}
          className={`${desktopMode ? 'menu__list-mode' : 'menu__list'}`}
        >
          <Link
            className={`${desktopMode ? 'menu__link-mode' : 'menu__link'}`}
            onClick={onHandlerNavbar}
            to={link}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MenuList.defaultProps = {
  desktopMode: false,
  onHandlerNavbar: () => {},
};

MenuList.propTypes = {
  desktopMode: PropTypes.bool,
  onHandlerNavbar: PropTypes.func,
};

export default MenuList;
