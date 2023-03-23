import PropTypes from 'prop-types';

const LeaderboardItem = ({ DesktopMode, errorLead, user, score, color }) => {
  return (
    <div className={`leaderboard__item ${DesktopMode && 'leaderboard__item--lbPage'}`}>
      <div className="lb__group lb__group--lbPage">
        {errorLead ? (
          <div className="lb-image-error" />
        ) : (
          <img
            className="lb__img lb__img--lbPage"
            src={user.avatar}
            alt={user.name}
          />
        )}
        <div className="lb__users">
          <h5 className="lb__name--lbPage lb__users-name">
            {DesktopMode ? user.name : user.name.substring(0, 18)}
          </h5>
          <p className="lb__id--lbPage lb__users-email">
            {DesktopMode ? user.email : user.email.substring(0, 18)}
          </p>
        </div>
      </div>
      <div
        className="lb__score lb__score--lbPage"
        style={{ backgroundColor: color }}
      >
        {score}
      </div>
    </div>
  );
};

LeaderboardItem.defaultProps = {
  DesktopMode: false,
  errorLead: false,
  color: '',
};

LeaderboardItem.propTypes = {
  DesktopMode: PropTypes.bool,
  errorLead: PropTypes.bool,
  user: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default LeaderboardItem;
