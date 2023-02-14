import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaComment, FaBookmark } from 'react-icons/fa';
import { limitString } from '../../../utils';
import ThreadItemOwner from './ThreadItemOwner';

const ThreadItems = ({ id, category, title, body, createdAt, user, totalComments }) => {
  return (
    <div className="thread">
      <Link to={`/threadDetail/${id}`} className="thread__heading">
        {title}
      </Link>

      <ThreadItemOwner owner={user} createdAt={createdAt} category={category} />

      <div className="thread__desc" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(limitString(body, 200)) }} />

      <div className="thread__icon">
        <button type="button" className="wrapper__icon">
          <FaBookmark className="bookmark" />
        </button>
        <HashLink to={`/threadDetail/${id}#comment`} className="thread__comment">
          <FaComment className="comment" />
          <span>Add Response</span>
          <span className="comment__total">{totalComments}</span>
        </HashLink>
      </div>
    </div>
  );
};

export const userShape = {
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItems.propTypes = {
  ...threadItemShape,
};

export default ThreadItems;
