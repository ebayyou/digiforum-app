import { NavLink } from 'react-router-dom';
import navigationItem from '../../../utils/navigationItem';

const navList = () => {
  return (
    <ul className="navlist">
      {navigationItem.map(({ id, link, icon, iconActive }) => (
        <li
          key={id}
          className="navlist__list"
        >
          <NavLink
            className="navlist__link"
            to={link}
          >
            {({ isActive }) => (isActive ? iconActive : icon)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default navList;
