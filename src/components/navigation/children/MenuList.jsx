import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Home, EmojiSad, Hashtag, Quant, MedalStar } from 'iconsax-react';

const navigationItem = [
  {
    id: '1',
    text: 'Home',
    link: '/',
    icon: (
      <Home
        className="link__icon"
        size="34"
        color="#999999"
      />
    ),
    iconActive: (
      <Home
        className="link__icon-active"
        size="34"
        color="#d1caff"
        variant="Bold"
      />
    ),
  },
  {
    id: '2',
    text: 'About',
    link: '/about',
    icon: (
      <EmojiSad
        className="link__icon"
        size="34"
        color="#999999"
      />
    ),
    iconActive: (
      <EmojiSad
        className="link__icon-active"
        size="34"
        color="#d1caff"
        variant="Bold"
      />
    ),
  },
  {
    id: '3',
    text: 'Threads',
    link: '/threads',
    icon: (
      <Hashtag
        className="link__icon"
        size="34"
        color="#999999"
      />
    ),
    iconActive: (
      <Hashtag
        className="link__icon-active"
        size="34"
        color="#d1caff"
        variant="Bold"
      />
    ),
  },
  {
    id: '4',
    text: 'Community',
    link: '/community',
    icon: (
      <Quant
        className="link__icon"
        size="34"
        color="#999999"
      />
    ),
    iconActive: (
      <Quant
        className="link__icon-active"
        size="34"
        color="#d1caff"
        variant="Bold"
      />
    ),
  },
  {
    id: '5',
    text: 'Leaderboards',
    link: '/leaderboards',
    icon: (
      <MedalStar
        className="link__icon"
        size="34"
        color="#999999"
      />
    ),
    iconActive: (
      <MedalStar
        className="link__icon-active"
        size="34"
        color="#d1caff"
        variant="Bold"
      />
    ),
  },
];

const MenuList = ({ desktopMode }) => {
  return (
    <ul className={`${desktopMode ? 'menu-mode' : 'menu'}`}>
      {navigationItem.map(({ id, text, link, icon, iconActive }) => (
        <li
          key={id}
          className={`${desktopMode ? 'menu__list-mode' : 'menu__list'}`}
        >
          {desktopMode ? (
            <NavLink
              className={`${desktopMode ? 'menu__link-mode' : 'menu__link'}`}
              to={link}
            >
              {text}
            </NavLink>
          ) : (
            <NavLink
              className={`${desktopMode ? 'menu__link-mode' : 'menu__link'}`}
              to={link}
            >
              {({ isActive }) => (isActive ? iconActive : icon)}
            </NavLink>
          )}
        </li>
      ))}
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
