import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MedalStar } from 'iconsax-react';
import LeaderboardItem from '../LeaderboardItem';

const SidebarLeaderboard = ({ onHandlerSidebar, topLeaderboard }) => {
  return (
    <div className="sidebar__leaderboard">
      <h3 className="leaderboard__heading">Top Leaderboards</h3>

      <div className="leaderboard__wrapper">
        {topLeaderboard.map((topLeadBoard) => (
          <LeaderboardItem
            key={topLeadBoard.user.id}
            {...topLeadBoard}
          />
        ))}
      </div>

      <Link
        className="leaderboard__button"
        to="/leaderboards"
        onClick={onHandlerSidebar}
      >
        <MedalStar
          className="btn__icon"
          size="32"
          variant="Bold"
        />
        <h4 className="btn__text">See all Leaderboards</h4>
      </Link>
    </div>
  );
};

SidebarLeaderboard.defaultProps = {
  onHandlerSidebar: false,
};

SidebarLeaderboard.propTypes = {
  topLeaderboard: PropTypes.array.isRequired,
  onHandlerSidebar: PropTypes.func,
};

export default SidebarLeaderboard;
