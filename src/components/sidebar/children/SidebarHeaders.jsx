import { RiCloseFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { sidebarStatusActionCreator } from '../../../states/sidebarStatus/action';
import logo from '../../../public/images/Logo.png';

const SidebarHeader = () => {
  const dispatch = useDispatch();

  const onHandlerSidebar = () => {
    dispatch(sidebarStatusActionCreator(false));
  };

  return (
    <header className="sidebar__headers">
      <div className="headers__item">
        <img
          className="headers__img"
          src={logo}
          alt="logo"
        />
        <div className="headers__group">
          <h4 className="headers__title">DigiForum</h4>
          <p className="headers__desc">Discussion forum</p>
        </div>
      </div>
      <button
        className="headers__button"
        type="button"
        onClick={onHandlerSidebar}
      >
        <RiCloseFill className="headers__icon" />
      </button>
    </header>
  );
};

export default SidebarHeader;
