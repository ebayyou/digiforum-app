import PropTypes from 'prop-types';

const ThreadItems = ({ children }) => {
  return <div className="thread">{children}</div>;
};

ThreadItems.propTypes = {
  children: PropTypes.arrayOf(Element).isRequired,
};

export default ThreadItems;
