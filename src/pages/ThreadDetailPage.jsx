import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import {
  asyncReceiveThreadDetail,
  clearThreadDetailActionCreator,
} from '../states/threadDetail/action';
import NothingThread from '../components/errorBoundaries/NothingThread';
import ThreadDetail from '../components/thread/ThreadDetail';

const ThreadDetailPage = () => {
  const { threadDetail = {} } = useSelector((state) => state);
  const { threadId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (threadId) {
      dispatch(asyncReceiveThreadDetail(threadId));
    }

    return () => dispatch(clearThreadDetailActionCreator());
  }, [threadId, dispatch]);

  return (
    <ErrorBoundary
      fallback={
        <NothingThread
          withButton
          errorMsg="sorry #PeopleSpeech, we couldn't find the thread details you're looking for..."
          bgColor="#fc728b"
          btnMsg="Create #Thread"
          btnTo="/threads/thread-added"
        />
      }
    >
      <section className={`${threadDetail.body ? 'Layout__children' : 'Layout__children-full'}`}>
        <article className="ThreadDetailPage">
          {threadDetail.body ? <ThreadDetail threadId={threadId} /> : null}
        </article>
      </section>
    </ErrorBoundary>
  );
};

export default ThreadDetailPage;
