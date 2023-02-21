import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import { ownerShape } from '../ThreadItemOwner';
import { postedAt } from '../../../../utils/index';

const CommentsItems = ({ content, createdAt, owner }) => {
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
    </div>
  );
};

export const commentShape = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

CommentsItems.propTypes = {
  ...commentShape,
};

export default CommentsItems;
