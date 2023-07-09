import PropTypes from 'prop-types';
import { Warning2, CloudCross, CopySuccess } from 'iconsax-react';
import { timeNow } from '../utils';

const AlertDigi = ({ warning, error, success, message }) => {
  const styleColor = {
    backgroundColor: (warning && '#f4c395') || (error && '#fc728b') || (success && '#d1caff'),
  };

  return (
    <div className="alertdigi">
      <div className="alertdigi__group">
        {warning && (
          <Warning2
            size="48"
            color="#f4c395"
          />
        )}
        {error && (
          <CloudCross
            size="48"
            color="#fc728b"
          />
        )}
        {success && (
          <CopySuccess
            size="48"
            color="#d1caff"
          />
        )}

        <div className="time__group">
          <h4 style={{ textAlign: 'left' }}>{message}</h4>

          <p style={{ textAlign: 'left' }}>
            <span>Today at</span>
            <span className="time">{timeNow()}</span>
          </p>
        </div>
      </div>

      <button
        style={styleColor}
        type="button"
        className="alertdigi__button"
      >
        ok
      </button>
    </div>
  );
};

AlertDigi.defaultProps = {
  warning: false,
  error: false,
  success: false,
};

AlertDigi.propTypes = {
  warning: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

export default AlertDigi;
