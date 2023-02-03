import Avatar from '../public/images/Avatar_1.png';

const LeaderboardItem = () => {
  return (
    <div className="leaderboard__item">
      <div className="lb__group">
        <img className="lb__img" src={Avatar} alt="example avatar" />
        <div className="lb__users">
          <h5>John doe</h5>
          <p>users-1</p>
        </div>
      </div>
      <div className="lb__score">10</div>
    </div>
  );
};

export default LeaderboardItem;
