import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { limitString } from '../../utils';
import ThreadItems from './children/ThreadItems';
import ThreadAdded from './children/ThreadAdded';
import ThreadItemOwner, { userShape } from './children/thread/ThreadItemOwner';
import ThreadAction from './children/thread/ThreadAction';
import ThreadVotes from './children/thread/ThreadVotes';

const ThreadList = ({ threads }) => {
  return (
    <section className="Layout__children">
      <ThreadAdded />

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
    </section>
  );
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadList;
