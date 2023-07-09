import PropTypes from 'prop-types';
import { Warning2 } from 'iconsax-react';
import { timeNow } from '../../utils';

const WrapperError = ({ height }) => {
  return (
    <div
      className="wraperror"
      style={{ height: `${height}px` }}
    >
      <Warning2
        size={42}
        color="#fc728b"
      />
      <div className="time__group">
        <h4>Something Went Wrong</h4>
        <p>
          <span>Today at</span>
          <span className="time">{timeNow()}</span>
        </p>
      </div>
    </div>
  );
};

WrapperError.propTypes = {
  height: PropTypes.number.isRequired,
};

export default WrapperError;
