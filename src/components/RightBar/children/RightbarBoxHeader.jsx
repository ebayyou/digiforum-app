import PropTypes from 'prop-types';

const RightbarBoxHeader = ({ title, Icon }) => {
  return (
    <div className="rightBarBox__header">
      <h3>{title}</h3>
      <Icon
        size="24"
        className="rightBarBox__icon"
        variant="Bold"
      />
    </div>
  );
};

RightbarBoxHeader.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.element.isRequired,
};

export default RightbarBoxHeader;
