import PropTypes from 'prop-types';
import { RiCloseFill } from 'react-icons/ri';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MenuList from './MenuList';

const MenuCollapse = ({ toggle, onHandlerNavbar }) => {
  return (
    <div className={`MenuCollapse ${toggle ? '' : 'hidden'}`}>
      <div className="navbar__header">
        <div className="navbar__brand">
          <img
            src="images/brand/Logo_brand.png"
            alt="logo brand"
          />
          <div className="name__brand">
            <h4>DigiForum</h4>
            <span>Platform Discussion</span>
          </div>
        </div>

        <button
          type="button"
          className="navbar__btn-icon"
          onClick={onHandlerNavbar}
        >
          <RiCloseFill className="close" />
        </button>
      </div>

      <MenuList />

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
  onHandlerNavbar: PropTypes.func.isRequired,
};

export default MenuCollapse;
