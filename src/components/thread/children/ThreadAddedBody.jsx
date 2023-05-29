import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ThreadAddedBody = ({ children }) => {
  const { authUser = {} } = useSelector((state) => state);

  return (
    <div className="threadAdded__body">
      <div className="threadAdded__profile">
        <img
          src={authUser.avatar}
          alt={authUser.name}
        />

        <div className="profile__info">
          <h4>{authUser.name}</h4>
          <p>{authUser.email}</p>
        </div>
      </div>

      {children}
    </div>
  );
};

ThreadAddedBody.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThreadAddedBody;
