import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NothingThread = ({ errorMsg }) => {
  return (
    <div className="nothing__thread">
      <div className="nothing__group">
        <img
          className="nothing__img"
          src="/images/illustration/hashtag.svg"
          alt="hashtag svg"
        />
        <h3 className="nothing__head">Nothing Thread</h3>
      </div>
      <p className="nothing__desc">{errorMsg}</p>
      <Link
        className="nothing__btn"
        to="/threads"
      >
        Go to #Threads
      </Link>
    </div>
  );
};

NothingThread.propTypes = {
  errorMsg: PropTypes.string.isRequired,
};

export default NothingThread;
