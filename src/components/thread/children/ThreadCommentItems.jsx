import PropTypes from 'prop-types';
import { ownerShape } from './ThreadItemOwner';
import { postedAt } from '../../../utils/index';

const ThreadCommentsItems = ({ content, createdAt, owner }) => {
  return (
    <>
      <div className="comment__group">
        <div className="comment__group-profile">
          <img className="comment__image-profile" src={owner.avatar} alt="example avatar" />
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

      <p className="comment__body">{content}</p>
    </>
  );
};

export const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadCommentsItems.propTypes = {
  ...commentShape,
};

export default ThreadCommentsItems;
