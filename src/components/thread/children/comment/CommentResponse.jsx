import PropTypes from 'prop-types';

const CommentResponse = ({ length }) => {
  return (
    <div className="comment__heading">
      <h2>Responses</h2>
      <span className="comment__total">{length}</span>
    </div>
  );
};

CommentResponse.propTypes = {
  length: PropTypes.number.isRequired,
};

export default CommentResponse;
