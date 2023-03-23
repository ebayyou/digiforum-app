import { useDispatch, useSelector } from 'react-redux';
import SideBarNavigation from './children/SidebarNavigation';
import SidebarLeaderboard from './children/SidebarLeaderboard';
import SideBarFooter from './children/SidebarFooter';
import MenuHeader from '../navigation/children/MenuHeader';
import { sidebarStatusActionCreator } from '../../states/menuStatus/action';
import WrapperError from '../errorBoundaries/WrapperError';

const SideBar = () => {
  const { leaderboards, sidebarStatus } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandlerSidebar = () => {
    dispatch(sidebarStatusActionCreator(false));
  };

  const topLeaderboard = [
    { ...leaderboards[0], color: '#d1caff' },
    { ...leaderboards[1], color: '#ffcaca' },
    { ...leaderboards[2], color: '#caecff' },
  ];

  return (
    <aside className={`sidebar ${sidebarStatus ? '' : 'visible'}`}>
      <MenuHeader onHandlerNavbar={onHandlerSidebar} />

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
  );
};

export default SideBar;
