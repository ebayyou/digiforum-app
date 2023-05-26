import PropTypes from 'prop-types';
import { Gallery, Text, TextalignCenter, Task, Translate } from 'iconsax-react';

const ThreadOptions = ({ visible }) => {
  return (
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
  );
};

ThreadOptions.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default ThreadOptions;
