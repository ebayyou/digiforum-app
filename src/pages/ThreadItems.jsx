import { FaComment, FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
import avatar from '../public/images/Avatar_1.png';

function ThreadItems({ title, body, category }) {
  return (
    <div className="thread">
      <h3 className="thread__heading">{title}</h3>
      <div className="thread__profile">
        <div className="thread__group">
          <img className="thread__image" src={avatar} alt="example avatar" />
          <div className="thread__info">
            <h4>Elisabeth May</h4>
            <p>3 days ago</p>
          </div>
        </div>

        <div className="thread__badge">{category}</div>
      </div>

      <p className="thread__desc">{body}</p>

      <div className="thread__icon">
        <div className="wrapper__icon">
          <FaBookmark className="bookmark" />
        </div>
        <div className="thread__comment">
          <FaComment className="comment" />
          <span>Add Response</span>
        </div>
      </div>
    </div>
  );
}

export const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
};

ThreadItems.propTypes = {
  ...threadItemShape,
};

export default ThreadItems;
