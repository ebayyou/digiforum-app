import { Link } from 'react-router-dom';
import { Gallery, Text, TextalignCenter, Task, Translate } from 'iconsax-react';
import { useState } from 'react';

const ThreadAdded = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="threadAdded">
      <div className="added__input-group">
        <img
          className="added__img"
          src="/images/main_avatar.png"
          alt="profile"
        />
        <input
          className="added__input"
          type="text"
          placeholder="what's in your mind?"
          required
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

        <Link
          className="added__btn"
          to="/threadAdded"
        >
          Response
        </Link>
      </div>
    </div>
  );
};

export default ThreadAdded;
