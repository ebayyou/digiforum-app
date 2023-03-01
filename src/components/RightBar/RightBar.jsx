import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTripadvisor } from 'react-icons/fa';
import { FiUsers, FiAward } from 'react-icons/fi';
import { asyncUnsetAuthUser } from '../../states/authUser/action';
import TrendItems from './children/TrendItems';
import UserItems from './children/UserItems';
import { asyncPopulateUserAndThreads } from '../../states/shared/action';
import { trendByCategoryActionCreator } from '../../states/trends/action';

const RightBar = () => {
  const { trend, authUser, users, threads } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  const onHandlerLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const onClickhandlerTrend = (newTrend) => {
    if (newTrend === trend) {
      dispatch(trendByCategoryActionCreator('all'));
    } else {
      dispatch(trendByCategoryActionCreator(newTrend));
    }
  };

  const usersList = users.slice(501, 507);
  const popularThreads = threads.filter((thread) => ({
    id: thread.id,
    category: thread.category,
    createdAt: thread.createdAt,
  }));

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
            {usersList.map((user) => (
              <UserItems
                key={user.id}
                avatar={user.avatar}
                name={user.name}
                id={user.id}
              />
            ))}
          </div>
        </div>

        <div className="rightBar__box">
          <div className="rightBarBox__header">
            <h3>Whats Happenning ?</h3>
            <FiAward className="rightBarBox__icon" />
          </div>

          <div className="rightBarBox__wrapper">
            {popularThreads.map((popular) => (
              <TrendItems
                key={popular.id}
                onClickhandlerTrend={onClickhandlerTrend}
                trend={popular.category}
                createdAt={popular.createdAt}
                popularTrend={trend === popular.category}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightBar;
