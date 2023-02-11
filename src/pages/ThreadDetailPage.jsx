import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/thread/ThreadDetail';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

const ThreadDetailPage = () => {
  const { threadDetail = {} } = useSelector((state) => state);
  const { threadId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  console.log(threadDetail);
  console.log(threadId);

  return (
    <section className="Layout__children">
      <article className="ThreadDetailPage">
        <ThreadDetail threadDetail={threadDetail} />
      </article>
    </section>
  );
};

export default ThreadDetailPage;
