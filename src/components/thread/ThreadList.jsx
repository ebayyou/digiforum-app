import PropTypes from 'prop-types';
import ThreadItems, { threadItemShape } from './children/ThreadItems';
import ThreadAdded from './children/ThreadAdded';

const ThreadList = ({ threads }) => {
  return (
    <section className="Layout__children">
      <ThreadAdded />

      <div className="thread__list">
        {threads.map((thread) => (
          <ThreadItems
            key={thread.id}
            {...thread}
          />
        ))}
      </div>
    </section>
  );
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadList;
