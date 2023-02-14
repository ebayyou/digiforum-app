import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrophy } from 'react-icons/fa';
import LeaderboardItem from '../LeaderboardItem';

const SidebarLeaderboard = ({ topLeaderboard }) => {
  return (
    <div className="sidebar__leaderboard">
      <h4 className="leaderboard__heading">Leaderboards</h4>

      {topLeaderboard.map((topLeadBoard) => (
        <LeaderboardItem key={topLeadBoard.lead.user.id} {...topLeadBoard.lead} />
      ))}

      <Link className="leaderboard__button" to="/leaderboards">
        <FaTrophy className="btn__icon" />
        <h5 className="btn__text">See all Leaderboards</h5>
      </Link>
    </div>
  );
};

SidebarLeaderboard.propTypes = {
  topLeaderboard: PropTypes.array.isRequired,
};

export default SidebarLeaderboard;
