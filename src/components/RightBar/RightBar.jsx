import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTripadvisor } from 'react-icons/fa';
import { FiUsers, FiAward } from 'react-icons/fi';
import TrendItems from './children/TrendItems';
import UserItems from './children/UserItems';
import { asyncUnsetAuthUser } from '../../states/authUser/action';

const RightBar = () => {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandlerLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <aside className="rightBar">
      <div className="rightBar__group">
        <div className="rightBar__box rightBar-flex rightBar-relative rightBar-w-s">
          <div className="rightBar__badge">
            <FaTripadvisor className="badge__icon" />
            <p className="badge__text">User Factor</p>
          </div>

          {authUser ? (
            <button
              className="rightBar__button"
              type="button"
              onClick={onHandlerLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              className="rightBar__button"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>

        <div className="rightBar__box">
          <div className="rightBarBox__header">
            <h3>List of Users</h3>
            <FiUsers className="rightBarBox__icon" />
          </div>

          <div className="rightBarBox__wrapper">
            {Array(6).fill(
              <UserItems
                avatar="/images/main_avatar.png"
                name="Ebayyou Anggoro"
                id="user-1"
              />
            )}
          </div>
        </div>

        <div className="rightBar__box">
          <div className="rightBarBox__header">
            <h3>Whats Happenning ?</h3>
            <FiAward className="rightBarBox__icon" />
          </div>

          <div className="rightBarBox__wrapper">
            {Array(6).fill(
              <TrendItems
                trend="front-end"
                createdAt="2h ago"
              />
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightBar;
