import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { FaComment, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const ThreadAction = ({
  handlerActionSavedThread,
  handlerActionRemoveSavedThread,
  id,
  totalComments,
}) => {
  const { savedThreads = [] } = useSelector((state) => state);

  const checkConditionThreadSaved = () => {
    let condition;
    if (savedThreads.length > 0) {
      savedThreads.forEach((thread) => {
        if (thread.condition && thread.id === id) {
          condition = thread.condition;
        }
      });
    }
    return condition;
  };

  const toggleSavedThread = () => {
    const threadCondition = checkConditionThreadSaved();

    if (threadCondition) handlerActionRemoveSavedThread(id);
    else handlerActionSavedThread(id);
  };

  const bookmarkCondition = checkConditionThreadSaved();

  return (
    <div className="thread__action">
      <button
        type="button"
        className="wrapper__icon"
        onClick={toggleSavedThread}
      >
        {bookmarkCondition ? <FaBookmark className="saved" /> : <FaRegBookmark className="saved" />}
      </button>
      <HashLink
        to={`/threadDetail/${id}#comment`}
        className="thread__comment"
      >
        <FaComment className="comment" />
        <span>Add Response</span>
        <span className="comment__total">{totalComments}</span>
      </HashLink>
    </div>
  );
};

ThreadAction.propTypes = {
  id: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  handlerActionSavedThread: PropTypes.func.isRequired,
  handlerActionRemoveSavedThread: PropTypes.func.isRequired,
};

export default ThreadAction;
