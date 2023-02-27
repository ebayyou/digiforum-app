import { useDispatch, useSelector } from 'react-redux';
import SideBarNavigation from './children/SidebarNavigation';
import SidebarLeaderboard from './children/SidebarLeaderboard';
import SideBarFooter from './children/SidebarFooter';
import MenuHeader from '../navigation/children/MenuHeader';
import { sidebarStatusActionCreator } from '../../states/sidebarStatus/action';

const SideBar = () => {
  const { leaderboards, sidebarStatus } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandlerSidebar = () => {
    dispatch(sidebarStatusActionCreator(false));
  };

  const topLeaderboard = [
    { lead: leaderboards[0] },
    { lead: leaderboards[1] },
    { lead: leaderboards[2] },
  ];

  return (
    <aside className={`sidebar ${sidebarStatus ? '' : 'visible'}`}>
      <MenuHeader onHandlerNavbar={onHandlerSidebar} />

      <div className="sidebar__overflow">
        <div className="sidebar__wrapper">
          <SideBarNavigation />

          {leaderboards.length >= 1 && <SidebarLeaderboard topLeaderboard={topLeaderboard} />}
        </div>

        <SideBarFooter />
      </div>
    </aside>
  );
};

export default SideBar;
