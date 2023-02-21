import PropTypes from 'prop-types';
import { useInput } from '../../../../hooks/useInput';

const CommentInput = ({ handlerSubmitComment }) => {
  const [comment, handlerComment, setValue] = useInput();

  const handlerSubmitAddComment = (event) => {
    event.preventDefault();
    handlerSubmitComment(comment);
    setValue('');
  };

  return (
    <div className="comment__wrapper">
      <div className="comment__heading p-2">
        <h2>Comment</h2>
      </div>

      <form
        className="comment__form"
        onSubmit={handlerSubmitAddComment}
      >
        <div className="comment__textArea-group">
          <textarea
            className="comment__textArea"
            value={comment}
            onChange={handlerComment}
            name="comment"
            id="comment"
            cols="30"
            rows="10"
          />
        </div>
        <button
          className="comment__button"
          type="submit"
        >
          Send Comment
        </button>
      </form>
    </div>
  );
};

CommentInput.propTypes = {
  handlerSubmitComment: PropTypes.func.isRequired,
};

export default CommentInput;
