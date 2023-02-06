import PropTypes from 'prop-types';
import avatar from '../public/images/Avatar_1.png';

const ThreadItemOwner = ({ DesktopMode }) => {
  return (
    <div className={`thread__profile ${DesktopMode && 'thread__profile-DM'}`}>
      <div className="thread__group thread__group-DM">
        <img className="thread__image thread__image-DM" src={avatar} alt="example avatar" />
        <div className="thread__info thread__info-DM">
          <h4>Elisabeth May</h4>
          <p>3 days ago</p>
        </div>
      </div>

      <div className="thread__badge thread__badge-DM">Front-end</div>
    </div>
  );
};

ThreadItemOwner.propTypes = {
  // eslint-disable-next-line react/require-default-props
  DesktopMode: PropTypes.bool,
};

export default ThreadItemOwner;
