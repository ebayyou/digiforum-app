import PropTypes from 'prop-types';

const CommentResponse = ({ length, title }) => {
  return (
    <div className="comment__heading">
      <h2>{title}</h2>
      {length > 0 && <span className="comment__total">{length}</span>}
    </div>
  );
};

CommentResponse.defaultProps = {
  length: 0,
};

CommentResponse.propTypes = {
  title: PropTypes.string.isRequired,
  length: PropTypes.number,
};

export default CommentResponse;
