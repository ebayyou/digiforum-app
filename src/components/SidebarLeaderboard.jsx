import { Link } from 'react-router-dom';
import { FaTrophy } from 'react-icons/fa';
import LeaderboardItem from './SidebarLBItem';

const SidebarLeaderboard = () => {
  return (
    <div className="sidebar__leaderboard">
      <h4 className="leaderboard__heading">Leaderboards</h4>

      <LeaderboardItem />
      <LeaderboardItem />
      <LeaderboardItem />

      <Link className="leaderboard__button" to="/leaderboards">
        <FaTrophy className="btn__icon" />
        <h5 className="btn__text">See all Leaderboards</h5>
      </Link>
    </div>
  );
};

export default SidebarLeaderboard;
