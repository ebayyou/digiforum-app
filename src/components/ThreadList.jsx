// import PropTypes from 'prop-types';
import ThreadItems from './ThreadItems';
import ThreadAdded from './ThreadAdded';

function ThreadList() {
  return (
    <section className="thread__list">
      <ThreadAdded />

      <ThreadItems />
      <ThreadItems />
      <ThreadItems />
    </section>
  );
}

// ThreadList.propTypes = {
//   threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
// };

export default ThreadList;
