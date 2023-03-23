import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Hashtag, EmojiNormal } from 'iconsax-react';

const NothingThread = ({ errorMsg, bgColor, btnMsg, btnTo, withButton, withInfoBox }) => {
  const elementWithButton = withButton && btnMsg !== '' && (
    <Link
      className="nothing__btn"
      style={{
        backgroundColor: `${bgColor}`,
      }}
      to={btnTo}
    >
      {btnMsg}
    </Link>
  );

  return (
    <div
      style={{ height: withButton && '265px' }}
      className="nothing__thread"
    >
      <div className="nothing__group">
        <Hashtag
          size="45"
          color="#d1caff"
        />

        <h3 className="nothing__head">Nothing Thread</h3>
      </div>
      <p className="nothing__desc">{errorMsg}</p>
      <div className={`nothing__group ${withInfoBox && 'nt-extend-w'}`}>
        {elementWithButton}
        {withButton && (
          <Link
            className="nothing__btn"
            to="/threads"
          >
            Go to #Threads
          </Link>
        )}
        {withInfoBox && (
          <div className="nothing__infobox">
            <EmojiNormal
              size="28"
              color="#252d3a"
            />
            <h3>#FreeSpeech</h3>
            <p>you are free to speak, discuss, as long as don&apos;t hurt other people</p>
          </div>
        )}
      </div>
    </div>
  );
};

NothingThread.defaultProps = {
  bgColor: '#d1caff',
  btnMsg: '',
  btnTo: '',
  withButton: false,
  withInfoBox: false,
};

NothingThread.propTypes = {
  errorMsg: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  btnMsg: PropTypes.string,
  btnTo: PropTypes.string,
  withButton: PropTypes.bool,
  withInfoBox: PropTypes.bool,
};

export default NothingThread;
