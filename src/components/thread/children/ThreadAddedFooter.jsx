import PropTypes from 'prop-types';

const ThreadAddedFooter = ({ handlerSubmitAddedThread }) => {
  return (
    <div className="threadAdded__group">
      <button
        className="threadAdded__dot"
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <button
        className="threadAdded__btn"
        type="button"
        onClick={handlerSubmitAddedThread}
      >
        Response
      </button>
    </div>
  );
};

ThreadAddedFooter.propTypes = {
  handlerSubmitAddedThread: PropTypes.func.isRequired,
};

export default ThreadAddedFooter;
