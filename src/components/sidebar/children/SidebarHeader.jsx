import PropTypes from 'prop-types';
import { CloseCircle } from 'iconsax-react';

const SidebarHeader = ({ onHandlerSidebar }) => {
  return (
    <header className="sidebar__headers">
      <div className="headers__brand">
        <img
          className="headers__img"
          src="/images/brand/digiforum-stripe.svg"
          alt="logo"
        />
        <div className="headers__name">
          <h4>DigiForum</h4>
          <p>Platform Discussion</p>
        </div>
      </div>
      <button
        className="headers__button"
        type="button"
        onClick={onHandlerSidebar}
      >
        <CloseCircle className="headers__icon" />
      </button>
    </header>
  );
};

SidebarHeader.propTypes = {
  onHandlerSidebar: PropTypes.func.isRequired,
};

export default SidebarHeader;
