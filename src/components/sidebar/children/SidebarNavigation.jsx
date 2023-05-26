import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Home, Grammerly, Hashtag, Quant, MedalStar } from 'iconsax-react';

const navigationItem = [
  {
    id: '1',
    text: 'Home',
    link: '/',
    icon: <Home className="nav__icon" />,
    iconActive: (
      <Home
        className="nav__icon-active"
        variant="Bold"
      />
    ),
  },
  {
    id: '2',
    text: 'About',
    link: '/about',
    icon: <Grammerly className="nav__icon" />,
    iconActive: (
      <Grammerly
        className="nav__icon-active"
        variant="Bold"
      />
    ),
  },
  {
    id: '3',
    text: 'Threads',
    link: '/threads',
    icon: <Hashtag className="nav__icon" />,
    iconActive: (
      <Hashtag
        className="nav__icon-active"
        variant="Bold"
      />
    ),
  },
  {
    id: '4',
    text: 'Community',
    link: '/community',
    icon: <Quant className="nav__icon" />,
    iconActive: (
      <Quant
        className="nav__icon-active"
        variant="Bold"
      />
    ),
  },
  {
    id: '5',
    text: 'Leaderboards',
    link: '/leaderboards',
    icon: <MedalStar className="nav__icon" />,
    iconActive: (
      <MedalStar
        className="nav__icon-active"
        variant="Bold"
      />
    ),
  },
];

const SideBarNavigation = ({ onHandlerSidebar }) => {
  return (
    <ul className="sidebar__navigation">
      {navigationItem.map(({ id, text, link, icon }) => (
        <li
          key={id}
          className="nav__item"
        >
          <NavLink
            to={link}
            onClick={onHandlerSidebar}
            className="nav__link"
          >
            <div className="nav__wrap">{icon}</div>
            <h4 className="nav__title">{text}</h4>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

SideBarNavigation.defaultProps = {
  onHandlerSidebar: false,
};

SideBarNavigation.propTypes = {
  onHandlerSidebar: PropTypes.func,
};

export default SideBarNavigation;
