import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import { postedAt } from '../../../../utils/index';
import { userShape } from '../thread/ThreadItemOwner';
import Votes from '../Votes';

const CommentsItems = ({
  threadId,
  commentId,
  content,
  createdAt,
  owner,
  upVotes,
  downVotes,
  like,
  unlike,
}) => {
  return (
    <div className="comment__items">
      <div className="comment__group">
        <div className="comment__group-profile">
          <img
            className="comment__image-profile"
            src={owner.avatar}
            alt={owner.name}
          />
          <div className="comment__profile">
            <h4>{owner.name}</h4>
            <p>{postedAt(createdAt)}</p>
          </div>
        </div>
        <div className="comment__dot">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        className="comment__body"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      />

      <Votes
        isComment
        threadId={threadId}
        commentId={commentId}
        upVotes={upVotes}
        downVotes={downVotes}
        like={like}
        unlike={unlike}
      />
    </div>
  );
};

export const commentShape = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
};

CommentsItems.propTypes = {
  ...commentShape,
  threadId: PropTypes.string.isRequired,
  upVotes: PropTypes.array.isRequired,
  downVotes: PropTypes.array.isRequired,
  like: PropTypes.bool.isRequired,
  unlike: PropTypes.bool.isRequired,
};

export default CommentsItems;
