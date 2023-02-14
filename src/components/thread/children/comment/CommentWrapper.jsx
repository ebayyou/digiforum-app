import PropTypes from 'prop-types';

const CommentWrapper = ({ children }) => {
  return <div className="comment__wrapper">{children}</div>;
};

CommentWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CommentWrapper;
