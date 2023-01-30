import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import ThreadList from '../components/ThreadList';
import Layout from '../components/Layout';

function HomePage() {
  const { threads = {} } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  return (
    <Layout>
      <ThreadList threads={threads} />
    </Layout>
  );
}

export default HomePage;
