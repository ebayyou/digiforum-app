// import PropTypes from 'prop-types';
import ThreadItems from './ThreadItems';
import ThreadAdded from './ThreadAdded';

const ThreadList = () => {
  return (
    <section className="Layout__children">
      <ThreadAdded />

      <ThreadItems />
      <ThreadItems />
      <ThreadItems />
    </section>
  );
};

// ThreadList.propTypes = {
//   threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
// };

export default ThreadList;
