import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import ThreadList from '../components/thread/ThreadList';
import NothingThread from '../components/errorBoundaries/NothingThread';
import ThreadAdded from '../components/thread/children/ThreadAdded';
import { filtersThreadsAndUsersByTrend, threadsAndUserCombine } from '../utils/utilsForUserThread';

const ThreadsPage = () => {
  const { trend, threads = [], users = [] } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  const threadsAndUser = threadsAndUserCombine(threads, users);
  const threadsAndUserByTrend = filtersThreadsAndUsersByTrend(threads, trend, users);

  return (
    <section className="Layout__children">
      <ThreadAdded />

      <ErrorBoundary
        fallback={
          <NothingThread
            withInfoBox
            errorMsg="Create a thread right now, if you want to be the first for the discussion on DigiForum"
          />
        }
      >
        <ThreadList threads={trend === 'all' ? threadsAndUser : threadsAndUserByTrend} />
      </ErrorBoundary>
    </section>
  );
};

export default ThreadsPage;
