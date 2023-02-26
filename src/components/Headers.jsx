import PropTypes from 'prop-types';

const Headers = ({ added, heading, description }) => {
  return (
    <div className={`headers ${added && 'headers-added'}`}>
      <h1 className="headers__heading">{heading}</h1>
      <p className="headers__desc">{description}</p>
    </div>
  );
};

Headers.defaultProps = {
  added: false,
};

Headers.propTypes = {
  added: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Headers;
