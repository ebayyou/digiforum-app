import PropTypes from 'prop-types';

const WrapperImage = ({ src, srcSet, alt, altSet }) => {
  return (
    <picture className="wrapper__img">
      <source
        media="(min-width: 750px)"
        srcSet={srcSet}
        alt={altSet}
      />
      <img
        src={src}
        alt={alt}
      />
    </picture>
  );
};

WrapperImage.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  altSet: PropTypes.string.isRequired,
};

export default WrapperImage;
