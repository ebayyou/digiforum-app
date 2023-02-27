import { useSelector } from 'react-redux';
import LeaderboardItem from '../components/sidebar/LeaderboardItem';

const LeaderboardsPage = () => {
  const { leaderboards } = useSelector((state) => state);

  return (
    <section className="Layout__children">
      <div className="LeaderboardsPage">
        <div className="boards__headers">
          <h1 className="boards__heading">Top Leaderboards For 24h Threads</h1>
          <p className="boards__desc">
            Leaderboard is used to see the top users with the highest score.
          </p>
        </div>

        <div className="boards__group">
          <div className="boards__info">
            <h2 className="boards__text">Users</h2>
            <h2 className="boards__text">Score</h2>
          </div>

          <div className="boards__wrapper">
            {leaderboards.map((leadboard) => (
              <LeaderboardItem
                key={leadboard.user.id}
                DesktopMode
                {...leadboard}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardsPage;
