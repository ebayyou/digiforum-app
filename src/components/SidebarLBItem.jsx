import PropTypes from 'prop-types';
import Avatar from '../public/images/Avatar_1.png';

const LeaderboardItem = ({ lbMode }) => {
  return (
    <div className={`leaderboard__item ${lbMode ? 'leaderboard__item--lbPage' : ''}`}>
      <div className="lb__group lb__group--lbPage">
        <img className="lb__img lb__img--lbPage" src={Avatar} alt="example avatar" />
        <div className="lb__users">
          <h5 className="lb__name--lbPage">John doe</h5>
          <p className="lb__id--lbPage">users-1</p>
        </div>
      </div>
      <div className="lb__score">10</div>
    </div>
  );
};

LeaderboardItem.propTypes = {
  // eslint-disable-next-line react/require-default-props
  lbMode: PropTypes.bool,
};

export default LeaderboardItem;
