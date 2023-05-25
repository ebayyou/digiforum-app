import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Medal, Profile2User } from 'iconsax-react';
// import { asyncUnsetAuthUser } from '../../states/authUser/action';
import { asyncPopulateUserAndThreads } from '../../states/shared/action';
import { trendByCategoryActionCreator } from '../../states/trends/action';
import { rightbarStatusActionCreator } from '../../states/menuStatus/action';
import TrendItems from './children/TrendItems';
import UserItems from './children/UserItems';
import WrapperError from '../errorBoundaries/WrapperError';

const RightBar = () => {
  const { trend, users, threads, menuStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  const onHandlerRightbar = () => dispatch(rightbarStatusActionCreator(false));

  // const onHandlerLogout = () => {
  //   dispatch(asyncUnsetAuthUser());
  //   onHandlerRightbar();
  // };

  const onClickhandlerTrend = (newTrend) => {
    if (newTrend === trend) {
      dispatch(trendByCategoryActionCreator('all'));
    } else {
      dispatch(trendByCategoryActionCreator(newTrend));
    }

    onHandlerRightbar();
    navigate('/threads');
  };

  const usersList = users.slice(501, 507);
  const popularTrends = threads.map((thread) => ({
    id: thread.id,
    createdAt: thread.createdAt,
    trending: thread.category,
  }));

  return (
    <>
      <div
        onTouchStart={onHandlerRightbar}
        className={menuStatus.rightbarStatus ? 'absolute__element' : null}
      />
      <aside className={menuStatus.rightbarStatus ? 'rightBar active' : 'rightBar'}>
        <div className="rightBar__wrapper">
          <div className="rightBar__box">
            <div className="rightBarBox__header">
              <h3>List of Users</h3>
              <Profile2User
                size="24"
                className="rightBarBox__icon"
              />
            </div>

            <div className="rightBarBox__wrapper">
              {usersList.length > 0 ? (
                usersList.map((user) => (
                  <UserItems
                    key={user.id}
                    avatar={user.avatar}
                    name={user.name}
                    id={user.id}
                    onHandlerRightbar={onHandlerRightbar}
                  />
                ))
              ) : (
                <WrapperError height={280} />
              )}
            </div>

            <Link
              to="/users"
              className="rightBarBox__button"
              onClick={onHandlerRightbar}
            >
              see more
            </Link>
          </div>

          <div className="rightBar__box">
            <div className="rightBarBox__header">
              <h3>Whats Happenning ?</h3>
              <Medal
                size="24"
                className="rightBarBox__icon"
              />
            </div>

            <div className="rightBarBox__wrapper">
              {popularTrends.length > 0 ? (
                popularTrends.map(({ id, trending, createdAt }) => (
                  <TrendItems
                    key={id}
                    onClickhandlerTrend={onClickhandlerTrend}
                    trend={trending}
                    createdAt={createdAt}
                    popularTrend={trend === trending}
                  />
                ))
              ) : (
                <WrapperError height={200} />
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default RightBar;
