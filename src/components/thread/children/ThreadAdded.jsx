import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Gallery, Text, TextalignCenter, Task, Translate } from 'iconsax-react';
import { ThreadProvider } from '../../../context';
import { useInput } from '../../../hooks/useInput';

const ThreadAdded = () => {
  const { authUser } = useSelector((state) => state);
  const [visible, setVisible] = useState(false);
  // const [threadTitle, setThreadTitle] = useState('');
  const [value, handleValueChange] = useInput('');
  const navigate = useNavigate();

  const handlerAddedThread = () => {
    if (!authUser) {
      alert('you have login!!!');
      return;
    }

    // setThreadTitle(value);
    navigate('/threads/thread-added');
  };
  console.log(value);

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
            required
            value={value}
            onChange={handleValueChange}
          />
        </div>

        <div className="added__group">
          <button
            className="added__dot"
            type="button"
            onClick={() => setVisible((prevState) => !prevState)}
          >
            <span />
            <span />
            <span />
          </button>

          {/* item-overflow */}
          <ul className={`added__item ${visible ? '' : 'visible'}`}>
            <li className="item__list">
              <Gallery
                size="24"
                color="#d1caff"
              />
            </li>
            <li className="item__list">
              <Text
                size="24"
                color="#d1caff"
              />
            </li>
            <li className="item__list">
              <TextalignCenter
                size="24"
                color="#d1caff"
              />
            </li>
            <li className="item__list">
              <Task
                size="24"
                color="#d1caff"
              />
            </li>
            <li className="item__list">
              <Translate
                size="24"
                color="#d1caff"
              />
            </li>
          </ul>

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
