import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { FaComment, FaRegBookmark } from 'react-icons/fa'; // FaBookmark
import { useDispatch, useSelector } from 'react-redux';
import { saveConditionActionType } from '../../../../states/savedThread/action';

const ThreadAction = ({
  handlerActionSavedThread,
  handlerActionRemoveSavedThread,
  id,
  totalComments,
}) => {
  const { savedThread = { threads: [], condition: false } } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(savedThread);

  const toggleSavedThread = () => {
    if (!savedThread.condition) {
      console.log('saved');
      handlerActionSavedThread(id);
      dispatch(saveConditionActionType());
    } else {
      console.log('removed');
      handlerActionRemoveSavedThread(id);
      dispatch(saveConditionActionType());
    }
  };

  return (
    <div className="thread__action">
      <button
        type="button"
        className="wrapper__icon"
        onClick={toggleSavedThread}
      >
        <FaRegBookmark className="saved" />
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
