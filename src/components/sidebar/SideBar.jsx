import { useSelector } from 'react-redux';
import SidebarHeader from './children/SidebarHeaders';
import SideBarNavigation from './children/SidebarNavigation';
import SidebarLeaderboard from './children/SidebarLeaderboard';
import SideBarFooter from './children/SidebarFooter';

const SideBar = () => {
  const { leaderboards } = useSelector((state) => state);

  const topLeaderboard = [{ lead: leaderboards[0] }, { lead: leaderboards[1] }, { lead: leaderboards[2] }];

  return (
    <aside className="sidebar visible">
      <SidebarHeader />

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
