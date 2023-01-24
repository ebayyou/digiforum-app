import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import ThreadList from './ThreadList';
import Navbar from '../components/Navbar';

function HomePage() {
  const { threads = {} } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  return (
    <div className="drop drop__blur homepage">
      <div className="drop__blur">
        <header>
          <Navbar />
        </header>

        <main>
          <h1>Home Page</h1>
          <ThreadList threads={threads} />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
