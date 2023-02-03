import PropTypes from 'prop-types';

const ContainerWrap = ({ children }) => {
  return <div className="container">{children}</div>;
};

ContainerWrap.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default ContainerWrap;
