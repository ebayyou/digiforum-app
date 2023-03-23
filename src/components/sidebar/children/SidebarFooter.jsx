// import { FiGitPullRequest, FiGithub } from 'react-icons/fi';
import { HuobiToken, Setting } from 'iconsax-react';

const SideBarFooter = () => {
  return (
    <footer className="sidebar__footer">
      <div className="footer__item">
        <Setting className="footer__icon" />
        <a
          className="footer__link"
          href="https://forum-api.dicoding.dev/v1/#/"
          target="_blank"
          rel="noreferrer"
        >
          Forum API Dicoding
        </a>
      </div>
      <div className="footer__item">
        <HuobiToken className="footer__icon" />
        <a
          className="footer__link"
          href="https://github.com/ebayyou/digiforum-app"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
      </div>

      <p className="footer__copyright">
        © 2023 DigiForum.
        <span>All rights reserved.</span>
      </p>
    </footer>
  );
};

export default SideBarFooter;
