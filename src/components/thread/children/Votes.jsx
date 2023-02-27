import PropTypes from 'prop-types';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { asyncUpVoteThread } from '../../../states/threads/action';

const Votes = ({ threadId, thread, upVotes, downVotes }) => {
  const dispatch = useDispatch();

  const upVotesButtonThread = () => {
    console.log(threadId);
    dispatch(asyncUpVoteThread(threadId));
  };

  return (
    <div className="votes__group">
      <div className="votes votes-flex-end">
        <button
          type="button"
          onClick={thread && upVotesButtonThread}
        >
          <FiThumbsUp className="votes__icon" />
        </button>

        <span>{upVotes}</span>
      </div>
      <div className="votes votes-flex-end">
        <button type="button">
          <FiThumbsDown className="votes__icon" />
        </button>

        <span>{downVotes}</span>
      </div>
    </div>
  );
};

Votes.defaultProps = {
  thread: false,
};

Votes.propTypes = {
  upVotes: PropTypes.number.isRequired,
  downVotes: PropTypes.number.isRequired,
  thread: PropTypes.bool,
  threadId: PropTypes.string.isRequired,
};

export default Votes;
