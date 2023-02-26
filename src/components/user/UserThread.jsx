import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { limitString } from '../../utils';
import ThreadItems from '../thread/children/ThreadItems';
import ThreadItemOwner from '../thread/children/thread/ThreadItemOwner';
import ThreadAction from '../thread/children/thread/ThreadAction';
import ThreadVotes from '../thread/children/thread/ThreadVotes';
import { threadItemShape } from '../thread/ThreadList';

const UserThreads = ({ threads }) => {
  return (
    <div className="userthread">
      <div className="thread__list">
        {threads.map(({ id, title, user, createdAt, category, body, totalComments }) => (
          <ThreadItems key={id}>
            <Link
              to={`/threadDetail/${id}`}
              className="thread__heading"
            >
              {title}
            </Link>

            <ThreadItemOwner
              owner={user}
              createdAt={createdAt}
              category={category}
            />

            <div
              className="thread__desc"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(limitString(body, 200)) }}
            />

            <div className="thread__wrapper">
              <ThreadAction
                id={id}
                totalComments={totalComments}
              />
              <ThreadVotes />
            </div>
          </ThreadItems>
        ))}
      </div>
    </div>
  );
};

UserThreads.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default UserThreads;
