import { useSelector } from 'react-redux';
import LeaderboardItem from '../components/sidebar/LeaderboardItem';

const LeaderboardsPage = () => {
  const { leaderboards } = useSelector((state) => state);

  const leadmap = leaderboards.map((leadboard) => (
    <LeaderboardItem
      key={leadboard.user.id}
      DesktopMode
      {...leadboard}
    />
  ));

  return (
    <section className="Layout__children">
      <div className="LeaderboardsPage">
        <div className="headers__page">
          <h1 className="heading__page">Top Leaderboards For 24h Threads</h1>
          <p className="desc__page">
            Leaderboard is used to see the top users with the highest score.
          </p>
        </div>

        <div className="boards__group">
          <div className="boards__info">
            <h2 className="boards__text">Users</h2>
            <h2 className="boards__text">Score</h2>
          </div>

          <div className="boards__wrapper">{leaderboards.length > 0 ? leadmap : null}</div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardsPage;
