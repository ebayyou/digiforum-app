import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThreadItemOwner, { ownerShape } from './children/ThreadItemOwner';
import CommentWrapper from './children/comment/CommentWrapper';
import CommentsInput from './children/comment/CommentInput';
import CommentResponse from './children/comment/CommentResponse';
import CommentsItems, { commentShape } from './children/comment/CommentItems';

const ThreadDetail = ({ threadDetail, handlerSubmitComment, authUser }) => {
  return (
    <>
      <ThreadItemOwner
        DesktopMode
        owner={threadDetail.owner}
        category={threadDetail.category}
        createdAt={threadDetail.createdAt}
      />

      <h1 className="threadDetail__title">{threadDetail.title}</h1>
      <div
        className="threadDetail__desc"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(threadDetail.body) }}
      />

      <div
        className="threadDetail__comment"
        id="comment"
      >
        {authUser ? (
          <CommentsInput handlerSubmitComment={handlerSubmitComment} />
        ) : (
          <div className="threadDetail__comment-false">
            <span>Want to comment ?</span>
            <Link
              className="link-to-login"
              to="/login"
            >
              Must be login
            </Link>
          </div>
        )}

        <CommentWrapper>
          <>
            <CommentResponse length={threadDetail.comments.length} />

            <div className="comment__data">
              {threadDetail.comments.length >= 1 ? (
                threadDetail.comments.map((comment) => (
                  <CommentsItems
                    key={comment.id}
                    owner={comment.owner}
                    content={comment.content}
                    createdAt={comment.createdAt}
                  />
                ))
              ) : (
                <div className="comment__items">
                  <h4 className="comment__notFound">No one commented</h4>
                </div>
              )}
            </div>
          </>
        </CommentWrapper>
      </div>
    </>
  );
};

const ThreadDetailShape = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
};

ThreadDetail.defaultProps = {
  authUser: null,
};

ThreadDetail.propTypes = {
  threadDetail: PropTypes.objectOf(PropTypes.shape(ThreadDetailShape)).isRequired,
  handlerSubmitComment: PropTypes.func.isRequired,
  authUser: PropTypes.object,
};

export default ThreadDetail;
