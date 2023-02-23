import { FiGitPullRequest, FiGithub } from 'react-icons/fi';

const SideBarFooter = () => {
  return (
    <footer className="sidebar__footer">
      <div className="footer__item">
        <FiGitPullRequest className="footer__icon" />
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
        <FiGithub className="footer__icon" />
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
