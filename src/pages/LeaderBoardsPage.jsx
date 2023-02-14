import { useSelector } from 'react-redux';
import LeaderboardItem from '../components/sidebar/LeaderboardItem';

const LeaderboardsPage = () => {
  const { leaderboards } = useSelector((state) => state);

  return (
    <section className="Layout__children">
      <div className="LeaderboardsPage">
        <h1 className="boards__heading">Leaderboards</h1>
        <p className="boards__desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores totam excepturi laboriosam iure fuga necessitatibus at debitis facilis, obcaecati suscipit sunt voluptatibus. Ut deleniti expedita doloremque, odit qui ex ratione.
        </p>

        <div className="boards__headers">
          <h2 className="boards__head">Users</h2>
          <h4 className="boards__score">Score</h4>
        </div>

        {leaderboards.map((leadboard) => (
          <LeaderboardItem key={leadboard.user.id} DesktopMode {...leadboard} />
        ))}
      </div>
    </section>
  );
};

export default LeaderboardsPage;
