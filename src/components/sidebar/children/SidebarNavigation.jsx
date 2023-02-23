import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FiHash, FiUsers } from 'react-icons/fi';
import { FaBookmark } from 'react-icons/fa';

const SideBarNavigation = () => {
  return (
    <div className="sidebar__navigation">
      <Link
        to="/profile"
        className="nav__link"
      >
        <div className="nav__wrap">
          <FiUsers className="nav__icon" />
        </div>
        <h4 className="nav__title">Profile</h4>
      </Link>
      <HashLink
        to="/profile#Yourthreads"
        className="nav__link"
      >
        <div className="nav__wrap">
          <FiHash className="nav__icon" />
        </div>
        <h4 className="nav__title">Your Threads</h4>
      </HashLink>
      <HashLink
        to="/profile#saved"
        className="nav__link"
      >
        <div className="nav__wrap">
          <FaBookmark className="nav__icon" />
        </div>
        <h4 className="nav__title">Saved</h4>
      </HashLink>
    </div>
  );
};

export default SideBarNavigation;
