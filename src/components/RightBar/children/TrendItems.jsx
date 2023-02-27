import PropTypes from 'prop-types';
import { FiHash } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { postedAt } from '../../../utils/index';
import { filterThreadByCategoryActionCreator } from '../../../states/threads/action';

const TrendItems = ({ trend, createdAt }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="trend__group"
      onClick={() => dispatch(filterThreadByCategoryActionCreator(trend))}
    >
      <div className="trend__item">
        <FiHash className="trend__icon" />
        <h4>{trend}</h4>
      </div>
      <span className="trend__createdAt">{postedAt(createdAt)}</span>
    </button>
  );
};

TrendItems.propTypes = {
  trend: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default TrendItems;
