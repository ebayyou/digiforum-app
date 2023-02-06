import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import ThreadList from '../components/ThreadList';
// import Layout from '../components/Layout';

const HomePage = () => {
  const { threads = [] } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  return <ThreadList threads={threads} />;
};

export default HomePage;
