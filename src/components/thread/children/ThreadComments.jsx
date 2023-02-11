import PropTypes from 'prop-types';
import ThreadCommentsItems, { commentShape } from './ThreadCommentItems';

const ThreadComments = ({ comments }) => {
  return (
    <div className="comment__wrapper">
      <div className="comment__heading">
        <h2>Responses</h2>
        <span className="comment__total">20</span>
      </div>

      <div className="comment__data">
        {comments.map((comment) => (
          <ThreadCommentsItems key={comment.id} owner={comment.owner} content={comment.content} createdAt={comment.createdAt} />
        ))}
      </div>
    </div>
  );
};

ThreadComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
};

export default ThreadComments;
