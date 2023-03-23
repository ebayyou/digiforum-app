import PropTypes from 'prop-types';

const WrapperImage = ({ src, alt }) => {
  return (
    <div className="wrapper__img">
      <img
        className="img"
        src={src}
        alt={alt}
        width="100%"
        height="554px"
      />
    </div>
  );
};

WrapperImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default WrapperImage;
