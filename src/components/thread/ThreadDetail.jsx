import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ThreadItemOwner from './children/thread/ThreadItemOwner';
import CommentsInput from './children/comment/CommentInput';
import CommentsItems from './children/comment/CommentItems';
import Votes from './children/Votes';
import { asyncAddThreadComment } from '../../states/threadDetail/action';

const ThreadDetail = ({ threadId }) => {
  const { threadDetail = {}, authUser = {} } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerSubmitComment = (content) => {
    dispatch(asyncAddThreadComment(threadId, content));
  };

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
            length={threadDetail.comments.length}
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

        <div className="comment__wrapper">
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
        </div>
      </div>
    </>
  );
};

ThreadDetail.propTypes = {
  threadId: PropTypes.string.isRequired,
};

export default ThreadDetail;
