import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThreadProvider } from '../../../context';
import { useInput } from '../../../hooks/useInput';

const ThreadAdded = () => {
  const { authUser } = useSelector((state) => state);
  const [value, handleValueChange] = useInput('');
  const navigate = useNavigate();

  const handlerAddedThread = () => {
    if (!authUser) {
      alert('you have login!!!');
      return;
    }

    if (value.length <= 3) {
      alert('text cannot be empty, and must be more than 3 letters');
      return;
    }

    navigate('/threads/thread-added');
  };

  return (
    <ThreadProvider value={value}>
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
            value={value}
            onChange={handleValueChange}
            required
          />
        </div>

        <div className="added__group">
          <button
            className="added__dot"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

          <button
            className="added__btn"
            type="button"
            onClick={handlerAddedThread}
          >
            Response
          </button>
        </div>
      </div>
    </ThreadProvider>
  );
};

export default ThreadAdded;
