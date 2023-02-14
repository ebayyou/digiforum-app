import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/thread/ThreadDetail';
import { asyncAddThreadComment, asyncReceiveThreadDetail, clearThreadDetailActionCreator } from '../states/threadDetail/action';

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
    <section className="Layout__children">
      <article className="ThreadDetailPage">{threadDetail.body && <ThreadDetail threadDetail={threadDetail} handlerSubmitComment={handlerSubmitComment} authUser={authUser} />}</article>
    </section>
  );
};

export default ThreadDetailPage;
