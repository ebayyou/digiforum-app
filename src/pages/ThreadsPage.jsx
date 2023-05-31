import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import ThreadList from '../components/thread/ThreadList';
import NothingThread from '../components/errorBoundaries/NothingThread';
import ThreadAdded from '../components/thread/children/ThreadAdded';

const ThreadsPage = () => {
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

  return (
    <section className="Layout__children">
      <ThreadAdded />

      {threadsAndUser.length > 0 ? (
        <ErrorBoundary
          fallback={
            <NothingThread
              withInfoBox
              errorMsg="Create a thread right now, if you want to be the first for the discussion on DigiForum"
            />
          }
        >
          <ThreadList threads={trend === 'all' ? threadsAndUser : threadsAndUserFilters} />
        </ErrorBoundary>
      ) : null}
    </section>
  );
};

export default ThreadsPage;
