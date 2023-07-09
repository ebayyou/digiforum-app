import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Medal, Profile2User } from 'iconsax-react';
import { asyncPopulateUserAndThreads } from '../../states/shared/action';
import { trendByCategoryActionCreator } from '../../states/trends/action';
import { rightbarStatusActionCreator } from '../../states/menuStatus/action';
import TrendItems from './children/TrendItems';
import UserItems from './children/UserItems';
import RightbarBoxHeader from './children/RightbarBoxHeader';
import RightbarBoxLink from './children/RightbarBoxLink';
import Community from './children/Community';
import WrapperError from '../errorBoundaries/WrapperError';

const RightBar = () => {
  const { trend, users, threads, menuStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  const onHandlerRightbar = () => dispatch(rightbarStatusActionCreator(false));

  const onClickhandlerTrend = (newTrend) => {
    if (newTrend === trend) {
      dispatch(trendByCategoryActionCreator('all'));
    } else {
      dispatch(trendByCategoryActionCreator(newTrend));
    }

    onHandlerRightbar();
    navigate('/threads');
  };

  const usersList = users.slice(6, 12);
  const popularTrends = threads.map((thread) => ({
    id: thread.id,
    createdAt: thread.createdAt,
    trending: thread.category,
  }));

  return (
    <>
      <div
        aria-hidden="true"
        onTouchStart={onHandlerRightbar}
        onClick={onHandlerRightbar}
        className={menuStatus.rightbarStatus ? 'absolute__element' : null}
      />
      <aside className={menuStatus.rightbarStatus ? 'rightBar active' : 'rightBar'}>
        <div className="rightBar__wrapper">
          <Community onHandlerRightbar={onHandlerRightbar} />

          <div className="rightBar__box">
            <RightbarBoxHeader
              title="Whats Happenning ?"
              Icon={Medal}
            />

            <ErrorBoundary fallback={<WrapperError height={200} />}>
              <div className="rightBarBox__wrapper">
                {popularTrends.map(({ id, trending, createdAt }) => (
                  <TrendItems
                    key={id}
                    onClickhandlerTrend={onClickhandlerTrend}
                    trend={trending}
                    createdAt={createdAt}
                    popularTrend={trend === trending}
                  />
                ))}
              </div>
            </ErrorBoundary>
          </div>

          <div className="rightBar__box">
            <RightbarBoxHeader
              title="List of Users"
              Icon={Profile2User}
            />

            <ErrorBoundary fallback={<WrapperError height={280} />}>
              <div className="rightBarBox__wrapper">
                {usersList.map((user) => (
                  <UserItems
                    key={user.id}
                    avatar={user.avatar}
                    name={user.name}
                    id={user.id}
                    onHandlerRightbar={onHandlerRightbar}
                  />
                ))}
              </div>
            </ErrorBoundary>

            <RightbarBoxLink
              to="/users"
              onHandlerRightbar={onHandlerRightbar}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default RightBar;
