import PropTypes from 'prop-types';

export default function ContainerWrap({ children }) {
  return <div className="container">{children}</div>;
}

ContainerWrap.propTypes = {
  children: PropTypes.elementType.isRequired,
};
