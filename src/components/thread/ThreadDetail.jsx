import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThreadItemOwner, { userShape } from './children/thread/ThreadItemOwner';
import CommentWrapper from './children/comment/CommentWrapper';
import CommentsInput from './children/comment/CommentInput';
import CommentResponse from './children/comment/CommentResponse';
import CommentsItems, { commentShape } from './children/comment/CommentItems';
import Votes from './children/Votes';

const ThreadDetail = ({ threadDetail, handlerSubmitComment, authUser }) => {
  return (
    <>
      <div className="threadDetail__wrapper">
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

        <Votes
          isThread={false}
          threadId={threadDetail.id}
          upVotes={threadDetail.upVotesBy}
          downVotes={threadDetail.downVotesBy}
          like={authUser && threadDetail.upVotesBy.includes(authUser.id)}
          unlike={authUser && threadDetail.downVotesBy.includes(authUser.id)}
        />
      </div>

      <div
        className="threadDetail__comment"
        id="comment"
      >
        {authUser ? (
          <CommentsInput
            owner={threadDetail.owner}
            handlerSubmitComment={handlerSubmitComment}
          />
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
            <CommentResponse
              title="Comment"
              length={threadDetail.comments.length}
            />

            <div className="comment__data">
              {threadDetail.comments.length >= 1 ? (
                threadDetail.comments.map((comment) => (
                  <CommentsItems
                    key={comment.id}
                    threadId={threadDetail.id}
                    commentId={comment.id}
                    owner={comment.owner}
                    content={comment.content}
                    createdAt={comment.createdAt}
                    upVotes={comment.upVotesBy}
                    downVotes={comment.downVotesBy}
                    like={authUser && comment.upVotesBy.includes(authUser.id)}
                    unlike={authUser && comment.downVotesBy.includes(authUser.id)}
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

ThreadDetail.defaultProps = {
  authUser: null,
};

const ThreadDetailShape = {
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  title: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  ...ThreadDetailShape,
  handlerSubmitComment: PropTypes.func.isRequired,
  authUser: PropTypes.object,
};

export default ThreadDetail;
