import PropTypes from 'prop-types';

const WrapperImage = ({ src, alt }) => {
  return (
    <div className="wrapper__img">
      <img
        className="img"
        src={src}
        alt={alt}
      />
    </div>
  );
};

WrapperImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default WrapperImage;
