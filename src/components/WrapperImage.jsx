import PropTypes from 'prop-types';

const WrapperImage = ({ src, srcSet, alt, altSet, children }) => {
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
      {children}
    </picture>
  );
};

WrapperImage.defaultProps = {
  children: null,
};

WrapperImage.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  altSet: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default WrapperImage;
