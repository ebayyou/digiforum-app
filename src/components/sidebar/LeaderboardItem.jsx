import PropTypes from 'prop-types';

const LeaderboardItem = ({ DesktopMode, score, user }) => {
  return (
    <div className={`leaderboard__item ${DesktopMode && 'leaderboard__item--lbPage'}`}>
      <div className="lb__group lb__group--lbPage">
        <img className="lb__img lb__img--lbPage" src={user.avatar} alt={user.name} />
        <div className="lb__users">
          <h5 className="lb__name--lbPage lb__users-name">{DesktopMode ? user.name : user.name.substring(0, 10)}</h5>
          <p className="lb__id--lbPage lb__users-email">{DesktopMode ? user.email : user.email.substring(0, 10)}</p>
        </div>
      </div>
      <div className="lb__score lb__score--lbPage">{score}</div>
    </div>
  );
};

LeaderboardItem.defaultProps = {
  DesktopMode: false,
};

LeaderboardItem.propTypes = {
  DesktopMode: PropTypes.bool,
  score: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

export default LeaderboardItem;
