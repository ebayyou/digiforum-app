import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RightbarBoxLink = ({ to, onHandlerRightbar }) => {
  return (
    <Link
      to={to}
      className="rightBarBox__button"
      onClick={onHandlerRightbar}
    >
      see more
    </Link>
  );
};

RightbarBoxLink.propTypes = {
  to: PropTypes.string.isRequired,
  onHandlerRightbar: PropTypes.func.isRequired,
};

export default RightbarBoxLink;
