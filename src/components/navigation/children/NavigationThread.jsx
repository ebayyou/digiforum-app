import PropTypes from 'prop-types';
import { SidebarLeft, MaximizeCircle } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';

const NavigationThread = ({ handlerSubmitAddedThread }) => {
  const navigate = useNavigate();

  return (
    <div className="nav__thread">
      <div className="nav__thread-group">
        <button
          type="button"
          className="nav__button-left"
          onClick={() => navigate('/threads')}
        >
          <SidebarLeft className="nav__icon" />
        </button>

        <div className="nav__thread-brand">
          <h3>Add Your Threads</h3>
          <p>You can say anything #FreeSpeech</p>
        </div>
      </div>

      <button
        className="nav__button-submit"
        type="submit"
        onClick={handlerSubmitAddedThread}
      >
        Add Thread
      </button>

      {/* Desktop Version */}
      <button
        type="button"
        className="nav__button-right"
        onClick={() => navigate('/threads')}
      >
        <MaximizeCircle className="nav__icon" />
      </button>
    </div>
  );
};

NavigationThread.propTypes = {
  handlerSubmitAddedThread: PropTypes.func.isRequired,
};

export default NavigationThread;
