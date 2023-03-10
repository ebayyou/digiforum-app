import PropTypes from 'prop-types';
import { RiCloseFill } from 'react-icons/ri';

const MenuHeader = ({ onHandlerNavbar }) => {
  return (
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
  );
};

MenuHeader.propTypes = {
  onHandlerNavbar: PropTypes.func.isRequired,
};

export default MenuHeader;
