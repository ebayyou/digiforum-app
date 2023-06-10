import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { limitString } from '../../utils';
import { asyncRemoveSavethread, asyncSaveThread } from '../../states/saveThreads/action';
import ThreadItemOwner, { userShape } from './children/thread/ThreadItemOwner';
import ThreadAction from './children/thread/ThreadAction';
import Votes from './children/Votes';

const ThreadList = ({ userThread, threads }) => {
  const { authUser = {} } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerActionSavedThread = (id) => {
    if (authUser) {
      const findThread = threads.find((thread) => thread.id === id);
      dispatch(asyncSaveThread(findThread));
    } else {
      alert('you have login');
    }
  };

  const handlerActionRemoveSavedThread = (id) => {
    if (authUser) {
      dispatch(asyncRemoveSavethread(id));
    } else {
      alert('you have login');
    }
  };

  return (
    <div className={` thread__list ${userThread ? 'userthread' : ''}`}>
      {threads.map(
        ({ id, title, user, createdAt, category, body, totalComments, upVotesBy, downVotesBy }) => (
          <div
            className="thread"
            key={id}
          >
            <Link
              to={`/threads/${id}`}
              className="thread__heading"
            >
              {title}
            </Link>

            <ThreadItemOwner
              owner={user}
              createdAt={createdAt}
              category={category}
            />

            <div
              className="thread__desc"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(limitString(body, 200)) }}
            />

            <div className="thread__wrapper">
              <ThreadAction
                id={id}
                totalComments={totalComments}
                handlerActionSavedThread={handlerActionSavedThread}
                handlerActionRemoveSavedThread={handlerActionRemoveSavedThread}
              />
              <Votes
                isThread
                threadId={id}
                upVotes={upVotesBy}
                downVotes={downVotesBy}
                like={authUser && upVotesBy.includes(authUser.id)}
                unlike={authUser && downVotesBy.includes(authUser.id)}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadList.defaultProps = {
  userThread: false,
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  userThread: PropTypes.bool,
};

export default ThreadList;
