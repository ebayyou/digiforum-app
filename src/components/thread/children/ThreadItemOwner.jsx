import PropTypes from 'prop-types';
import { postedAt } from '../../../utils/index';

const ThreadItemOwner = ({ DesktopMode, owner, category, createdAt }) => {
  return (
    <div className={`thread__profile ${DesktopMode && 'thread__profile-DM'}`}>
      <div className="thread__group thread__group-DM">
        <img className="thread__image thread__image-DM" src={owner.avatar} alt={owner.name} />
        <div className="thread__info thread__info-DM">
          <h4>{owner.name}</h4>
          <p>{postedAt(createdAt)}</p>
        </div>
      </div>

      <div className="thread__badge thread__badge-DM">{category}</div>
    </div>
  );
};

export const ownerShape = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ThreadItemOwner.defaultProps = {
  DesktopMode: false,
};

ThreadItemOwner.propTypes = {
  DesktopMode: PropTypes.bool,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

export default ThreadItemOwner;
