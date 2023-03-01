import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import ThreadList from '../components/thread/ThreadList';

const Threads = () => {
  const { trend, threads = [], users = [] } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  const threadsAndUser = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  const threadFilters = threads.filter((thread) => thread.category === trend);
  const threadsAndUserFilters = threadFilters.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return <ThreadList threads={trend === 'all' ? threadsAndUser : threadsAndUserFilters} />;
};

export default Threads;
