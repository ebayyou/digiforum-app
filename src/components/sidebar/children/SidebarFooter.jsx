import { FaGithub } from 'react-icons/fa';
import { RiMindMap } from 'react-icons/ri';

const SideBarFooter = () => {
  return (
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
  );
};

export default SideBarFooter;
