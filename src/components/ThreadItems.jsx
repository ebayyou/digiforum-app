import { FaComment, FaBookmark } from 'react-icons/fa';
import avatar from '../public/images/Avatar_1.png';
// import PropTypes from 'prop-types';

function ThreadItems() {
  return (
    <div className="thread">
      <h3 className="thread__heading">How to become a react developer</h3>
      <div className="thread__profile">
        <div className="thread__group">
          <img className="thread__image" src={avatar} alt="example avatar" />
          <div className="thread__info">
            <h4>Elisabeth May</h4>
            <p>3 days ago</p>
          </div>
        </div>

        <div className="thread__badge">Front-end</div>
      </div>

      <p className="thread__desc">
        If you’re interested in
        <strong>front-end development</strong>
        and
        <strong>web design</strong>
        ,a React developer position may be a great fit for you. You can learn more about pursuing this career path in the following walkthrough
      </p>

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
