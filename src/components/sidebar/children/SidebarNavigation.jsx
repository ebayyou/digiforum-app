import { Link } from 'react-router-dom';
import { FaComment, FaBookmark, FaHome } from 'react-icons/fa';

const SideBarNavigation = () => {
  return (
    <div className="sidebar__navigation">
      <Link to="/" className="nav__link">
        <FaHome className="nav__icon" />
        <h4 className="nav__title">Home</h4>
      </Link>
      <Link to="/" className="nav__link">
        <FaComment className="nav__icon" />
        <h4 className="nav__title">Your Threads</h4>
      </Link>
      <Link to="/" className="nav__link">
        <FaBookmark className="nav__icon" />
        <h4 className="nav__title">Saved</h4>
      </Link>
    </div>
  );
};

export default SideBarNavigation;
