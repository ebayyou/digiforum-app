import { FaUserAstronaut, FaGoogle, FaTripadvisor } from 'react-icons/fa';
import Avatar from '../public/images/Avatar_1.png';

export default function ProfileBar() {
  return (
    <div className="profilebar">
      <div className="profilebar__group">
        <img className="profilebar__img" src={Avatar} alt="profile" />
        <h4 className="profilebar__name">Ebayyou Anggoro</h4>

        <div className="profilebar__box">
          <div className="profilebar__badge">
            <FaTripadvisor className="badge__icon" />
            <p className="badge__text">User Factor</p>
          </div>
          <div className="profilebar__info">
            <FaUserAstronaut className="profilebar__icon" />
            <p>Ebay__Ang</p>
          </div>
          <div className="profilebar__info">
            <FaGoogle className="profilebar__icon" />
            <p>ebayyou.e124@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
