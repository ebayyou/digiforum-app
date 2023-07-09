import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import navigationItem from '../../../utils/navigationItem';

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
