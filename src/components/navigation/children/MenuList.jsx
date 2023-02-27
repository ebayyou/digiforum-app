import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuList = ({ desktopMode }) => {
  return (
    <ul className={`${desktopMode ? 'menu-mode' : 'menu'}`}>
      <li className={`${desktopMode ? 'menu__list-mode' : 'menu__list'}`}>
        <Link
          className={`${desktopMode ? 'menu__link-mode' : 'menu__link'}`}
          to="/"
        >
          Home
        </Link>
      </li>
      <li className={`${desktopMode ? 'menu__list-mode' : 'menu__list'}`}>
        <Link
          className={`${desktopMode ? 'menu__link-mode' : 'menu__link'}`}
          to="/about"
        >
          About
        </Link>
      </li>
      <li className={`${desktopMode ? 'menu__list-mode' : 'menu__list'}`}>
        <Link
          className={`${desktopMode ? 'menu__link-mode' : 'menu__link'}`}
          to="/community"
        >
          Community
        </Link>
      </li>
      <li className={`${desktopMode ? 'menu__list-mode' : 'menu__list'}`}>
        <Link
          className={`${desktopMode ? 'menu__link-mode' : 'menu__link'}`}
          to="/threads"
        >
          Threads
        </Link>
      </li>
      <li className={`${desktopMode ? 'menu__list-mode' : 'menu__list'}`}>
        <Link
          className={`${desktopMode ? 'menu__link-mode' : 'menu__link'}`}
          to="/leaderboards"
        >
          Leaderboards
        </Link>
      </li>
    </ul>
  );
};

MenuList.defaultProps = {
  desktopMode: false,
};

MenuList.propTypes = {
  desktopMode: PropTypes.bool,
};

export default MenuList;
