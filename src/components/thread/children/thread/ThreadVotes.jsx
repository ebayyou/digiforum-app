// import PropTypes from 'prop-types';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';

const ThreadVotes = () => {
  return (
    <div className="thread__votes">
      <div className="votes votes-flex-end">
        <button type="button">
          <FiThumbsUp className="votes__icon" />
        </button>

        <span>10</span>
      </div>
      <div className="votes votes-flex-end">
        <button type="button">
          <FiThumbsDown className="votes__icon" />
        </button>

        <span>10</span>
      </div>
    </div>
  );
};

// ThreadVotes.propTypes = {
// };

export default ThreadVotes;
