import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import { Save2, Message2 } from 'iconsax-react';

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
        {bookmarkCondition ? (
          <Save2
            className="saved"
            size="24"
            variant="Bold"
          />
        ) : (
          <Save2
            className="saved"
            size="24"
          />
        )}
      </button>
      <HashLink
        to={`/threads/${id}#comment`}
        className="thread__comment"
      >
        <Message2
          className="comment"
          size="22"
          variant="Bold"
        />
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
