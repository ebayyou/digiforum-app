import PropTypes from 'prop-types';

const Headers = ({ heading, description }) => {
  return (
    <div className="headers">
      <h1 className="headers__heading">{heading}</h1>
      <p className="headers__desc">{description}</p>
    </div>
  );
};

Headers.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Headers;
