const ThreadCommentsInput = () => {
  return (
    <div className="comment__wrapper">
      <div className="comment__heading p-2">
        <h2>Comment</h2>
      </div>

      <form className="comment__form">
        <div className="comment__textArea-group">
          <textarea className="comment__textArea" name="comment" id="comment" cols="30" rows="10" />
        </div>
        <button className="comment__button" type="submit">
          Send Comment
        </button>
      </form>
    </div>
  );
};

export default ThreadCommentsInput;
