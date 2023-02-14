import { RiCloseFill } from 'react-icons/ri';
import logo from '../../../public/images/Logo.png';

const SidebarHeader = () => {
  return (
    <header className="sidebar__headers">
      <div className="headers__item">
        <img className="headers__img" src={logo} alt="logo" />
        <div className="headers__group">
          <h4 className="headers__title">DigiForum</h4>
          <p className="headers__desc">Discussion forum</p>
        </div>
      </div>
      <button className="headers__button" type="button">
        <RiCloseFill className="headers__icon" />
      </button>
    </header>
  );
};

export default SidebarHeader;
