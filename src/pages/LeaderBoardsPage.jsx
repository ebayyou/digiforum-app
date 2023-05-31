import { ErrorBoundary } from 'react-error-boundary';
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

  const leadError = (
    <LeaderboardItem
      DesktopMode
      errorLead
      user={{ avatar: '', name: 'Something Went Wrong', email: 'error404@gmail.com' }}
      score={999}
    />
  );

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

          <ErrorBoundary fallback={leadError}>
            <div className="boards__wrapper">{leadmap}</div>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardsPage;
