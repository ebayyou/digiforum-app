import PropTypes from 'prop-types';
import ThreadItems, { threadItemShape } from './ThreadItems';

function ThreadList({ threads }) {
  return (
    <section className="thread__list">
      <h1>Hello</h1>

      {threads.map((thread) => (
        <ThreadItems {...thread} />
      ))}
    </section>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadList;
