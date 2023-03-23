import PropTypes from 'prop-types';
import { Hashtag } from 'iconsax-react';
import { postedAt } from '../../../utils/index';

const TrendItems = ({ onClickhandlerTrend, trend, createdAt, popularTrend }) => {
  return (
    <button
      type="button"
      className={`trend__group ${popularTrend ? 'pink' : 'neutral'}`}
      onClick={() => onClickhandlerTrend(trend)}
    >
      <div className="trend__item">
        <Hashtag className="trend__icon" />
        <h4>{trend}</h4>
      </div>

      <span className="trend__createdAt">{postedAt(createdAt)}</span>
    </button>
  );
};

TrendItems.propTypes = {
  trend: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onClickhandlerTrend: PropTypes.func.isRequired,
  popularTrend: PropTypes.bool.isRequired,
};

export default TrendItems;
