import { useEffect } from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncAddThreadComment,
  asyncReceiveThreadDetail,
  clearThreadDetailActionCreator,
} from '../states/threadDetail/action';
import NothingThread from '../components/errorBoundaries/NothingThread';
import ThreadDetail from '../components/thread/ThreadDetail';

const ThreadDetailPage = () => {
  const { threadDetail = {}, authUser } = useSelector((state) => state);
  const { threadId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (threadId) {
      dispatch(asyncReceiveThreadDetail(threadId));
    }

    return () => dispatch(clearThreadDetailActionCreator());
  }, [threadId, dispatch]);

  const handlerSubmitComment = (content) => {
    dispatch(asyncAddThreadComment(threadId, content));
  };

  return (
    <section className={`${threadDetail.body ? 'Layout__children' : 'Layout__children-full'}`}>
      {threadDetail.body ? (
        <article className="ThreadDetailPage">
          <ThreadDetail
            threadDetail={threadDetail}
            handlerSubmitComment={handlerSubmitComment}
            authUser={authUser}
          />
        </article>
      ) : (
        <NothingThread
          withButton
          errorMsg="sorry #PeopleSpeech, we couldn't find the thread details you're looking for..."
          bgColor="#fc728b"
          btnMsg="Create #Thread"
          btnTo="/threads/thread-added"
        />
      )}
    </section>
  );
};

export default ThreadDetailPage;
