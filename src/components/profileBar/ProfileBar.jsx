import { FaUserAstronaut, FaGoogle, FaTripadvisor } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const ProfileBar = () => {
  const { authUser } = useSelector((state) => state);

  return (
    <aside className="profilebar">
      <div className="profilebar__group">
        <img className="profilebar__img" src={authUser ? authUser.avatar : 'https://ui-avatars.com/api/?name=Society&background=random'} alt="profile" />
        <h4 className="profilebar__name">{authUser ? authUser.name : 'Morning Person'}</h4>

        <div className="profilebar__box">
          <div className="profilebar__badge">
            <FaTripadvisor className="badge__icon" />
            <p className="badge__text">User Factor</p>
          </div>
          <div className="profilebar__info">
            <FaUserAstronaut className="profilebar__icon" />
            <p>{authUser ? authUser.id : 'Morning Person'}</p>
          </div>
          <div className="profilebar__info">
            <FaGoogle className="profilebar__icon" />
            <p>{authUser ? authUser.email : 'morningperson@exd.com'}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileBar;
