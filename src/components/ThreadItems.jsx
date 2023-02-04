import { FaComment, FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThreadItemOwner from './ThreadItemOwner';
// import PropTypes from 'prop-types';

const ThreadItems = () => {
  return (
    <div className="thread">
      <Link to="/threadDetail/abc" className="thread__heading">
        How to become a react developer
      </Link>

      <ThreadItemOwner />

      <p className="thread__desc">
        If you’re interested in
        <strong>front-end development</strong>
        and
        <strong>web design</strong>
        ,a React developer position may be a great fit for you. You can learn more about pursuing this career path in the following walkthrough
      </p>

      <div className="thread__icon">
        <button type="button" className="wrapper__icon">
          <FaBookmark className="bookmark" />
        </button>
        <Link to="/threadDetail/abc#comment" className="thread__comment">
          <FaComment className="comment" />
          <span>Add Response</span>
        </Link>
      </div>
    </div>
  );
};

// export const threadItemShape = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   createdAt: PropTypes.string.isRequired,
//   ownerId: PropTypes.string.isRequired,
//   totalComments: PropTypes.number.isRequired,
// };

// ThreadItems.propTypes = {
//   ...threadItemShape,
// };

export default ThreadItems;
