import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncToggleDownVoteCommentThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleUpVoteCommentThreadDetail,
  asyncToggleUpVoteThreadDetail,
} from '../../../states/threadDetail/action';
import { asyncToggleDownVoteThread, asyncToggleUpVoteThread } from '../../../states/threads/action';

const Votes = ({ isThread, isComment, threadId, commentId, upVotes, downVotes, like, unlike }) => {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const upVoteToggleButtonThread = () => {
    if (authUser) {
      if (isThread) dispatch(asyncToggleUpVoteThread(threadId));
      else dispatch(asyncToggleUpVoteThreadDetail(threadId));
    } else {
      alert('You have Login!!!');
    }
  };

  const downVoteToggleButtonThread = () => {
    if (authUser) {
      if (isThread) dispatch(asyncToggleDownVoteThread(threadId));
      else dispatch(asyncToggleDownVoteThreadDetail(threadId));
    } else {
      alert('You have Login!!!');
    }
  };

  const upVoteToggleButtonComment = () => {
    if (authUser) {
      dispatch(asyncToggleUpVoteCommentThreadDetail({ threadId, commentId }));
    } else {
      alert('You have Login!!!');
    }
  };

  const downVoteToggleButtonComment = () => {
    if (authUser) {
      dispatch(asyncToggleDownVoteCommentThreadDetail({ threadId, commentId }));
    } else {
      alert('You have Login!!!');
    }
  };

  return (
    <div className="votes__group">
      <div className="votes">
        <button
          type="button"
          onClick={isComment ? upVoteToggleButtonComment : upVoteToggleButtonThread}
        >
          {like ? (
            <FaThumbsUp className="votes__icon" />
          ) : (
            <FaRegThumbsUp className="votes__icon" />
          )}
        </button>
        <span>{upVotes.length}</span>
      </div>
      <div className="votes">
        <button
          type="button"
          onClick={isComment ? downVoteToggleButtonComment : downVoteToggleButtonThread}
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
  isThread: false,
  isComment: false,
  commentId: '',
};

Votes.propTypes = {
  isThread: PropTypes.bool,
  isComment: PropTypes.bool,
  threadId: PropTypes.string.isRequired,
  commentId: PropTypes.string,
  upVotes: PropTypes.array.isRequired,
  downVotes: PropTypes.array.isRequired,
  like: PropTypes.bool.isRequired,
  unlike: PropTypes.bool.isRequired,
};

export default Votes;
