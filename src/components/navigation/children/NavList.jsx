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

const navList = ({ desktopMode }) => {
  return (
    <ul className={`${desktopMode ? 'navlist-mode' : 'navlist'}`}>
      {navigationItem.map(({ id, text, link, icon, iconActive }) => (
        <li
          key={id}
          className={`${desktopMode ? 'navlist__list-mode' : 'navlist__list'}`}
        >
          {desktopMode ? (
            <NavLink
              className={`${desktopMode ? 'navlist__link-mode' : 'navlist__link'}`}
              to={link}
            >
              {text}
            </NavLink>
          ) : (
            <NavLink
              className={`${desktopMode ? 'navlist__link-mode' : 'navlist__link'}`}
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

navList.defaultProps = {
  desktopMode: false,
};

navList.propTypes = {
  desktopMode: PropTypes.bool,
};

export default navList;
