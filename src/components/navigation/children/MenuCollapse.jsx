import PropTypes from 'prop-types';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MenuCollapse = ({ children, toggle }) => {
  return (
    <div className={`MenuCollapse ${toggle ? '' : 'hidden'}`}>
      {children}

      <footer className="MenuCollapse__footer">
        <div className="footer__info">
          <span>Talk to me</span>
          <h5>ebayyou@gmail.com</h5>
        </div>

        <Link
          to="/"
          className="footer__link"
        >
          <FiMail className="message" />
        </Link>
      </footer>
    </div>
  );
};

MenuCollapse.propTypes = {
  toggle: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default MenuCollapse;
