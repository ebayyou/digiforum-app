import { useDispatch, useSelector } from 'react-redux';
import { sidebarStatusActionCreator } from '../../states/menuStatus/action';
import SideBarNavigation from './children/SidebarNavigation';
import SidebarLeaderboard from './children/SidebarLeaderboard';
import SideBarFooter from './children/SidebarFooter';
import WrapperError from '../errorBoundaries/WrapperError';
import SidebarHeader from './children/SidebarHeader';

const SideBar = () => {
  const { leaderboards, menuStatus } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandlerSidebar = () => dispatch(sidebarStatusActionCreator(false));

  const topLeaderboard = [
    { ...leaderboards[0], color: '#d1caff' },
    { ...leaderboards[1], color: '#ffcaca' },
    { ...leaderboards[2], color: '#caecff' },
  ];

  return (
    <>
      <div
        onTouchStart={onHandlerSidebar}
        className={menuStatus.sidebarStatus ? 'absolute__element' : null}
      />
      <aside className={menuStatus.sidebarStatus ? 'sidebar active' : 'sidebar'}>
        <SidebarHeader onHandlerSidebar={onHandlerSidebar} />

        <div className="sidebar__overflow">
          <div className="sidebar__wrapper">
            <SideBarNavigation onHandlerSidebar={onHandlerSidebar} />

            {leaderboards.length > 0 ? (
              <SidebarLeaderboard
                onHandlerSidebar={onHandlerSidebar}
                topLeaderboard={topLeaderboard}
              />
            ) : (
              <WrapperError height={220} />
            )}
          </div>

          <SideBarFooter />
        </div>
      </aside>
    </>
  );
};

export default SideBar;
