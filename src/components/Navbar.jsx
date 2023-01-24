import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Navbar() {
  const { authUser = null } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandlerLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <nav className="navbar">
      <div className="nav__brand">
        <div className="logo__brand nav__brand-logo">DF</div>
        <Link to="/" className="name__brand">
          DigiForum
        </Link>
      </div>

      <ul className="nav__group">
        <li className="nav__list">
          {authUser ? (
            <button className="nav__button" type="button" onClick={onHandlerLogout}>
              Logout
            </button>
          ) : (
            <Link className="nav__button" to="/login">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
