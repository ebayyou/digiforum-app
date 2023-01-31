import { FaComment, FaBookmark, FaHome, FaGithub } from 'react-icons/fa';
import { RiMindMap, RiCloseFill } from 'react-icons/ri';
import SidebarLeaderboard from './SidebarLeaderboard';
import logo from '../public/images/Logo.png';

// RiMindMap
export default function SideBar() {
  return (
    <div className="sidebar">
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

      <div className="sidebar__overflow">
        <div className="sidebar__wrapper">
          <div className="sidebar__navigation">
            <div className="nav__item">
              <FaHome className="nav__icon" />
              <h4 className="nav__title">Home</h4>
            </div>
            <div className="nav__item">
              <FaComment className="nav__icon" />
              <h4 className="nav__title">Your Threads</h4>
            </div>
            <div className="nav__item">
              <FaBookmark className="nav__icon" />
              <h4 className="nav__title">Saved</h4>
            </div>
          </div>

          <SidebarLeaderboard />
        </div>

        <footer className="sidebar__footer">
          <div className="footer__item">
            <RiMindMap className="footer__icon" />
            <a className="footer__link" href="https://forum-api.dicoding.dev/v1/#/" target="_blank" rel="noreferrer">
              Forum API Dicoding
            </a>
          </div>
          <div className="footer__item">
            <FaGithub className="footer__icon" />
            <a className="footer__link" href="https://github.com/ebayyou/digiforum-app" target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>

          <p className="footer__copyright">&copy;2023 DigiForum.io Discussion, all rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
