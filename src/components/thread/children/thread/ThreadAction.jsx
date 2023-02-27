import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { FaComment, FaBookmark } from 'react-icons/fa';

const ThreadAction = ({ id, totalComments }) => {
  return (
    <div className="thread__action">
      <button
        type="button"
        className="wrapper__icon"
      >
        <FaBookmark className="bookmark" />
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
};

export default ThreadAction;
