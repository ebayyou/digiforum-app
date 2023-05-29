import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ThreadAdded = () => {
  const { authUser } = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <div className="threadAdded">
      <div className="added__input-group">
        {authUser ? (
          <img
            className="added__img"
            src={authUser.avatar}
            alt="profile"
          />
        ) : (
          <div
            style={{ backgroundColor: '#9ab78d' }}
            className="added__img"
          />
        )}
        <input
          className="added__input"
          type="text"
          placeholder="what's in your mind?"
          onFocus={() => navigate('/threads/thread-added')}
        />
      </div>
    </div>
  );
};

export default ThreadAdded;
