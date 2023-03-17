import PropTypes from 'prop-types';
import { useInput } from '../../../../hooks/useInput';
import { userShape } from '../thread/ThreadItemOwner';

const CommentInput = ({ length, owner, handlerSubmitComment }) => {
  const [comment, handlerComment, setValue] = useInput();

  const handlerSubmitAddComment = (event) => {
    event.preventDefault();
    handlerSubmitComment(comment);
    setValue('');
  };

  return (
    <div className="comment__wrapper">
      <div className="comment__heading">
        <h2>Response</h2>
        <span className="comment__total">{length > 0 ? length : 0}</span>
      </div>

      <form
        className="comment__form"
        onSubmit={handlerSubmitAddComment}
      >
        <div className="comment__user">
          <img
            className="user__img"
            src={owner.avatar}
            alt={owner.name}
          />
          <h3 className="user__name">{owner.name}</h3>
        </div>

        <div className="comment__textArea-group">
          <textarea
            className="comment__textArea"
            value={comment}
            onChange={handlerComment}
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="what are your comment ?"
          />
        </div>
        <button
          className="comment__button"
          type="submit"
        >
          <span>Response</span>
        </button>
      </form>
    </div>
  );
};

CommentInput.propTypes = {
  handlerSubmitComment: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
};

export default CommentInput;
