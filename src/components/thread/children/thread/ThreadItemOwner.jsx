import PropTypes from 'prop-types';
import { postedAt } from '../../../../utils/index';

const ThreadItemOwner = ({ DesktopMode, owner, category, createdAt }) => {
  return (
    <div className={`thread__profile ${DesktopMode && 'thread__profile-DM'}`}>
      <div className="thread__group thread__group-DM">
        <img
          className="thread__image thread__image-DM"
          src={owner.avatar}
          alt={owner.name}
        />
        <div className="thread__info thread__info-DM">
          <h4>{owner.name}</h4>
          <p>{postedAt(createdAt)}</p>
        </div>
      </div>

      <div className="thread__badge thread__badge-DM">
        <h3>{category}</h3>
      </div>
    </div>
  );
};

ThreadItemOwner.defaultProps = {
  DesktopMode: false,
};

export const userShape = {
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ThreadItemOwner.propTypes = {
  DesktopMode: PropTypes.bool,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
};

export default ThreadItemOwner;
