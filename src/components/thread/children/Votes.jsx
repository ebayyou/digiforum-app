import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { asyncToggleDownVoteThread, asyncToggleUpVoteThread } from '../../../states/threads/action';

const Votes = ({ threadId, thread, upVotes, downVotes }) => {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();
  const like = authUser && upVotes.includes(authUser.id);
  const unlike = authUser && downVotes.includes(authUser.id);

  const upVoteToggleButtonThread = () => {
    if (authUser) {
      dispatch(asyncToggleUpVoteThread(threadId));
    } else {
      alert('You have Login!!!');
    }
  };

  const downVoteToggleButtonThread = () => {
    if (authUser) {
      dispatch(asyncToggleDownVoteThread(threadId));
    } else {
      alert('You have Login!!!');
    }
  };

  return (
    <div className="votes__group">
      <div className="votes votes-flex-end">
        <button
          type="button"
          onClick={thread ? upVoteToggleButtonThread : null}
        >
          {like ? (
            <FaThumbsUp className="votes__icon" />
          ) : (
            <FaRegThumbsUp className="votes__icon" />
          )}
        </button>

        <span>{upVotes.length}</span>
      </div>
      <div className="votes votes-flex-end">
        <button
          type="button"
          onClick={thread ? downVoteToggleButtonThread : null}
        >
          {unlike ? (
            <FaThumbsDown className="votes__icon" />
          ) : (
            <FaRegThumbsDown className="votes__icon" />
          )}
        </button>

        <span>{downVotes.length}</span>
      </div>
    </div>
  );
};

Votes.defaultProps = {
  thread: false,
};

Votes.propTypes = {
  upVotes: PropTypes.array.isRequired,
  downVotes: PropTypes.array.isRequired,
  thread: PropTypes.bool,
  threadId: PropTypes.string.isRequired,
};

export default Votes;
