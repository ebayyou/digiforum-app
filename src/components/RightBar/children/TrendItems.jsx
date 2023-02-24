import PropTypes from 'prop-types';
import { FiHash } from 'react-icons/fi';

const TrendItems = ({ trend, createdAt }) => {
  return (
    <div className="trend__group">
      <div className="trend__item">
        <FiHash className="trend__icon" />
        <h4>{trend}</h4>
      </div>
      <span className="trend__createdAt">{createdAt}</span>
    </div>
  );
};

TrendItems.propTypes = {
  trend: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default TrendItems;
